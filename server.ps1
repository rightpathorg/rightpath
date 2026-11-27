$port = 8080
$root = "D:\rightpath web"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Host "RightPath High-Performance Server running at http://localhost:$port/"
} catch {
    Write-Host "Failed to start on $port, trying 8081..."
    $port = 8081
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Prefixes.Add("http://127.0.0.1:$port/")
    $listener.Start()
    Write-Host "RightPath High-Performance Server running at http://localhost:$port/"
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

$compressible = @(".html", ".htm", ".css", ".js", ".json", ".svg")

function Compress-Gzip ([byte[]]$data) {
    $ms = New-Object System.IO.MemoryStream
    $gzip = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionMode]::Compress)
    $gzip.Write($data, 0, $data.Length)
    $gzip.Close()
    return $ms.ToArray()
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        $filePath = Join-Path $root ($urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar))

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            # High-performance Caching Headers
            $response.AddHeader("Cache-Control", "no-cache, must-revalidate")

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $acceptEncoding = $request.Headers["Accept-Encoding"]

            # On-the-fly Gzip compression for text assets
            if ($ext -in $compressible -and $acceptEncoding -and $acceptEncoding.Contains("gzip") -and $bytes.Length -gt 256) {
                $compressed = Compress-Gzip $bytes
                $response.AddHeader("Content-Encoding", "gzip")
                $response.AddHeader("Vary", "Accept-Encoding")
                $response.ContentLength64 = $compressed.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($compressed, 0, $compressed.Length)
            } else {
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        # ignore client disconnects
    }
}

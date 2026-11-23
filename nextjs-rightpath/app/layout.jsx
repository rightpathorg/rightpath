import './globals.css';
import DynamicLighting from '../components/DynamicLighting';

export const metadata = {
  title: 'RightPath NGO | Bridging Hope & Dignity | हर ज़िंदगी को मिले एक नई पहचान',
  description: 'RightPath NGO provides grassroots street education, wholesome daily nutrition, free medical health clinics, and vocational livelihoods for underprivileged children and families across Delhi NCR. 100% Tax Deductible under Sec 80G.',
  icons: {
    icon: '/images/rightpath_logo.png',
  },
  openGraph: {
    title: 'RightPath NGO - Empowering Children & Communities',
    description: 'Dedicated to nurturing identity, providing quality education, and enabling health equity across underserved communities.',
    images: ['/images/rightpath_logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-surface font-sans text-on-surface antialiased selection:bg-accent-sprout selection:text-primary relative min-h-screen">
        <DynamicLighting />
        {children}
      </body>
    </html>
  );
}

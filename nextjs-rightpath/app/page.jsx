'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import LiveDonorReel from '../components/LiveDonorReel';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Initiatives from '../components/Initiatives';
import VerifiedImpact from '../components/VerifiedImpact';
import Stories from '../components/Stories';
import VolunteerSection from '../components/VolunteerSection';
import DonationModal from '../components/DonationModal';
import AboutUsModal from '../components/AboutUsModal';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [donationModalState, setDonationModalState] = useState({
    isOpen: false,
    amount: 1200,
    cause: '',
  });

  const [aboutUsModalOpen, setAboutUsModalOpen] = useState(false);

  const handleOpenDonation = (amount = 1200, cause = '') => {
    setDonationModalState({
      isOpen: true,
      amount,
      cause,
    });
  };

  const handleCloseDonation = () => {
    setDonationModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Navbar
        onOpenDonation={handleOpenDonation}
        onOpenAboutUs={() => setAboutUsModalOpen(true)}
      />
      
      <main className="w-full pt-20">
        <LiveDonorReel onOpenDonation={handleOpenDonation} />
        <Hero onOpenDonation={handleOpenDonation} />
        <Initiatives onOpenDonation={handleOpenDonation} />
        <VerifiedImpact />
        <Stories />
        <VolunteerSection
          onOpenDonation={handleOpenDonation}
        />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <AboutUsModal
        isOpen={aboutUsModalOpen}
        onClose={() => setAboutUsModalOpen(false)}
        onOpenDonation={handleOpenDonation}
      />

      <DonationModal
        isOpen={donationModalState.isOpen}
        onClose={handleCloseDonation}
        defaultAmount={donationModalState.amount}
        defaultCause={donationModalState.cause}
      />
    </>
  );
}

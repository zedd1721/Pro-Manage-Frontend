import "@/features/landing/landing.css";
import Navbar from "@/features/landing/components/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import SocialProof from "@/features/landing/components/SocialProof";
import Features from "@/features/landing/components/Features";
import Workflow from "@/features/landing/components/Workflow";
import Collaboration from "@/features/landing/components/Collaboration";
import TeamManagement from "@/features/landing/components/TeamManagement";
import Analytics from "@/features/landing/components/Analytics";
import VideoCalling from "@/features/landing/components/VideoCalling";
import WhyProjectFlow from "@/features/landing/components/WhyProjectFlow";
import Testimonials from "@/features/landing/components/Testimonials";
import FAQ from "@/features/landing/components/FAQ";
import FinalCTA from "@/features/landing/components/FinalCTA";
import Footer from "@/features/landing/components/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page min-h-screen bg-background text-text-primary">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <Features />
      <Workflow />
      <Collaboration />
      <TeamManagement />
      <Analytics />
      <VideoCalling />
      <WhyProjectFlow />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

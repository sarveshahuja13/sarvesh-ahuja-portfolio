import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FocusSection } from "@/components/sections/focus-section";
import dynamic from 'next/dynamic';

const ExperienceSection = dynamic(() => import("@/components/sections/experience-section").then(mod => mod.ExperienceSection), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section").then(mod => mod.ProjectsSection));
const CertificationsSection = dynamic(() => import("@/components/sections/certifications-section").then(mod => mod.CertificationsSection));
const EducationSection = dynamic(() => import("@/components/sections/education-section").then(mod => mod.EducationSection));
const HobbiesSection = dynamic(() => import("@/components/sections/hobbies-section").then(mod => mod.HobbiesSection));
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative z-10 bg-background">
          <FocusSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <HobbiesSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

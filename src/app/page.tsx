import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FocusSection } from "@/components/sections/focus-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { EducationSection } from "@/components/sections/education-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { ContactSection } from "@/components/sections/contact-section";

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

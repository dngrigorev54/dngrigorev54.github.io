import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhenNeedCopywriter } from "@/components/when-need-copywriter"
import { AboutSection } from "@/components/about-section"
import { ContentTasks } from "@/components/content-tasks"
import { ServicesSection } from "@/components/services-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { BlogPreview } from "@/components/blog-preview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhenNeedCopywriter />
        <AboutSection />
        <ContentTasks />
        <ServicesSection />
        <PortfolioPreview />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}

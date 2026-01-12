import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050505", color: "#ffffff" }} className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

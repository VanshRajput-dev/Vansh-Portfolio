"use client"

const experiences = [
  {
    period: "2025 — PRESENT",
    company: "DoItForMe",
    role: "Developer", // or "Full Stack Engineer"
    description: "Architecting and developing a comprehensive platform to facilitate [core service, e.g., gig connections] for [target audience].",
    highlights: ["Next.js", "Supabase", "Tailwind CSS"], // Update with your actual stack
  },
  {
    
    period: "2024 — PRESENT",
    company: "ACM & Networking Nexus",
    role: "Web Developer",
    description: "Contributing to web development initiatives and networking events at SRMIST.",
    highlights: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2024",
    company: "Hackathons",
    role: "Hackathon Organizer & Participant",
    description: "Organizing HackOfDuty event and participating in Appathon and HackVers.",
    highlights: ["Event Organizer", "Problem Solving", "Full Stack"],
  },
  {
    period: "2024",
    company: "Manjari Foundation",
    role: "Community Research Contributor",
    description: "Contributing to field research in Dholpur, Rajasthan with data collection and community engagement.",
    highlights: ["Field Research", "Community Work", "Data Analysis"],
  },
]
    // background-color: #050505;
    // background-image: linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px);
    // background-size: 60px 60px;

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)",
        backgroundSize: "60px 60px",
      }}
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-8 mb-16">
          <p
            style={{
              fontSize: "0.875rem",
              color: "#ccff00",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            {"<"} EXPERIENCE {"/>"}
          </p>
          <h2
            style={{ fontSize: "3.75rem", fontWeight: "900", fontFamily: "var(--font-syne)" }}
            className="tracking-tighter text-white"
          >
            CAREER
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                borderLeft: "2px solid #2a2a2a",
                paddingLeft: "2rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
              className="group hover:bg-neutral-900/50 px-8 -mx-8 transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "#ccff00"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "#2a2a2a"
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#ccff00",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                {exp.period}
              </p>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "900",
                  fontFamily: "var(--font-syne)",
                  marginBottom: "0.5rem",
                }}
                className="text-white tracking-tight"
              >
                {exp.role}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                @ {exp.company}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#d1d5db",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jetbrains)",
                }}
                className="leading-relaxed"
              >
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((hl) => (
                  <span
                    key={hl}
                    style={{
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.75rem",
                      border: "1px solid #ccff00",
                      color: "#ffffff",
                      fontFamily: "var(--font-jetbrains)",
                      backgroundColor: "transparent",
                      transition: "all 0.3s ease-in-out",
                    }}
                    className="group-hover:border-yellow-300 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ccff00"
                      e.currentTarget.style.color = "#050505"
                      e.currentTarget.style.boxShadow = "0 0 10px rgba(204, 255, 0, 0.5)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#ffffff"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

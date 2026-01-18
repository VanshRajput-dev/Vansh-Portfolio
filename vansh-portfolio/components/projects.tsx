"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "ETL + ML Sentiment Pipeline",
    subtitle: "Machine Learning",
    description:
      "Automated end-to-end pipeline that extracts raw data, cleans and preprocesses it, trains a sentiment classification model, and generates predictions.",
    tech: ["Python", "TF-IDF", "Logistic Regression", "Docker", "DVC", "Jenkins"],
    link: "https://github.com/VanshRajput-dev/ETL-Machine-Learning-Integration.git",
    featured: true,
  },
  {
    id: 2,
    title: "AI Video Subtitle Generator",
    subtitle: "Chrome Extension",
    description:
      "Chrome extension that captures live tab audio, transcribes speech using Whisper-based backend, and injects real-time English subtitles into webpages.",
    tech: ["JavaScript", "Chrome APIs", "Whisper", "Flask", "FFmpeg"],
    link: "https://github.com/VanshRajput-dev/Auto-Sub.git",
    featured: true,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
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
              animation: "slideInLeft 0.6s ease-out",
            }}
          >
            {"<"} SELECTED_WORK {"/>"}
          </p>
          <h2
            style={{
              fontSize: "3.75rem",
              fontWeight: "900",
              fontFamily: "var(--font-syne)",
              animation: "slideInLeft 0.8s ease-out 0.1s both",
            }}
            className="tracking-tighter text-white"
          >
            PROJECTS
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              style={{
                backgroundColor: "#1a1a1a",
                border: `2px solid #ccff00`,
                animation: `slideInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
              }}
              className="group p-8 transition-all relative"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(204, 255, 0, 0.4)"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {/* Card content */}
              <div className="space-y-6">
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#ccff00",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.15em",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {project.subtitle.toUpperCase()}
                  </p>
                  <h3
                    style={{ fontSize: "1.875rem", fontWeight: "900", fontFamily: "var(--font-syne)" }}
                    className="tracking-tight text-white group-hover:text-yellow-300 transition-colors"
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  style={{ fontSize: "0.875rem", color: "#d1d5db", fontFamily: "var(--font-jetbrains)" }}
                  className="leading-relaxed"
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        border: "1px solid #ccff00",
                        color: "#ffffff",
                        backgroundColor: "transparent",
                        fontFamily: "var(--font-jetbrains)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      className="cursor-pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#ccff00"
                        e.currentTarget.style.color = "#ffffff"
                        e.currentTarget.style.boxShadow =
                          "0 0 10px rgba(204, 255, 0, 0.8), 0 0 20px rgba(204, 255, 0, 0.4)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#ffffff"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                  <ExternalLink size={16} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-jetbrains)", letterSpacing: "0.1em" }}>
                    VIEW PROJECT
                  </span>
                </div>
              </div>

              {/* Corner decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  color: "#ccff00",
                  opacity: 0,
                  fontSize: "1.5rem",
                }}
                className="group-hover:opacity-100 transition-opacity"
              >
                →
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

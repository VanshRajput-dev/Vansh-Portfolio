"use client"

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)",
        backgroundSize: "60px 60px",
      }}
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-16">
          {/* Large heading */}
          <div className="space-y-6">
            <p
              style={{
                fontSize: "0.875rem",
                color: "#ccff00",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {"<"} GET_IN_TOUCH {"/>"}
            </p>
            <h2
              style={{ fontSize: "3.5rem", fontWeight: "900", fontFamily: "var(--font-syne)" }}
              className="leading-tight text-white"
            >
              LET'S BUILD
              <br />
              SOMETHING GREAT
            </h2>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:vr7404560@gmail.com"
              style={{ backgroundColor: "#1a1a1a", border: "2px solid #ccff00" }}
              className="group p-8 transition-all"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(204, 255, 0, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#ccff00",
                  marginBottom: "1rem",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                EMAIL
              </p>
              <p
                style={{ fontSize: "1.125rem", fontFamily: "var(--font-jetbrains)", color: "#ffffff" }}
                className="group-hover:text-yellow-300 transition-colors break-all"
              >
                vr7404560@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/VanshRajput-dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#1a1a1a", border: "2px solid #ccff00" }}
              className="group p-8 transition-all"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(204, 255, 0, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#ccff00",
                  marginBottom: "1rem",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                GITHUB
              </p>
              <p
                style={{ fontSize: "1.125rem", fontFamily: "var(--font-jetbrains)", color: "#ffffff" }}
                className="group-hover:text-yellow-300 transition-colors"
              >
                VanshRajput-dev
              </p>
            </a>

            <a
              href="https://linkedin.com/in/vansh-rajput"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#1a1a1a", border: "2px solid #ccff00" }}
              className="group p-8 transition-all"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(204, 255, 0, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#ccff00",
                  marginBottom: "1rem",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                LINKEDIN
              </p>
              <p
                style={{ fontSize: "1.125rem", fontFamily: "var(--font-jetbrains)", color: "#ffffff" }}
                className="group-hover:text-yellow-300 transition-colors"
              >
                Vansh Rajput
              </p>
            </a>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "2px solid #2a2a2a", paddingTop: "4rem" }} className="text-center">
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {"©"} 2026 VANSH RAJPUT. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

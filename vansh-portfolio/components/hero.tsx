"use client"
import Image from "next/image"
export function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)",
        backgroundSize: "60px 60px",
      }}
      className="relative min-h-screen overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          backgroundImage:
            "linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "fadeGridHover 0.6s ease-in-out",
          opacity: 0,
          zIndex: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1"
          e.currentTarget.style.animation = "fadeGridHover 0.6s ease-in-out forwards"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animation = "fadeGridOut 0.6s ease-in-out forwards"
          setTimeout(() => {
            e.currentTarget.style.opacity = "0"
          }, 600)
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div
              style={{
                color: "#ccff00",
                fontSize: "3rem",
                fontWeight: "900",
                lineHeight: "1",
                opacity: 0.5,
                animation: "pulse 3s ease-in-out infinite",
              }}
            >
              *
            </div>

            <div className="space-y-4">
              <p
                style={{
                  color: "#ccff00",
                  fontSize: "0.875rem",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-jetbrains)",
                  animation: "slideInLeft 0.6s ease-out",
                }}
              >
                {"<"} MLOps_&_SYSTEMS_ENGINEER {"/>"}
              </p>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-syne)",
                  animation: "slideInLeft 0.8s ease-out 0.1s both",
                }}
                className="leading-tight text-white"
              >
                VANSH RAJPUT
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#d1d5db",
                  fontFamily: "var(--font-jetbrains)",
                  animation: "slideInLeft 1s ease-out 0.2s both",
                }}
                className="max-w-md leading-relaxed"
              >
                Building scalable machine learning pipelines, automation systems, and startup-ready products.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8 pt-8">
              <a
                href="#projects"
                style={{
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-jetbrains)",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease-in-out",
                  animation: "slideInLeft 0.8s ease-out 0.3s both",
                }}
                className="transition-all hover:text-yellow-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ccff00"
                  e.currentTarget.style.textShadow = "0 0 10px rgba(204, 255, 0, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff"
                  e.currentTarget.style.textShadow = "none"
                }}
              >
                WORK
              </a>
              <a
                href="#experience"
                style={{
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-jetbrains)",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease-in-out",
                  animation: "slideInLeft 0.8s ease-out 0.4s both",
                }}
                className="transition-all hover:text-yellow-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ccff00"
                  e.currentTarget.style.textShadow = "0 0 10px rgba(204, 255, 0, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff"
                  e.currentTarget.style.textShadow = "none"
                }}
              >
                EXPERIENCE
              </a>
              <a
                href="#contact"
                style={{
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-jetbrains)",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease-in-out",
                  animation: "slideInLeft 0.8s ease-out 0.5s both",
                }}
                className="transition-all hover:text-yellow-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ccff00"
                  e.currentTarget.style.textShadow = "0 0 10px rgba(204, 255, 0, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff"
                  e.currentTarget.style.textShadow = "none"
                }}
              >
                CONTACT
              </a>
            </nav>
          </div>

          <div
            className="flex items-center justify-center"
            style={{ animation: "slideInRight 0.8s ease-out 0.2s both" }}
          >
            <div
              style={{
                width: "16rem",
                height: "16rem",
                borderRadius: "50%",
                border: "2px solid #ccff00",
                backgroundColor: "#1a1a1a",
                transition: "all 0.3s ease-in-out",
              }}
              className="flex items-center justify-center group relative overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(204, 255, 0, 0.6), inset 0 0 20px rgba(204, 255, 0, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccff00"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage:
                    "linear-gradient(rgba(204, 255, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.15) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  borderRadius: "50%",
                  opacity: 0,
                  transition: "opacity 0.4s ease-in-out",
                  zIndex: 1,
                }}
                className="group-hover:opacity-100"
              />

              <div className="relative w-full h-full rounded-full overflow-hidden z-10">
                <Image
                  src="/Me.png"   // change if filename differs
                  alt="Vansh Rajput"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            color: #ffffff;
          }
          to {
            opacity: 1;
            color: #ccff00;
          }
        }
        
        @keyframes fadeGridHover {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeGridOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}

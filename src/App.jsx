import profile from "./image/profile.jpg.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import resume from "./assets/Priyansh resume.pdf";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

const [isMobile, setIsMobile] = useState(
  window.innerWidth < 768
);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  const [active, setActive] = useState("home");
useEffect(() => {
  AOS.init({
    duration: 1200,
  });

  const handleScroll = () => {
    const sections = ["about", "skills", "projects", "contact"];

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(id);
        }
      }
    });

    if (window.scrollY < 300) {
      setActive("home");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        fontFamily: "Arial",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* ANIMATED BACKGROUND */}
<div
  style={{
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "rgba(59,130,246,0.25)",
    borderRadius: "50%",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
  }}
></div>

<div
  style={{
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "rgba(168,85,247,0.18)",
    borderRadius: "50%",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
  }}
></div>
      {/* NAVBAR */}
      <div
  style={{
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "28px",
    flexWrap: "nowrap",
    padding: isMobile ? "18px 20px" : "22px 70px",
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(10px)",
    zIndex: "1000",
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  }}
>
  <h2
    style={{
      color: "white",
      fontSize: "28px",
      fontWeight: "bold",
    }}
  >
    Priyansh.
  </h2>
  {isMobile && (
  <div
    onClick={() => setMenuOpen(!menuOpen)}
    style={{
      color: "white",
      fontSize: "28px",
      cursor: "pointer",
    }}
  >
    ☰
  </div>
)}

  <div
    style={{
      display:
  isMobile
    ? (menuOpen ? "flex" : "none")
    : "flex",
      gap: isMobile ? "18px" : "35px",
      color: "white",
      fontSize: isMobile ? "12px" : "18px",
      cursor: "pointer",
      flexWrap: "wrap",
      flexDirection:
  isMobile ? "column" : "row",

position:
  isMobile ? "absolute" : "static",

top:
  isMobile ? "80px" : "0",

right:
  isMobile ? "20px" : "0",

background:
  isMobile ? "rgba(0,0,0,0.95)" : "transparent",

padding:
  isMobile ? "20px" : "0",

borderRadius:
  isMobile ? "12px" : "0",
      justifyContent: "center",
    }}
  >
    <span
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    transition: "0.3s",
    color: active === "home" ? "#3b82f6" : "white",
  }}
>
  Home
</span>
    <span onClick={() => document.getElementById('about').scrollIntoView({behavior:'smooth'})}style={{
  transition: "0.3s",
  color: active === "home" ? "#3b82f6" : "white",
}}>
  About
</span>
    <span onClick={() => document.getElementById('skills').scrollIntoView({behavior:'smooth'})}style={{
  transition: "0.3s",
  color: active === "home" ? "#3b82f6" : "white",
}}>
  Skills
</span>
    <span onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}style={{
  transition: "0.3s",
  color: active === "home" ? "#3b82f6" : "white",
}}>
  Projects
</span>
    <span onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}style={{
  transition: "0.3s",
  color: active === "home" ? "#3b82f6" : "white",
}}>
  Contact
</span>
  </div>
</div>

      {/* HERO SECTION */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile
  ? "170px 6% 80px"
  : "140px 4%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
            gap: "20px",
            flexWrap: "wrap",
            rowGap: "60px",
          }}
        >
          {/* LEFT SIDE */}
          <div
                style={{
                  flex: 1,
                  minWidth: "320px",
                }}
              >
            <h1
              style={{
               fontSize: isMobile ? "36px" : "78px",
                fontWeight: "bold",
                letterSpacing: "2px",
                color: "white",
                marginBottom: "20px",
                lineHeight: isMobile ? "1.25" : "1.1",
                wordBreak: "break-word",
              }}
            >
              Priyansh Solanki
            </h1>

           <TypeAnimation
  sequence={[
    "Frontend Web Developer",
    2000,
    "React JS Developer",
    2000,
    "Modern UI Designer",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  style={{
    fontSize: isMobile ? "22px" : "28px",
    color: "#94a3b8",
    display: "inline-block",
    marginBottom: "35px",
    fontWeight: "500",
  }}
/>
            <p
  style={{
    color: "#cbd5e1",
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "1.8",
    maxWidth: "600px",
    marginBottom: "35px",
  }}
>
  I build modern, responsive and user-friendly web interfaces
  with clean UI and smooth user experience.
</p> <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    alignItems: "center",
  }}
>

            <button
            onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.08)";
  e.target.style.boxShadow = "0 0 40px rgba(59,130,246,0.9)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
  e.target.style.boxShadow = "0 0 25px rgba(59,130,246,0.7)";
}}
              style={{
                padding:
                isMobile
                  ? "12px 20px"
                  : "15px 30px",
                background: "#3b82f6",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontSize:
                isMobile
                  ? "16px"
                  : "18px",
                cursor: "pointer",
                boxShadow: "0 0 25px rgba(59,130,246,0.7)",
             transition: "0.3s",
             transform: "scale(1)",
             }}
            >
              View Projects
            </button>
            <a
  href={resume}
  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow =
    "0 15px 35px rgba(59,130,246,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow = "none";
}}
  download
  style={{
    display: "inline-block",
    marginLeft: "20px",
    padding:
  isMobile
    ? "12px 20px"
    : "15px 30px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    color: "white",
    textDecoration: "none",
    fontSize:
  isMobile
    ? "16px"
    : "18px",
    transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
    transform: "translateY(0px)",
  }}
>
  Download Resume
</a>
</div>
            <p
           style={{
            color: "#64748b",
            marginTop: "18px",
            fontSize: "15px",
          }}
>
  Available for freelance & frontend projects
</p>
          </div>

          {/* RIGHT SIDE */}
          <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  minWidth: "320px",
                }}
              >
            <img
              src={profile}
              alt="profile"
              style={{
               width: "100%",
                maxWidth: isMobile ? "280px" : "380px",
                height: isMobile ? "320px" : "420px",
                objectFit: "cover",
                borderRadius: "20px",
                objectPosition: "top",
                border: "4px solid #3b82f6",
                boxShadow: "0 0 60px rgba(59,130,246,0.45)",
                 transition: "0.4s",
                animation: "float 4s ease-in-out infinite",
  }}
            />
          </div>
        </div>
      </div>
      {/* SKILLS SECTION */}
<div
data-aos="fade-up"
 id="skills"
  style={{
    padding: "80px 8%",
    background: "#0f172a",
    color: "white",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize:
  isMobile
    ? "32px"
    : "42px",
      marginBottom: "50px",
      color:"white",
    }}
  >
    My Skills
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "25px",
      maxWidth: "1000px",
      margin: "auto",
    }}
  >
    {[
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Git & GitHub",
    ].map((skill) => (
      <div
        key={skill}
        onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-12px)";
  e.currentTarget.style.boxShadow =
    "0 15px 40px rgba(59,130,246,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow =
    "0 8px 32px rgba(0,0,0,0.35)";
}}
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          fontSize: "22px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: "translateY(0px)",
        }}
      >
        {skill}
      </div>
    ))}
  </div>
</div>
{/* PROJECTS SECTION */}
<div
data-aos="fade-up"
id="projects"
  style={{
    padding: "80px 8%",
    background: "#020617",
    color: "white",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize:
  isMobile
    ? "32px"
    : "42px",
      marginBottom: "50px",
      color: "white",
    }}
  >
    Projects
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    {/* PROJECT CARD */}
    <div
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-12px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(59,130,246,0.25)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 8px 32px rgba(0,0,0,0.35)";
  }}

  style={{
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
    transition: "all 0.3s ease",
    transform: "translateY(0px)",
    cursor: "pointer",
  }}

    >
      <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
        Portfolio Website
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        Modern responsive portfolio website using React JS and custom styling.
      </p>

      <a
        href="https://github.com/priyanshsolanki03"
        target="_blank"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        View Project →
      </a>
    </div>

    {/* SECOND CARD */}
    <div
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-12px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(59,130,246,0.25)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 8px 32px rgba(0,0,0,0.35)";
  }}

  style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
        transform: "translateY(0px)",
        cursor: "pointer",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 0 20px rgba(59,130,246,0.2)",
      }}
    >
      <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
        React UI Design
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        Professional frontend UI made with React JS and responsive layouts.
      </p>

      <a
        href="https://github.com/priyanshsolanki03"
        target="_blank"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        View Project →
      </a>
    </div>
  </div>
</div>
{/* ABOUT SECTION */}
<div
data-aos="fade-up"
id="about"
  style={{
    padding: "80px 8%",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize:
  isMobile
    ? "32px"
    : "42px",
      marginBottom: "30px",
      color:"white",
    }}
  >
    About Me
  </h2>

  <p
    style={{
      maxWidth: "800px",
      margin: "auto",
      fontSize:
  isMobile
    ? "16px"
    : "20px",
      lineHeight: "1.8",
      color: "#f6f6f6",
    }}
  >
    I am Priyansh Solanki, a passionate Frontend Web Developer
    with knowledge of React JS, JavaScript, Tailwind CSS and
    responsive web design. I enjoy creating modern, clean and
    user-friendly websites with professional UI.
  </p>
</div>

{/* CONTACT SECTION */}
<div
data-aos="fade-up"
id="contact"
  style={{
    padding: "80px 8%",
    background: "#020617",
    color: "white",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize:
  isMobile
    ? "32px"
    : "42px",
      marginBottom: "40px",
      color:"white",
    }}
  >
    Contact Me
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
    }}
  >
    <a
    onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow =
    "0 15px 35px rgba(59,130,246,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow = "none";
}}
      href="https://github.com/priyanshsolanki03"
      target="_blank"
      style={{
        padding: "15px 30px",
        background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
          display: "inline-block",
        color: "white",
        textDecoration: "none",
        borderRadius: "12px",
        fontSize: "18px",
      }}
    >
      GitHub
    </a>

    <a  
    onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow =
    "0 15px 35px rgba(59,130,246,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow = "none";
}}
      href="https://www.linkedin.com/in/priyansh-solanki-521615391/"
      target="_blank"
      style={{
       padding: "15px 30px",
        background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
          display: "inline-block",
        color: "white",
        textDecoration: "none",
        borderRadius: "12px",
        fontSize: "18px",
      }}
    >
      LinkedIn
    </a>

    <a
    onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow =
    "0 15px 35px rgba(59,130,246,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow = "none";
}}
      href="https://wa.me/917028099690"
      target="_blank"
      style={{
        padding: "15px 30px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        textDecoration: "none",
        borderRadius: "12px",
        fontSize: "18px",
        transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      WhatsApp
    </a>
  </div>
</div>{/* FOOTER */}
<div
  style={{
   padding: "15px 30px",
        background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
          display: "inline-block",
        color: "white",
        textDecoration: "none",
        borderRadius: "12px",
        fontSize: "18px",
  }}
>
  <p
    style={{
      fontSize: "16px",
      letterSpacing: "1px",
    }}
  >
    © 2026 Priyansh Solanki • Frontend Developer
  </p>
</div>
    </div>
  );
}
const style = document.createElement("style");

style.innerHTML = `
@keyframes float {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
  }
}
`;

document.head.appendChild(style);
export default App;
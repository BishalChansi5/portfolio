import React, { useEffect, useRef, forwardRef } from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Bottom from "../components/Bottom";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const MainBody = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 200;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 1.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha > 1 || star.alpha < 0) star.delta = -star.delta;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Pass projectsRef to parent via ref
  React.useImperativeHandle(ref, () => ({
    scrollToHome: () => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToProjects: () => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToAbout: () => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToContact: () => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToExperience: () => {
      experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  const handleClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-black via-gray-900 to-black"
      />
      <section ref={homeRef}>
        <HeroSection onClick={handleClick} />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <Bottom />
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
});

export default MainBody;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Slider from "../Slider/Slider"; // ⬅️ new import
import { Link } from "react-router-dom";


const Hero = () => {
  const { scrollY } = useScroll();

  // Animate hero text content
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 200], [0, -80]);

  // Animate dashboard image
  const imgY = useTransform(scrollY, [0, 400], [0, -120]);
  const imgScale = useTransform(scrollY, [0, 400], [1, 1.12]);

  // Overlay fade-in after dashboard fully in view
  const overlayOpacity = useTransform(scrollY, [300, 600], [0, 1]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* 🔵 Glowing effect on top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1800px] h-[600px] bg-gradient-to-b from-[#fff9f0] to-transparent rounded-full blur-3xl opacity-70 pointer-events-none z-0" />

      {/* Sticky hero content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="sticky top-0 min-h-screen flex flex-col items-center justify-start pt-32 text-center px-6 lg:px-8 z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#BAD6EB]/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#0B1F5C]" />
          <span className="text-sm font-medium text-[#0B1F5C]">
            AI-Powered Career Guidance
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-[#0B1F5C]">Personalized Learning</span>
          <br />
          <span className="bg-gradient-to-r from-[#334EAC] to-[#BAD6EB] bg-clip-text text-transparent">
            Path Generator
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover your perfect career path with AI-powered guidance,
          personalized mentorship, and tools designed to accelerate your professional journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
  to="/signup"
  className="flex items-center gap-2 bg-[#0B1F5C] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
>
  Get Started
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
</Link>

          <button className="text-[#0B1F5C] border border-[#0B1F5C]/30 hover:border-[#0B1F5C]/50 bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Slider replaces single image */}
      <Slider imgY={imgY} imgScale={imgScale} overlayOpacity={overlayOpacity} />

      {/* Spacer for scroll */}
      {/* <div className="h-[120vh]" /> */}
    </section>
  );
};

export default Hero;

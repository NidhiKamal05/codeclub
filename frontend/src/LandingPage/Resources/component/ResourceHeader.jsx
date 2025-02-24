"use client";
import React from "react";

import { SparklesCore } from "./Sparkles.jsx";

export default function SparklesPreview() {
  return (
    <div className="h-70% w-full bg-black flex flex-col items-center  overflow-hidden rounded-md pt-4">
      <h1 className="md:text-5xl text-5xl lg:text-7xl font-bold text-center text-white relative z-20">
        Resources
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

        
      </div>

      <div className="text-2xl p-4"><p>
      📚 Resources Hub - Elevate Your Coding Skills! 🚀
Welcome to the Resources Hub of our Coding Club! Whether you're a beginner or an experienced coder, we’ve got you covered with carefully curated resources to help you master DSA (Data Structures & Algorithms), Development (Web & App), and AI & Machine Learning.

🔹 DSA & Competitive Programming – Strengthen your problem-solving skills with expert tutorials, coding platforms, and roadmap guides.
🔹 Web & App Development – Explore front-end, back-end, full-stack, and mobile development with top-notch learning materials.
🔹 AI & Machine Learning – Get started with AI, ML, and deep learning through handpicked resources, including Python libraries and real-world projects.

📌 Here, you'll find recommended YouTube channels, must-read articles, and structured learning paths to guide your journey. Start learning today and take your coding skills to the next level! 🚀

👉 Explore the resources and start building! 💡
        </p></div>
        
    </div>
  );
}

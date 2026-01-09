import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LetterGlitch from '@/components/LetterGlitch';
import BlurText from '@/components/BlurText';

export function HeroSection() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030014]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LetterGlitch
          glitchColors={['#2b0033', '#5c007a', '#8e00c2', '#00f3ff']}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <BlurText
                text="Sarvesh Ahuja"
                delay={150}
                animateBy="words"
                direction="top"
                className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 mb-4 block uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />

              <div className="flex justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl font-mono tracking-widest text-cyan-400 animate-pulse border-r-4 border-cyan-400 pr-2">
                  AI & Data Engineer
                </h2>
              </div>
            </div>

            <div className="prose prose-lg text-gray-400 max-w-none">
              <p className="leading-relaxed text-lg md:text-xl font-light">
                <span className="text-cyan-500 font-mono text-sm mr-2">{'>'}</span>
                I build intelligent systems where data, creativity, and engineering converge. Passionate about <span className="text-cyan-300">Agentic AI</span>, scalable cloud architecture, and solving complex problems with elegant code.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
              <Button asChild className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 backdrop-blur-md border border-cyan-500/50 rounded-none px-8 py-6 text-lg font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <a href="#projects">
                  [ VIEW_PROJECTS ]
                </a>
              </Button>

              <div className="flex space-x-3">
                {[
                  { icon: Github, link: "https://github.com/sarveshahuja13" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/sarvesh-ahuja-ai-engineer" },
                  { icon: Twitter, link: "https://x.com/sarveshahuja13" },
                  { icon: Mail, link: "mailto:sarvesh.ahuja13@gmail.com" }
                ].map((social, idx) => (
                  <Button key={idx} variant="ghost" size="icon" asChild className="rounded-full text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-cyan-500/30">
                    <Link href={social.link} target="_blank">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-full">
            {/* Abstract glow behind profile */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>

            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/profile.webp"
                alt="Sarvesh Ahuja"
                width={350}
                height={350}
                className="relative rounded-full object-cover aspect-square shadow-2xl border-2 border-cyan-500/30 filter grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#focus" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer p-2 hover:bg-cyan-500/10 rounded-full transition-colors" aria-label="Scroll down">
        <ArrowDown className="w-6 h-6 text-gray-500 hover:text-cyan-400 transition-colors" />
      </a>
    </section>
  );
}

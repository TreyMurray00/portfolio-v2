"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { url } from 'inspector';

export default function Hero({ profile }: { profile: any }) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            {profile.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            {profile.bio}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            {profile.socialLinks?.github && (
              <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition">
                GitHub
              </a>
            )}
            {profile.socialLinks?.linkedin && (
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition">
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>
        
        {profile.image && (
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative mx-auto">
              <Image
                src={urlFor(profile.image).width(800).height(600).url()}
                alt={profile.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
      </div>
      
      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
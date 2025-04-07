"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact({ profile }: { profile: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (profile.email) {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>

          {profile.email && (
            <div className="mb-8">
              <Button
                variant="outline"
                className="w-full max-w-sm"
                onClick={handleCopyEmail}
              >
                <Mail className="mr-2 h-4 w-4" />
                {copied ? 'Copied!' : profile.email}
              </Button>
            </div>
          )}

          <div className="flex justify-center gap-4">
            {profile.socialLinks?.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {profile.socialLinks?.linkedin && (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            {profile.socialLinks?.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
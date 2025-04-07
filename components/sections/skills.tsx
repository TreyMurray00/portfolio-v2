"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
type Skill = {
  _id: string;
  name: string;
  icon: string;
  category: string;
};

type SkillsByCategory = {
  [key: string]: Skill[];
};

export default function Skills({ skills }: { skills: Skill[] }) {
  const skillsByCategory = skills.reduce((acc: SkillsByCategory, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                >
                  {skill.icon && (
                    <div className="relative w-12 h-12 mb-3">
                      <Image
                        src={urlFor(skill.icon).width(100).height(100).url()}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-center text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
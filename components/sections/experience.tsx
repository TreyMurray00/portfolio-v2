"use client";

import { motion } from 'framer-motion';
import { format } from 'date-fns';

type Experience = {
  _id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
};

export default function Experience({ experience }: { experience: Experience[] }) {

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={job._id}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-lg text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-muted-foreground">
                  {format(new Date(job.startDate), 'MMM yyyy')} -{' '}
                  {job.current
                    ? 'Present'
                    : job.endDate && format(new Date(job.endDate), 'MMM yyyy')}
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {

                  job.description.map((item, i) => (
                    <li key={Math.random() * 1000}>{item}</li>
                  ))
                }
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
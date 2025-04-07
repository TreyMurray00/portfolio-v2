

import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Navbar from '@/components/navbar';
import { dummyData } from '@/lib/data';



import {profileQuery, skillsQuery, experienceQuery,projectsQuery,fetchData }from '@/sanity/lib/queries'
import {client} from '@/lib/sanity';



export default async function Home() {

  const profileData = await client.fetch(profileQuery);
  const skillsData = await client.fetch(skillsQuery);
  const experienceData = await client.fetch(experienceQuery);
  const projectsData = await client.fetch(projectsQuery);


  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero profile={profileData[0]} />
      <Projects projects={projectsData} />
      <Skills skills={skillsData} />
      <Experience experience={experienceData} />
      <Contact profile={profileData[0]} />
    </main>
  );
}
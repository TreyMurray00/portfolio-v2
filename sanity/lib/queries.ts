
import {groq} from 'next-sanity'
import { client } from '@/lib/sanity'

const profileQuery = groq`*[_type == "profile"] {
  ...
}
`

const projectsQuery = groq`*[_type == "project"]{
  title,
  slug,
  image{
    asset->{
      _id,
      url
    }
  },
  description,
  technologies,
  demoUrl,
  githubUrl
}`

const skillsQuery = groq`*[_type == "skill"]{
  name,
  icon{
    asset->{
      _id,
      url
    }
  },
  category
}`

const experienceQuery = groq`*[_type == "experience"] | order(startDate desc){
  company,
  position,
  startDate,
  endDate,
  current,
  description
}`

async function fetchData(query: string) {
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }

}

export {profileQuery, projectsQuery, skillsQuery, experienceQuery, fetchData};
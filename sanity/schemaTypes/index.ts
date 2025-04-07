import { type SchemaTypeDefinition } from 'sanity'
import profile from '../schemas/profile'
import project from '../schemas/project'
import skill from '../schemas/skill'
import experience from '../schemas/experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, skill, experience],
}

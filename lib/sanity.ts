import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID|| 'your_project_id',
  dataset: 'production',
  apiVersion: '2024-03-21',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
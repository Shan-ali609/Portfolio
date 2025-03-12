// app/projects/[slug]/page.tsx
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

 const page = async({ params })=> {
 
  
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt="ok"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link href="/project" className="mt-8 inline-block text-blue-600 hover:text-blue-800">
        ← Back to Projects
      </Link>
    </div>
  );
}

export default page
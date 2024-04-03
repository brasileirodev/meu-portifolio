import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    technologies: string[];
    imageSrc: string;
    githubLink: string;
    deployLink: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, imageSrc, githubLink, deployLink }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image src={imageSrc} alt={title} className="w-full" width={500} height={500}/>
        <div className="p-4">
          <h3 className="font-bold">{title}</h3>
          <div className="flex space-x-2 my-2">
            {technologies.map((tech) => (
              <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">Deploy</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  
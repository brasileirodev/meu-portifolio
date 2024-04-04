import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  technologies: string[];
  imageSrc: string;
  links: {
    label: string;
    url: string;
    color: string;
  }[]
  details?: {
    label: string;
    value: string;
  };
  outcome?: {
    label: string;
    value: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, imageSrc, links, details, outcome }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={imageSrc} alt={title} className="w-full h-72" width={500} height={500}/>
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <div className="flex flex-wrap my-2">
          {technologies.map((tech) => (
            <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full truncate mx-1 mb-1" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {details && (
          <div className="my-2">
            <h4 className="font-semibold">{details.label}:</h4>
            <p>{details.value}</p>
          </div>
        )}
        {outcome && (
          <div className="my-2">
            <h4 className="font-semibold">{outcome.label}:</h4>
            <p>{outcome.value}</p>
          </div>
        )}
        <div className="flex space-x-4">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:text-blue-700 ${link.color}`}>
            {link.label}
          </a>
        ))}
</div>

      </div>
    </div>
  );
};

export default ProjectCard;

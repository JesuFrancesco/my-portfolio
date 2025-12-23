import { cn } from "../lib/utils";

type ProjectCardProps = {
  className?: string;
  title: string;
  description: string;
  thumbnail: string;
  link?: string;
  deployment?: string;
  tags?: string[];
};

function ProjectCard({
  className,
  title,
  description,
  thumbnail,
  tags,
  link,
  deployment,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "from-secondary/85 dark:from-dusty-denim/30",
        "flex flex-col items-center justify-center gap-4 rounded-xl md:w-3/4 md:flex-row md:justify-normal",
        className,
      )}
    >
      <img
        className="flex max-h-48 rounded-xl transition-all duration-300 hover:max-h-96 md:object-contain"
        src={thumbnail}
        alt={title}
      />

      <div className="flex-8 space-y-2 p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>

        {tags && tags.length > 0 && (
          <ul className="flex flex-row flex-wrap gap-x-2 gap-y-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-secondary/20 h-fit w-fit rounded-2xl p-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <article className="flex flex-row gap-x-4">
          {link && (
            <a
              className="dark:bg-blue-slate/80 bg-dusty-denim/30 w-fit rounded-2xl p-2"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit repository
            </a>
          )}

          {deployment && (
            <a
              className="dark:bg-blue-slate/80 bg-dusty-denim/30 w-fit rounded-2xl p-2"
              href={deployment}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
            </a>
          )}
        </article>
      </div>
    </article>
  );
}

export default ProjectCard;

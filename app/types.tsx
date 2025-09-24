export interface Project {
    title: string,
    description: string,
    technologies: string[],
    enterprise: string
}

// Props do componente PersonalCards
export interface PersonalCardProps {
  project: Project
}

// Interface para repositórios do GitHub
export interface GitRepo {
  id: string
  name: string
  language: string[]
  homepage?: string
  description: string
  html_url: string
}

// Props do componente GitCards
export interface GitCardProps {
  gitCardProp: GitRepo
}
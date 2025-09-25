"use client"

import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { GitRepo, Project } from "../types";
import { GitCards, PersonalCards } from "./Cards";

export default function Projects() {
  const [repos, setRepos] = useState<GitRepo[]>([]) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGit = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/gabrieldol82-web/repos?sort=updated&per_page=6"
        )
        if (!res.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data: GitRepo[] = await res.json()
        setRepos(data)
        console.log("repositórios", data)
      } catch (err) {
        setError("Erro ao carregar repositórios do GitHub")
        console.error("Error fetching repos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGit()
  }, [])

  const professionalProjects: Project[] = [
    {
      title: "SESI EJA Platform",
      description:
        "Plataforma educacional presente em 24 unidades federativas com 150 mil usuários ativos.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      enterprise: "Fênix Tecnologia",
    },
    {
      title: "PNLD Digital Books",
      description:
        "Produção de 60 mil páginas digitais para o Programa Nacional de Livros Didáticos.",
      technologies: ["HTML", "CSS", "JavaScript", "Acessibilidade"],
      enterprise: "Fênix Editorial/Fênix Tecnologia",
    },
    {
      title: "SESI SSI",
      description:
        "Outra plataforma educacional para o SESI, dessa vez voltada para industria e saúde.",
      technologies: ["HTML", "CSS", "PHP", "JQuery", "Figma"],
      enterprise: "Fênix Tecnologia",
    },
  ]

  return (
    <section className="min-h-screen" id="projects">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meus Projetos<span className="underline_animated">_</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos profissionais e pessoais que demonstram minhas habilidades
            e experiência
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Projetos Profissionais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, index) => (
              <PersonalCards key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Projetos Pessoais
          </h3>

          {loading && <p>Carregando repositórios...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <GitCards key={repo.id} gitCardProp={repo} />
            ))}
          </div>
        </div>

        <div className="mt-28">
          <button className="flex-1 p-3 w-fit rounded-md border border-slate-600 hover:bg-slate-800"><Link href="https://github.com/gabrieldol82-web?tab=repositories" target="_blank"><GitHubIcon fontSize='small' className="mr-3" />Ver todos os repositórios</Link></button>
        </div>
      </div>
    </section>
  )
}

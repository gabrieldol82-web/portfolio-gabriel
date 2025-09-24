import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import { GitCardProps, PersonalCardProps } from "../types";

const badgeClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outiline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";


export const PersonalCards = ({ project }: PersonalCardProps) => {
    return (
        <div className="rounded-lg border bg-transparent shadow-sm group hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold tracking-tight text-lg">{project.title}</h3>
                    <div className={badgeClasses}>{project.enterprise}</div>
                </div>
                <p className="text-muted text-sm leading-relaxed text-left">{project.description}</p>
            </div>
            <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const GitCards = ({ gitCardProp }: GitCardProps) => {
    return (
        <div className="rounded-lg border bg-transparent shadow-sm group hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold tracking-tight text-lg">{gitCardProp.name}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed text-left">{gitCardProp.description}</p>
            </div>
            <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{gitCardProp.language}</span>
                </div>
                <div className="flex gap-4 w-full mt-6">
                    {gitCardProp.homepage ? <button className="flex-1 p-3 w-fit rounded-md border border-slate-600 hover:bg-slate-800"><Link href={gitCardProp.homepage} target="_blank"><OpenInNewIcon fontSize='small' className="mr-3" />Demo</Link></button> : ''}
                    <button className="flex-1 p-3 w-fit rounded-md border border-slate-600 hover:bg-slate-800"><Link href={gitCardProp.html_url} target="_blank"><GitHubIcon fontSize='small' className="mr-3" />Código</Link></button>
                </div>
            </div>
        </div>
    )
}

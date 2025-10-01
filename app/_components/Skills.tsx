import { CardContent } from "@mui/material";


const skillCategories = [
    {
        title: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js']
    },
    {
        title: 'Styling & UI',
        skills: ['Tailwind CSS', 'Bootstrap', 'Sass', 'Figma', 'Responsive Design', 'Acessibilidade Web']
    },
    {
        title: 'Tools & Libraries',
        skills: ['jQuery', 'Ajax', 'Git', 'Lighthouse', 'NVDA', 'Webpack']
    },
    {
        title: 'Backend & Others',
        skills: ['PHP', 'Node', 'MVC Pattern', 'REST APIs', 'SCRUM', 'NPM']
    }
];

export default function Skils() {
    return (
        <section className="bg-gray-900 min-h-screen" id="skills">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <p className="text-lg mb-2">HABILIDADES</p>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tecnologias que utilizo</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Aqui estão algumas das tecnologias que utilizo no meu dia a dia.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div className="p-6 rounded-lg border bg-transparent shadow-sm group hover:shadow-lg transition-all duration-300" key={index}>
                            <CardContent>
                                <h4 className="text-lg font-semibold mb-4 text-primary">{category.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm bg-blue-900 text-blue-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
    return (
        <header className="border-b border-border z-50 fixed w-full bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold">
                   <span> &lt;/&gt; </span>
                </div>
                <nav className="flex gap-8">
                    <a href="#home">Ínicio</a>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#contact">Contato</a>
                </nav>
                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/gabriel-dantas-874349160/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://github.com/gabrieldol82-web" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large"/>
                    </a>
                </div>
            </div>
        </header>
    )
}
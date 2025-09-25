import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
    return (
        <header className="border-b border-border z-50 fixed w-full bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <span> &lt;/&gt; </span>
                </div>
                <ul className="flex space-x-14">
                    <li>
                        <a href="#home" className="hover:border-b">Ínicio</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:border-b">Sobre</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:border-b">Projetos</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:border-b">Habilidades</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:border-b">Contato</a>
                    </li>

                </ul>
                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/gabriel-dantas-874349160/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://github.com/gabrieldol82-web" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>
                </div>
            </div>
        </header>
    )
}
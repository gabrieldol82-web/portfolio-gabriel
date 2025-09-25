"use client";

import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-border z-50 fixed w-full bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <span> &lt;/&gt; </span>
                </div>

                <ul className="hidden md:flex space-x-14">
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

                <div className="hidden md:flex gap-3">
                    <a href="https://www.linkedin.com/in/gabriel-dantas-874349160/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://github.com/gabrieldol82-web" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-background/95 backdrop-blur-sm border-t border-border">
                    <ul className="flex flex-col items-center space-y-6">
                        <li>
                            <a href="#home" onClick={() => setOpen(false)}>Ínicio</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setOpen(false)}>Projetos</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={() => setOpen(false)}>Habilidades</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
                        </li>
                    </ul>

                    <div className="flex gap-6 pt-4">
                        <a href="https://www.linkedin.com/in/gabriel-dantas-874349160/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="https://github.com/gabrieldol82-web" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon fontSize="large" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function Contact() {
    return (
        <section className="min-h-fit bg-black pb-10" id="contact">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Entre em Contato</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Vamos conversar sobre oportunidades de trabalho ou projetos interessantes
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-500/60 rounded-lg flex items-center justify-center">
                                    <EmailIcon fontSize='large' className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">E-mail</p>
                                    <Link href="mailto:gabrieldol82@gmail.com" className="text-muted-foreground transition-colors">
                                        gabrieldol82@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 hover:bg-gray-500/60 rounded-md py-1 cursor-pointer">
                                <Link href="https://wa.me/11995474478"
                                    target="_blank"
                                    className="flex gap-4">
                                    <div className="w-12 h-12 bg-gray-500/60 rounded-lg flex items-center justify-center">
                                        <WhatsAppIcon fontSize='large' className="h-6 w-6 " />
                                    </div>
                                    <div>
                                        <p className="font-medium">Telefone</p>
                                        <span className="text-muted-foreground transition-colors">
                                            (11) 995474478
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-500/60 rounded-lg flex items-center justify-center">
                                    <LocationPinIcon className="h-6 w-6 " />
                                </div>
                                <div>
                                    <p className="font-medium">Localização</p>
                                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-6 text-center sm:mt-2">Redes Sociais</h3>
                        <div className="flex flex-row gap-4">
                            <button className="flex-1 p-3 w-fit rounded-md border border-slate-600 hover:bg-slate-800"><Link href="https://www.linkedin.com/in/gabriel-dantas-874349160/" target="_blank"><GitHubIcon fontSize='large' className="mr-3" />GitHub</Link></button>
                            <button className="flex-1 p-3 w-fit rounded-md border border-slate-600 hover:bg-slate-800"><Link href="https://github.com/gabrieldol82-web" target="_blank"><LinkedInIcon fontSize='large' className="mr-3" />LinkedIn</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
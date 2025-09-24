export default function About() {
    return (
        <section className="bg-gray-900 min-h-screen" id="about">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre mim</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-8">
                    Desenvolvedor Front-end com 3 anos de experiência em projetos de grande escala
                </p>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-left space-y-6 mt-12">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experiência</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Atualmente trabalho como <strong>Desenvolvedor Front-end</strong> na Fênix Tecnologias, atuando em projetos importantes como PNLD e SESI Nacional. Durante minha trajetória, desenvolvi experiência com diversas tecnologias e metodologias ágeis.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projetos de Impacto</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Participei do lançamento da plataforma EJA do SESI, presente em 24 de cerca de <strong>60 mil páginas digitais</strong> para o PNLD.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Especialização</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Tenho forte experiência em <strong>acessibilidade web</strong>, trabalhando com ferramentas como Lighthouse e NVDA, além de aplicar boas práticas de desenvolvimento e estruturação semântica do HTML.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function About() {
    return (
        <section className="bg-gray-900 min-h-fit" id="about">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre mim</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-8">
                    Desenvolvedor Front-end com 3 anos de experiência em projetos de grande escala
                </p>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left space-y-6 mt-12">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Início</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Comecei no mundo do desenvolvimento aos 19 anos. Sem muita ideia do que fazer, um parente me apresentou ao <span className="font-bold text-blue-400">HTML</span>. Pouco tempo depois quis cursar <span className="font-bold text-blue-400">Análise e Desenvolvimento de Sistemas</span> na <span className="font-bold text-blue-400">Universidade São Judas Tadeu</span>. Lá, tive contato com vários temas do mundo de TI, mas foi no <span className="font-bold text-blue-400">Front-end</span> que acabei seguindo caminho.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experiência</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Em 2021, fui contratado pela Fênix Editoral para completar o time no projeto <span className="font-bold text-blue-400">PNLD</span>, onde eu era responsável por <span className="font-bold text-blue-400">HTML</span> e <span className="font-bold text-blue-400">CSS</span> em mais de 70 mil páginas produzidas tanto para o governo quanto para outras editoras, como <span className="font-bold text-blue-400">FTD</span> e <span className="font-bold text-blue-400">Moderna</span>.</p>
                        <p className="font-normal text-gray-700 dark:text-gray-300">A partir de 2022 passei a integrar a equipe de Dev da Fênix Tecnologias (outro ramo da mesma empresa Fênix). Desde então, entrei em contato com várias tecnologias que fazem parte do cotidiano de um Desenvolvedor, além de metodologias que impulsionam a qualidade do código.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projetos de Impacto</h3>
                        <p className="font-normal text-gray-700 dark:text-gray-300">Participei do lançamento da plataforma <span className="font-bold text-blue-400">EJA</span> e <span className="font-bold text-blue-400">SSI</span> do <span className="font-bold text-blue-400">SESI</span>, presente em <span className="font-bold text-blue-400">24 Estados do Brasil</span> e de cerca de <span className="font-bold text-blue-400">70 mil páginas digitais</span> para o PNLD.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
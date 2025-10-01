import Image from "next/image";

export default function Gif() {
    return (
        <section>
            <h1 className="text-center text-5xl mb-16">Eu te avisei!</h1>
            <div style={{ position: "relative", width: "400px", height: "300px" }}>
                <Image src="/assets/rick.gif" alt="Você caiu no Rick Astley dançando" width={400} height={300} />
            </div>
        </section>
    )
}
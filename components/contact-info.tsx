import Image from "next/image";

const ContactInfo = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center justify-center justify-items-center h-full p-10 py-40 md:p-60 md:py-0 md:grid-cols-2">

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 mt-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 text-secondary">Contáctame</h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    ¡Me encantaría saber de ti! Si tienes alguna pregunta, propuesta de trabajo o simplemente quieres saludar, no dudes en enviarme un mensaje.
                    </p>

                    <h2 className="mb-5 text-xl leading-tight text-center md:text-left md:text-2xl md:mb-10">
                        <span className="text-secondary">
                            Email
                        </span>
                        <p className="md:text-xl">franciscojc1995@gmail.com</p>
                    </h2>

                    <h2 className="mb-5 text-xl leading-tight text-center md:text-left md:text-2xl md:mb-10">
                        <span className="text-secondary">
                            Teléfono
                        </span>
                        <p className="md:text-xl">+34 644 178 135</p>
                    </h2>

                    <h2 className="mb-5 text-xl leading-tight text-center md:text-left md:text-2xl md:mb-10">
                        <span className="text-secondary">
                            Localización
                        </span>
                        <p className="md:text-xl">Coín, Malaga.</p>
                    </h2>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/resume.pdf" target="_blank" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver Currículum
                        </a>
                    </div>
                </div>
                <Image src="/frani1.jpg" priority width="400" height="400" quality={100} alt="Avatar" className="aspect-square border-2 rounded-full hover:shadow-xl hover:shadow-white/50 mb-9" />
            </div>
        </div>
    );
}

export default ContactInfo;
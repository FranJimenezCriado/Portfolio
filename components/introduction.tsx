"use client"

import Image from "next/image";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center justify-center justify-items-center h-full p-10 py-40 md:p-60 md:py-0 md:grid-cols-2">
            <Image src="/frani1.jpg" priority width="400" height="400" quality={100} alt="Avatar" className="aspect-square border-2 rounded-full hover:shadow-xl hover:shadow-white/50 mb-9" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Desarrollador Web <br />
                        <span className="text-secondary">
                                    Fullstack.
                        </span>
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Soy un desarrollador web fullstack apasionado por crear sitios web dinámicos y funcionales. Mi enfoque es combinar mis habilidades en frontend y backend para ofrecer soluciones completas a los problemas de mis clientes. ¡Bienvenido a mi portfolio, donde podrás ver algunos de mis proyectos y conocer más sobre mi trabajo!
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
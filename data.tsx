import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Speech, Github, Mail } from "lucide-react";
import Image from "next/image";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/FranJimenezCriado",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/francisco-jimenez-criado/",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:franciscojc1995@gmail.com",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/tech-stack",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "FullStack Developer",
        subtitle: "HACK A BOSS",
        description: "Bootcamp de programación web Fullstack, donde aprendimos HTML, CSS, JavaScript, MySQL, Node.js y React.js. Después de la formación realizamos un proyecto en grupo con metología SCRUM.",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Grado Medio de Sistemas Microinformáticos y redes",
        subtitle: "IES Serrania",
        description: "Dos años de formación, donde aprendimos mucho contenido, entre ellos, montaje y configuración de redes, Sistemas operativos, Seguridad, C++, etc.",
        date: "Jun 2014",
    },
    {
        id: 3,
        title: "ESO",
        subtitle: "IES Los Montecillos",
        description: "Educación Secundaria Obligatoria.",
        date: "Jun 2012",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Año de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Contribuciones a proyectos ajenos",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Image src="/Typescript.png" width={30} height={30} alt="Typescript Logo"/>,
        title: "TypeScript",
        description: "TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que añade tipado estático opcional y características avanzadas, mejorando la detección de errores y la estructura del código.",
    },
    {
        icon: <Image src="/nodejs.png" width={30} height={30} alt="Node Logo"/>,
        title: "Node.js",
        description: "Node.js es un entorno de ejecución de JavaScript que permite ejecutar código en el servidor. Es conocido por su modelo de I/O no bloqueante y orientado a eventos, ideal para aplicaciones web escalables y en tiempo real.",
    },
    {
        icon: <Image src="/React.png" width={30} height={30} alt="React Logo"/>,
        title: "React.js",
        description: "React es una biblioteca de JavaScript de Facebook para crear interfaces de usuario. Permite construir componentes reutilizables y usa un DOM virtual para mejorar el rendimiento, actualizando solo los elementos que cambian.",
    },
    {
        icon: <Image src="/nextjs.png" width={30} height={30} alt="Next Logo"/>,
        title: "Next.js",
        description: "Next.js es un framework de React que facilita la creación de aplicaciones web y sitios estáticos con optimización de rendimiento, renderizado del lado del servidor y generación estática de páginas.",
    },
    {
        icon: <Image src="/mysql.png" width={30} height={30} alt="Mysql Logo"/>,
        title: "MySQL",
        description: "MySQL es una base de datos relacional de código abierto, conocida por su fiabilidad y rendimiento en aplicaciones web. Es fácil de usar y se adapta a diversas necesidades empresariales y de desarrollo.",
    },
    {
        icon: <Image src="/tailwind.png" width={50} height={50} alt="Tailwind Logo"/>,
        title: "Tailwind CSS",
        description: "Tailwind CSS es un framework de diseño que utiliza clases utilitarias para estilizar elementos HTML de forma modular y altamente personalizable.",
    },
    {
        icon: <Image src="/git.png" width={32} height={32} alt="Tailwind Logo"/>,
        title: "Git",
        description: "Git es un sistema de control de versiones que permite rastrear cambios en el código, facilitando el trabajo colaborativo y la gestión de proyectos de desarrollo de software.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Hack a Trip",
        image: "/hackatrip.png",
        urlGithub: "https://github.com/Enekobass/hackatrip",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Yutub",
        image: "/youtube.jpg",
        urlGithub: "https://github.com/FranJimenezCriado/YuTub",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Pokedex",
        image: "/pokedex.jpeg",
        urlGithub: "https://github.com/FranJimenezCriado/Pokedex",
        urlDemo: "https://pokedexfran.netlify.app/",
    },
    {
        id: 4,
        title: "Predicción de lluvia",
        image: "/lluvia.jpg",
        urlGithub: "https://github.com/FranJimenezCriado/Prediccion-de-lluvia",
        urlDemo: "https://rainprediction.netlify.app/",
    },
    {
        id: 5,
        title: "Linea temporal Zelda",
        image: "/zelda.jpg",
        urlGithub: "https://github.com/FranJimenezCriado/Linea-Temporal-Zelda",
        urlDemo: "https://zeldatimeline.netlify.app/",
    },
    {
        id: 6,
        title: "Preguntas/Respuestas",
        image: "/preguntas.jpg",
        urlGithub: "https://github.com/FranJimenezCriado/Preguntas-Y-Respuestas",
        urlDemo: "https://questandanswers.netlify.app/",
    }
];
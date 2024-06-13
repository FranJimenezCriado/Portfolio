import AvatarTech from "@/components/avatar-tech";
import CircleImage from "@/components/circle-image";
import SliderTech from "@/components/slider-tech";
import TransitionPage from "@/components/transition-page";

const PageTechStack = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarTech />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Tech-
                        <span className="font-bold text-secondary">
                            Stack.
                        </span>
                    </h1>
                    <p className="mb-3 md:mb-10 text-xl text-gray-300">Como desarrollador web, mi Tech Stack abarca una variedad de tecnologías que incluyen HTML, CSS, TypeScript, Node, React, Next, MySQL y Git. Estas herramientas me permiten diseñar y desarrollar sitios web dinámicos y funcionales. Estoy comprometido en mantenerme actualizado con las últimas tendencias y tecnologías en el campo del desarrollo web para ofrecer soluciones innovadoras.</p>
                </div>

                <div>
                    <SliderTech />
                </div>
            </div>
        </>
    );
}

export default PageTechStack;
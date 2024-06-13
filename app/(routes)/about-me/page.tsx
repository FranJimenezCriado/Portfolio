import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterTech from "@/components/counter-tech";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Educación y {' '}
                    <span className="font-bold text-secondary">formación.</span>
                </h1>

                <CounterTech />

                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;
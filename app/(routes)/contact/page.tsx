import CircleImage from "@/components/circle-image";
import ContactInfo from "@/components/contact-info";
import TransitionPage from "@/components/transition-page";

const ContactPage = () => {
    return (
        <>
            <TransitionPage />

            <div className="flex flex-col justify-center h-full min-h-[100vh]">
                <CircleImage />
                <ContactInfo />
            </div>
        </>
    );
}

export default ContactPage;
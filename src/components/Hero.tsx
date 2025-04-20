import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-12 py-16">
            {/* Texte de présentation */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                    Salut, je suis <span className="text-blue-600">Amran</span> 👋🏾
                </h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    Développeuse Full Stack avec plus de <strong>{"3 ans d'expérience"}</strong>, spécialisée dans le <strong>web moderne</strong> et les <strong>architectures performantes</strong>.
                </p>

                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                    <a href="https://linkedin.com/in/amran-abdourazak-abdillahi" target="_blank" className="text-blue-600 hover:scale-105 transition">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/ton-github" target="_blank" className="text-gray-900 dark:text-white hover:scale-105 transition">
                        <FaGithub size={32} />
                    </a>
                    <a href="mailto:email@example.com" className="text-red-600 hover:scale-105 transition">
                        <FaEnvelope size={32} />
                    </a>
                    <a href="tel:+33749339584" className="text-green-600 hover:scale-110 transition">
                        <FaPhone size={32} />
                    </a>
                </div>
            </div>

            {/* Image / Illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <Image
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
                    src="/amran.jpeg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;

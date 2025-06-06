import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return <section className="flex sm:flex-row flex-col-reverse items-center justify-center min-h-screen bg-gray-300 sm:p-20 px-4 py-30">
        <div className="flex-col items-start justify-center p-6 sm:w-3/4 w-full">
            <h1 className="sm:text-7xl text-3xl font-bold mb-12">Hello I&apos;m <br></br>Saurabh Chauhan</h1>
            <p className="text-lg mb-16">Dedicated and efficient Software Developer with a strong focus on designing, developing, and implementing modern web applications. Proficient in both front-end and back-end technologies, including ReactJS, JavaScript, Node.js, Java, Spring Boot, HTML, and CSS.</p>
            <div className="flex gap-4">
                <Link
                    href="https://github.com/sirbh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <Image src={"/images/github.png"} width={50} height={50} className="animate-bounce cursor-pointer" alt="Arrow Down">

                    </Image>

                </Link>
                <Link
                    href="https://www.linkedin.com/in/saurabh-chauhan-48364b1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <Image src={"/images/linkedin.png"} width={50} height={50} className="animate-bounce cursor-pointer" alt="Arrow Down" />

                </Link>
            </div>
        </div>
        <div className="flex items-center justify-center sm:w-1/4 w-full">
            <div className="overflow-hidden rounded-full sm:w-64 sm:h-96 w-64 h-64">
                <Image src={"/images/me.jpg"} width={300} height={300} className="scale-155 sm:translate-y-1/4 translate-y-1/8" alt="Saurabh Chauhan" />
            </div>
        </div>
    </section>
}
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return <section id="contacts" className="bg-white px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl shadow-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 text-sm">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <span>chauhansaurabh425@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-green-500" />
                        <span>(+91) 9650 446110</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-green-500" />
                        <span>(+358) 4172 71570</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/github.png"
                            alt="GitHub"
                            width={20}
                            height={20}
                        />
                        <Link
                            href="https://github.com/sirbh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            https://github.com/sirbh
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
{/*                         <Image
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                        /> */}
{/*                         <Link
                            href="https://www.linkedin.com/in/saurabh-chauhan-48364b1b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            https://www.linkedin.com/in/saurabh-chauhan-48364b1b9/
                        </Link> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
}

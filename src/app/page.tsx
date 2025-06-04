import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Mail, Phone } from "lucide-react";

import { licenses } from "@/data/certificates";
import { getIssuerLogo } from "@/lib/utils";
import { publications } from "@/data/publications";
import { Button } from "@/components/ui/button";
import { technologies } from "@/data/technologies";
import { education } from "@/data/education";
import Link from "next/link";

export default function Home() {

    const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  return (
    <>
      <section className="bg-gray-200 shadow-md w-full h-20 flex fixed items-center justify-between px-16 py-6 z-10">
        <div className="flex items-center gap-4">
          <Image src={"/images/rope.png"} width={50} height={50} alt="Logo" className="border border-black rounded-full" />
          <h1 className="text-2xl font-bold">Saurabh Chauhan</h1>
        </div>
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-lg font-semibold">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#certifications" className="text-lg font-semibold">Certifications</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects" className="text-lg font-semibold">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-lg font-semibold">Publications</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-lg font-semibold">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </section>
      <section className="flex flex items-center justify-center min-h-screen bg-gray-300 p-20">
        <div className="flex flex-col items-start justify-center p-6 w-3/4">
          <h1 className="text-7xl font-bold mb-12">Hello I&apos;m <br></br>Saurabh Chauhan</h1>
          <p className="text-lg mb-16">Dedicated and efficient Software Developer with a strong focus on designing, developing, and implementing modern web applications. Proficient in both front-end and back-end technologies, including ReactJS, JavaScript, Node.js, Java, Spring Boot, HTML, and CSS.</p>
          <div className="flex gap-4">
            <Image src={"/images/github.png"} width={50} height={50} className="animate-bounce cursor-pointer" alt="Arrow Down" />
            <Image src={"/images/linkedin.png"} width={50} height={50} className="animate-bounce cursor-pointer" alt="Arrow Down" />
          </div>
        </div>
        <div className="flex items-center justify-center w-1/4">
          <div className="overflow-hidden rounded-full w-64 h-96">
            <Image src={"/images/me.jpg"} width={300} height={300} className="scale-155 translate-y-1/4" alt="Saurabh Chauhan" />
          </div>
        </div>
      </section>
      <section id="certifications" className="bg-gray-200 px-20 py-20">
        <h2 className="text-4xl font-bold mb-8">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {licenses.map((license) => (
            <Card key={license.id} className="rounded-2xl shadow-md border border-gray-200">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-semibold text-gray-800">{license.name}</CardTitle>
                <div className="flex items-center space-x-3">
                  <Image
                    src={getIssuerLogo(license.issuedBy)}
                    width={36}
                    height={36}
                    alt={`${license.issuedBy} Logo`}
                    className="rounded-md"
                  />
                  <CardDescription className="text-sm font-medium text-gray-600">
                    {license.issuedBy}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700 text-sm">{license.description || "No description available."}</p>
                <p className="text-gray-500 text-sm">
                  Issued on:{" "}
                  {license.issueDate ? license.issueDate.toLocaleDateString(undefined, { year: "numeric", month: "long" }) : "N/A"}
                </p>
              </CardContent>
              {license.url && (
                <CardFooter>
                  <Button asChild variant="outline">
                    <a href={license.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>
      <section id="publications" className="bg-gray-400 px-20 py-20">
        <h2 className="text-4xl font-bold mb-8">Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="rounded-2xl shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {pub.title}
                  </a>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {pub.publisher}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.authors.map((author) => (
                    <span
                      key={author}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {author}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 line-clamp-5">
                  {pub.description}
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      View Full Paper
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
          <section id="about-me" className="bg-gray-50 px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-12 text-gray-600">About Me</h2>

      {/* Education Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="rounded-xl shadow">
              <CardHeader>
                <CardTitle>{edu.degree} in {edu.fieldOfStudy}</CardTitle>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                {edu.description && <p className="mb-2">{edu.description}</p>}
                {edu.startDate && (
                  <p className="text-xs text-gray-500">
                    {edu.startDate.toLocaleDateString()} - {edu.endDate?.toLocaleDateString() || "Present"}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Technologies</h3>
        <div className="space-y-10">
          {Object.entries(groupedTech).map(([category, techList]) => (
            <div key={category}>
              <h4 className="text-lg font-medium mb-4 text-gray-600">{category}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techList.map((tech) => (
                  <Card
                    key={tech.id}
                    className="flex items-center justify-center p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src={tech.imageUrl}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
         <section id="contact" className="bg-white px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>saurabh@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={20}
                height={20}
              />
              <Link
                href="https://github.com/saurabhchauhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/saurabhchauhan
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
              <Link
                href="https://linkedin.com/in/saurabhchauhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/saurabhchauhan
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
        
  );
}

import { education } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { technologies } from "@/data/technologies";
import Image from "next/image";

export default function About() {

    const groupedTech = technologies.reduce((acc, tech) => {
        if (!acc[tech.category]) acc[tech.category] = [];
        acc[tech.category].push(tech);
        return acc;
    }, {} as Record<string, typeof technologies>);
    return (
        <section id="about" className="bg-gray-50 px-6 md:px-20 py-20">
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Technologies I use</h3>
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
    );
}
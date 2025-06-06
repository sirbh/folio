import { projects } from "@/data/projects"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export default function Projects() {
    return <section id="projects" className="bg-gray-100 px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
                <Card key={proj.id} className="rounded-2xl shadow-lg border border-gray-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                            {proj.url ? (
                                <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {proj.name}
                                </a>
                            ) : (
                                <span className="text-gray-900">{proj.name}</span>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700 line-clamp-5 mb-4">
                            {proj.description}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {proj.url && (
                                <Button asChild variant="outline">
                                    <a href={proj.url} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </Button>
                            )}
                            {proj.youTubeUrl && (
                                <Button asChild variant="outline">
                                    <a href={proj.youTubeUrl} target="_blank" rel="noopener noreferrer">
                                        Watch Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
}
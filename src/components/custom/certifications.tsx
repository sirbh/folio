import { licenses } from "@/data/certificates";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { getIssuerLogo } from "@/lib/utils";

export default function Certifications() {
    return (
        <section id="certifications" className="bg-gray-200 sm:px-20 px-10 py-20">
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
    );
}
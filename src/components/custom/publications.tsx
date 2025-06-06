import { publications } from "@/data/publications";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-400 sm:px-20 px-10 py-20">
      <h2 className="text-4xl font-bold mb-8">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub) => (
          <Card
            key={pub.id}
            className="rounded-2xl shadow-lg border border-gray-200"
          >
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
              <p className="text-sm text-muted-foreground">{pub.publisher}</p>
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
  );
}

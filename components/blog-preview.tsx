import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogPreview() {
  const articles = [
    {
      title: "Как написать продающий заголовок",
      excerpt: "5 проверенных формул для создания заголовков, которые привлекают внимание",
      date: "15 марта 2024",
    },
    {
      title: "Психология продаж в копирайтинге",
      excerpt: "Как использовать триггеры и эмоции для увеличения конверсии",
      date: "10 марта 2024",
    },
    {
      title: "SEO-копирайтинг: баланс между людьми и роботами",
      excerpt: "Создаем тексты, которые нравятся и поисковикам, и читателям",
      date: "5 марта 2024",
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Полезные статьи</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="outline" size="sm">
                  Читать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Все статьи</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

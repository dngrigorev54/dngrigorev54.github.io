import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PortfolioPreview() {
  const projects = [
    {
      title: "Лендинг IT-компании",
      description: "Увеличение конверсии на 40% за счет нового текста",
      category: "Лендинг",
    },
    {
      title: "КП для строительной компании",
      description: "Коммерческое предложение, которое закрыло сделку на $50k",
      category: "Коммерческое предложение",
    },
    {
      title: "Контент для интернет-магазина",
      description: "Полное описание товаров и категорий",
      category: "Контент для сайта",
    },
  ]

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Портфолио</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" size="sm">
                  Открыть проект
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="/portfolio">Смотреть все работы</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "Все работы" },
    { id: "landing", label: "Лендинги" },
    { id: "commercial", label: "Коммерческие предложения" },
    { id: "articles", label: "Статьи" },
    { id: "main", label: "Тексты для главных" },
  ]

  const projects = [
    {
      id: 1,
      title: "Лендинг IT-компании по разработке мобильных приложений",
      category: "landing",
      description: "Создание продающего лендинга для стартапа в сфере мобильной разработки",
      results: "Увеличение конверсии на 40%",
      metrics: [
        { icon: TrendingUp, label: "Конверсия", value: "+40%" },
        { icon: Users, label: "Лиды", value: "+120%" },
        { icon: Clock, label: "Время на сайте", value: "+65%" },
      ],
      tags: ["B2B", "IT", "Стартап"],
      image: "/portfolio-it-landing.jpg",
    },
    {
      id: 2,
      title: "Коммерческое предложение для строительной компании",
      category: "commercial",
      description: "КП для крупного застройщика по продаже коммерческой недвижимости",
      results: "Закрытие сделки на $50,000",
      metrics: [
        { icon: TrendingUp, label: "Отклик", value: "+85%" },
        { icon: Users, label: "Встречи", value: "+200%" },
      ],
      tags: ["B2B", "Недвижимость", "Продажи"],
      image: "/portfolio-construction-proposal.jpg",
    },
    {
      id: 3,
      title: "Контент для интернет-магазина спортивного питания",
      category: "main",
      description: "Полное описание товаров, категорий и информационных страниц",
      results: "Рост органического трафика на 150%",
      metrics: [
        { icon: TrendingUp, label: "Трафик", value: "+150%" },
        { icon: Users, label: "Продажи", value: "+80%" },
      ],
      tags: ["E-commerce", "Спорт", "SEO"],
      image: "/portfolio-sports-ecommerce.jpg",
    },
    {
      id: 4,
      title: "SEO-статьи для финансового блога",
      category: "articles",
      description: "Серия экспертных статей о личных финансах и инвестициях",
      results: "Топ-3 в поисковой выдаче по 15 запросам",
      metrics: [
        { icon: TrendingUp, label: "Позиции", value: "Топ-3" },
        { icon: Users, label: "Читатели", value: "+300%" },
      ],
      tags: ["Финансы", "SEO", "Блог"],
      image: "/portfolio-finance-blog.jpg",
    },
    {
      id: 5,
      title: "Лендинг для онлайн-школы английского языка",
      category: "landing",
      description: "Продающая страница для курсов английского с акцентом на результат",
      results: "Конверсия в заявки 12%",
      metrics: [
        { icon: TrendingUp, label: "Конверсия", value: "12%" },
        { icon: Users, label: "Заявки", value: "+250%" },
      ],
      tags: ["Образование", "B2C", "Онлайн"],
      image: "/portfolio-english-school.jpg",
    },
    {
      id: 6,
      title: "КП для агентства интернет-маркетинга",
      category: "commercial",
      description: "Коммерческое предложение услуг digital-агентства для малого бизнеса",
      results: "Привлечение 8 новых клиентов",
      metrics: [
        { icon: Users, label: "Клиенты", value: "+8" },
        { icon: TrendingUp, label: "Выручка", value: "+$30k" },
      ],
      tags: ["Маркетинг", "B2B", "Агентство"],
      image: "/portfolio-marketing-agency.jpg",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Портфолио</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешных проектов в копирайтинге. Каждый текст создавался с учетом специфики бизнеса и целевой
              аудитории для достижения максимального результата.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="h-full flex flex-col">
                  <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="font-bold text-lg mb-2">{project.title.split(" ").slice(0, 3).join(" ")}</h3>
                        <p className="text-sm opacity-80">{project.category}</p>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                    <div className="bg-card p-3 rounded-lg mb-4">
                      <p className="font-semibold text-sm text-primary mb-2">Результат:</p>
                      <p className="text-sm">{project.results}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <metric.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                          <p className="font-semibold text-sm">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Открыть проект
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Готовы обсудить ваш проект?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Каждый проект уникален. Расскажите о ваших целях, и я предложу оптимальное решение для вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Обсудить проект
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Посмотреть услуги
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

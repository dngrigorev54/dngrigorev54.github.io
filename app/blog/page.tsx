import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Mail, Phone } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "kak-napisat-prodayushchiy-zagolovok",
    title: "Как написать продающий заголовок",
    excerpt:
      "Разбираю формулы эффективных заголовков и показываю примеры из практики. 15 проверенных техник для увеличения конверсии.",
    date: "15 декабря 2024",
    readTime: "7 мин",
    category: "Копирайтинг",
  },
  {
    slug: "5-oshibok-v-kommercheskih-predlozheniyah",
    title: "5 ошибок в коммерческих предложениях",
    excerpt: "Частые ошибки, которые убивают эффективность КП и как их избежать. Практические советы для B2B сегмента.",
    date: "10 декабря 2024",
    readTime: "5 мин",
    category: "B2B",
  },
  {
    slug: "seo-kopirayting-v-2024",
    title: "SEO-копирайтинг в 2024",
    excerpt:
      "Актуальные требования поисковых систем к текстовому контенту. Как писать для людей и алгоритмов одновременно.",
    date: "5 декабря 2024",
    readTime: "8 мин",
    category: "SEO",
  },
  {
    slug: "psihologiya-prodazh-v-tekstah",
    title: "Психология продаж в текстах",
    excerpt: "Как использовать психологические триггеры в копирайтинге. Принципы влияния Чалдини в действии.",
    date: "28 ноября 2024",
    readTime: "6 мин",
    category: "Психология",
  },
  {
    slug: "struktura-idealnogo-lendinga",
    title: "Структура идеального лендинга",
    excerpt: "Пошаговый разбор структуры высококонверсионного лендинга. Какие блоки обязательны, а какие можно убрать.",
    date: "20 ноября 2024",
    readTime: "9 мин",
    category: "Лендинги",
  },
  {
    slug: "kak-pisat-dlya-b2b-auditorii",
    title: "Как писать для B2B аудитории",
    excerpt:
      "Особенности корпоративных продаж и как адаптировать тексты под бизнес-клиентов. Язык выгод vs язык функций.",
    date: "15 ноября 2024",
    readTime: "7 мин",
    category: "B2B",
  },
  {
    slug: "analiz-konkurentov-dlya-kopiraytera",
    title: "Анализ конкурентов для копирайтера",
    excerpt: "Как исследовать конкурентов перед написанием текстов. Чек-лист для анализа и практические инструменты.",
    date: "8 ноября 2024",
    readTime: "6 мин",
    category: "Исследования",
  },
  {
    slug: "email-marketing-i-kopirayting",
    title: "Email-маркетинг и копирайтинг",
    excerpt: "Как писать письма, которые открывают и читают. Секреты эффективных email-кампаний от практика.",
    date: "1 ноября 2024",
    readTime: "8 мин",
    category: "Email",
  },
  {
    slug: "testirovanie-tekstov-ab-test",
    title: "Тестирование текстов: A/B тест",
    excerpt: "Как правильно тестировать тексты и интерпретировать результаты. Практические кейсы и инструменты.",
    date: "25 октября 2024",
    readTime: "5 мин",
    category: "Аналитика",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-serif font-bold text-foreground">
                Копирайтер
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги и цены
                </Link>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </Link>
                <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Блог</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Практические советы по копирайтингу, разборы кейсов и актуальные тренды в мире текстового маркетинга.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <Button variant="ghost" className="p-0 h-auto group-hover:text-primary" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Читать статью
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>
                Предыдущая
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline">Следующая</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Подписка на новые статьи</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получайте новые статьи о копирайтинге и маркетинге прямо на почту. Без спама, только полезный контент.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Подписаться</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Копирайтер</h3>
              <p className="text-muted-foreground">Профессиональные тексты для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Лендинги
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Коммерческие предложения
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    SEO-тексты
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Контент-маркетинг
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/portfolio" className="hover:text-primary transition-colors">
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    Обо мне
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:hello@copywriter.ru" className="hover:text-primary transition-colors">
                    hello@copywriter.ru
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="https://t.me/copywriter" className="hover:text-primary transition-colors">
                    @copywriter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Копирайтер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

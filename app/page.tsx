import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Target,
  FileText,
  Globe,
  MessageSquare,
  Mail,
  Send,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-serif font-bold text-foreground">Копирайтер</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги и цены
                </Link>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Копирайтинг, прототипирование и тексты для бизнеса
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Создаю продающие тексты, которые привлекают клиентов и увеличивают конверсию. Работаю с лендингами,
            коммерческими предложениями и контент-маркетингом.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Получить консультацию
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* When You Need a Copywriter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Когда нужен копирайтер</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Не растут продажи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ваши тексты не убеждают клиентов покупать. Нужны продающие формулировки и правильная подача.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Нужен новый сайт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Запускаете проект и нужны качественные тексты для всех страниц сайта.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Тексты не работают</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Существующий контент не приносит результат. Нужна переработка под целевую аудиторию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/professional-copywriter-portrait.png"
                alt="Профессиональный копирайтер"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Профессиональный копирайтер с 5+ летним опытом создания продающих текстов. Специализируюсь на B2B
                сегменте и помогаю бизнесу увеличивать конверсию через качественный контент.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Более 200 успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Средний рост конверсии на 40%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Работа с крупными брендами</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Tasks Content Solves */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Какие задачи решает контент</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Привлекает клиентов</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Повышает продажи</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Усиливает доверие</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Позиционирует бренд</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Улучшает коммуникацию</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium">Расширяет охват</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Услуги копирайтера</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Лендинги</CardTitle>
                <CardDescription>Продающие одностраничники</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Создаю лендинги с высокой конверсией для товаров и услуг.</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Смотреть примеры
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Коммерческие предложения</CardTitle>
                <CardDescription>КП, которые продают</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Структурированные предложения для B2B сегмента.</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Смотреть примеры
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>SEO-тексты</CardTitle>
                <CardDescription>Контент для поисковых систем</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Оптимизированные статьи для продвижения в Google и Яндекс.</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Смотреть примеры
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Портфолио</h2>
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                Смотреть все работы
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Лендинг
                </Badge>
                <CardTitle>IT-консалтинг</CardTitle>
                <CardDescription>Увеличение конверсии на 65%</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Лендинг для IT-компании с фокусом на экспертность и результаты клиентов.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  КП
                </Badge>
                <CardTitle>Логистическая компания</CardTitle>
                <CardDescription>Рост откликов на 45%</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Коммерческое предложение с детальным описанием услуг и преимуществ.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Контент
                </Badge>
                <CardTitle>Финтех-стартап</CardTitle>
                <CardDescription>Полный пакет текстов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Тексты для всех страниц сайта финансового сервиса.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Полезные статьи</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">
                Все статьи
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как написать продающий заголовок</CardTitle>
                <CardDescription>15 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Разбираю формулы эффективных заголовков и показываю примеры из практики.
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать статью
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5 ошибок в коммерческих предложениях</CardTitle>
                <CardDescription>10 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Частые ошибки, которые убивают эффективность КП и как их избежать.
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать статью
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SEO-копирайтинг в 2024</CardTitle>
                <CardDescription>5 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Актуальные требования поисковых систем к текстовому контенту.
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать статью
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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
                  <Send className="h-4 w-4 mr-2" />
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

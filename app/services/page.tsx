import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Clock,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  Search,
  Globe,
  MessageSquare,
  Building,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
                <Link href="/services" className="text-foreground hover:text-primary transition-colors">
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

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Услуги и цены</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Прозрачное ценообразование и четкие сроки выполнения. Все услуги включают правки и консультации по проекту.
          </p>
        </div>
      </section>

      {/* Deadlines and Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Сроки и процесс</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Ответ в течение 1 дня</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Быстро отвечаю на запросы и высылаю подробный план работы с проектом.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Средний срок 4 дня</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Большинство проектов выполняю за 3-5 дней с учетом правок и доработок.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>График работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаю ПН-ПТ с 9:00 до 18:00 МСК. Выходные — для срочных проектов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services with Prices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Услуги копирайтера</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Лендинги</CardTitle>
                <CardDescription>Продающие одностраничники</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$300-500</span>
                    <Badge variant="outline">3-5 дней</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Полный лендинг с заголовками, описаниями, преимуществами и призывами к действию.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Анализ ЦА и конкурентов
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Структура и заголовки
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />2 правки включены
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Коммерческие предложения</CardTitle>
                <CardDescription>КП для B2B сегмента</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$150-250</span>
                    <Badge variant="outline">2-3 дня</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Структурированное КП с четкой логикой и убедительными аргументами.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Анализ потребностей клиента
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Презентация преимуществ
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Готовый шаблон
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-primary mb-2" />
                <CardTitle>SEO-тексты</CardTitle>
                <CardDescription>Контент для поисковых систем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$50-100</span>
                    <Badge variant="outline">1-2 дня</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Оптимизированные статьи для продвижения в поисковых системах.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Сбор семантики
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Естественное вхождение ключей
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Мета-теги в подарок
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Тексты на главную</CardTitle>
                <CardDescription>Контент для главной страницы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$200-350</span>
                    <Badge variant="outline">3-4 дня</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">Полный комплект текстов для главной страницы сайта.</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Заголовки и подзаголовки
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Описания услуг
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Призывы к действию
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Тексты об услугах</CardTitle>
                <CardDescription>Описания продуктов и услуг</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$100-200</span>
                    <Badge variant="outline">2-3 дня</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Детальные описания услуг с акцентом на пользу для клиента.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Структурированная подача
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Выгоды для клиента
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Технические детали
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle>О компании</CardTitle>
                <CardDescription>Тексты о компании и команде</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$150-250</span>
                    <Badge variant="outline">2-3 дня</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">История компании, миссия, ценности и команда.</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      История и миссия
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Ценности компании
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Презентация команды
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Как я работаю</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Бриф</h3>
              <p className="text-muted-foreground">
                Высылаю подробный бриф для понимания задач, целей и особенностей проекта.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Анализ</h3>
              <p className="text-muted-foreground">Изучаю целевую аудиторию, конкурентов и особенности ниши.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Маркетинг</h3>
              <p className="text-muted-foreground">
                Определяю ключевые сообщения, боли аудитории и уникальные преимущества.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Макет</h3>
              <p className="text-muted-foreground">Создаю структуру текста с заголовками и основными блоками.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Написание</h3>
              <p className="text-muted-foreground">
                Пишу финальный текст с учетом всех требований и особенностей проекта.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                6
              </div>
              <h3 className="text-lg font-semibold mb-2">Правки</h3>
              <p className="text-muted-foreground">Вношу правки по вашим комментариям и дорабатываю текст до идеала.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и я вышлю подробный бриф для вашего проекта
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Выслать бриф</CardTitle>
              <CardDescription>Расскажите о своем проекте, и я подготовлю предложение</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название компании" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Тип услуги *</Label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Выберите услугу</option>
                    <option value="landing">Лендинг</option>
                    <option value="commercial">Коммерческое предложение</option>
                    <option value="seo">SEO-тексты</option>
                    <option value="homepage">Тексты на главную</option>
                    <option value="services">Тексты об услугах</option>
                    <option value="about">О компании</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет</Label>
                  <select
                    id="budget"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Выберите бюджет</option>
                    <option value="100-200">$100-200</option>
                    <option value="200-500">$200-500</option>
                    <option value="500-1000">$500-1000</option>
                    <option value="1000+">$1000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание проекта *</Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажите о вашем проекте, целях, целевой аудитории и особых требованиях"
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Желаемый срок</Label>
                  <Input id="deadline" type="date" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Выслать бриф
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
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

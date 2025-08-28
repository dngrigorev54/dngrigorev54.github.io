import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink, Globe, FileText, Search, Building, MessageSquare, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const portfolioItems = {
    landings: [
      {
        title: "IT-консалтинг «TechSolutions»",
        description: "Лендинг для IT-компании, специализирующейся на цифровой трансформации бизнеса",
        category: "B2B IT-услуги",
        results: "Увеличение конверсии на 65%",
        metrics: "Конверсия: 2.1% → 3.5%",
        features: ["Анализ болей ЦА", "Кейсы клиентов", "Калькулятор стоимости"],
      },
      {
        title: "Онлайн-школа «EduPro»",
        description: "Продающий лендинг для курсов по интернет-маркетингу",
        category: "Образование",
        results: "Рост заявок на 120%",
        metrics: "Заявки: 45/мес → 99/мес",
        features: ["Социальные доказательства", "Программа курса", "Отзывы студентов"],
      },
      {
        title: "Финтех-стартап «PayFlow»",
        description: "Лендинг для B2B платежного решения с акцентом на безопасность",
        category: "Финтех",
        results: "Увеличение демо-заявок на 85%",
        metrics: "Демо: 12/мес → 22/мес",
        features: ["Техническая экспертность", "Сертификаты безопасности", "API документация"],
      },
      {
        title: "Медицинская клиника «HealthCare+»",
        description: "Лендинг для частной клиники с услугами диагностики",
        category: "Медицина",
        results: "Рост записей на 45%",
        metrics: "Записи: 180/мес → 261/мес",
        features: ["Врачи и квалификации", "Современное оборудование", "Онлайн-запись"],
      },
    ],
    commercial: [
      {
        title: "Логистическая компания «CargoExpress»",
        description: "КП для корпоративных клиентов с детализацией услуг и тарифов",
        category: "Логистика",
        results: "Рост откликов на 45%",
        metrics: "Отклик: 8% → 11.6%",
        features: ["Калькулятор доставки", "Гарантии сроков", "Трекинг грузов"],
      },
      {
        title: "Рекламное агентство «CreativeHub»",
        description: "Коммерческое предложение для малого и среднего бизнеса",
        category: "Маркетинг",
        results: "Увеличение встреч на 60%",
        metrics: "Встречи: 15/мес → 24/мес",
        features: ["Кейсы по отраслям", "Пакеты услуг", "ROI калькулятор"],
      },
      {
        title: "Производство мебели «WoodCraft»",
        description: "КП для дизайнеров интерьера и строительных компаний",
        category: "Производство",
        results: "Рост B2B продаж на 35%",
        metrics: "Сделки: 28/мес → 38/мес",
        features: ["Каталог материалов", "Сроки изготовления", "Система скидок"],
      },
    ],
    articles: [
      {
        title: "Блог юридической компании",
        description: "Серия экспертных статей по корпоративному праву",
        category: "Юриспруденция",
        results: "Рост органического трафика на 180%",
        metrics: "Трафик: 2.5K → 7K/мес",
        features: ["Экспертные материалы", "Практические кейсы", "Чек-листы"],
      },
      {
        title: "Контент для SaaS-платформы",
        description: "Обучающие статьи и гайды для пользователей CRM-системы",
        category: "SaaS",
        results: "Снижение обращений в поддержку на 40%",
        metrics: "Тикеты: 450 → 270/мес",
        features: ["Пошаговые инструкции", "Видео-гайды", "FAQ разделы"],
      },
      {
        title: "Блог интернет-магазина",
        description: "SEO-статьи для продвижения товарных категорий",
        category: "E-commerce",
        results: "Увеличение продаж через контент на 25%",
        metrics: "Продажи: 180K → 225K/мес",
        features: ["Товарные обзоры", "Гайды по выбору", "Сравнительные таблицы"],
      },
    ],
    homepage: [
      {
        title: "Консалтинговая компания «BizGrow»",
        description: "Полный комплект текстов для главной страницы консалтингового агентства",
        category: "Консалтинг",
        results: "Увеличение времени на сайте на 55%",
        metrics: "Время: 1:45 → 2:42 мин",
        features: ["Ценностное предложение", "Услуги и результаты", "Команда экспертов"],
      },
      {
        title: "Архитектурная студия «DesignSpace»",
        description: "Тексты для главной страницы с акцентом на портфолио и процесс работы",
        category: "Архитектура",
        results: "Рост заявок на консультацию на 70%",
        metrics: "Заявки: 23 → 39/мес",
        features: ["Философия дизайна", "Этапы проектирования", "Реализованные проекты"],
      },
      {
        title: "Производственная компания «MetalWorks»",
        description: "Главная страница для B2B производителя металлоконструкций",
        category: "Производство",
        results: "Увеличение B2B запросов на 50%",
        metrics: "Запросы: 34 → 51/мес",
        features: ["Производственные мощности", "Сертификаты качества", "Типовые решения"],
      },
    ],
  }

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
                <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Портфолио</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Более 200 успешных проектов для компаний разных отраслей. Каждый текст создается с учетом специфики бизнеса
            и целевой аудитории.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="landings" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="landings" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Лендинги
              </TabsTrigger>
              <TabsTrigger value="commercial" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                КП
              </TabsTrigger>
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Статьи
              </TabsTrigger>
              <TabsTrigger value="homepage" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Главные
              </TabsTrigger>
            </TabsList>

            <TabsContent value="landings">
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioItems.landings.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{item.results}</div>
                          <div className="text-xs text-muted-foreground">{item.metrics}</div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Ключевые элементы:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Открыть проект
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioItems.commercial.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{item.results}</div>
                          <div className="text-xs text-muted-foreground">{item.metrics}</div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Ключевые элементы:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Открыть проект
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioItems.articles.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{item.results}</div>
                          <div className="text-xs text-muted-foreground">{item.metrics}</div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Ключевые элементы:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Открыть проект
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="homepage">
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioItems.homepage.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{item.results}</div>
                          <div className="text-xs text-muted-foreground">{item.metrics}</div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Ключевые элементы:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Открыть проект
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Каждый проект уникален. Расскажите о своих задачах, и я предложу оптимальное решение для вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Обсудить проект
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Посмотреть цены
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Завершенных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Клиентов возвращаются</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Средний рост конверсии</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
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

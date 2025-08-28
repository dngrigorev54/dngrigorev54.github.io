import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle,
  FileText,
  Search,
  BarChart,
  Layout,
  Edit,
  RefreshCw,
} from "lucide-react"

export default function ServicesPage() {
  const processCards = [
    {
      icon: MessageSquare,
      title: "Ответ в течение 1 дня",
      description: "Быстрая обратная связь по вашему запросу",
    },
    {
      icon: Clock,
      title: "Средний срок 4 дня",
      description: "Оптимальное время для качественного результата",
    },
    {
      icon: Calendar,
      title: "График работы",
      description: "Пн-Пт 9:00-18:00, выходные по договоренности",
    },
  ]

  const services = [
    {
      title: "Лендинги",
      description: "Продающие страницы с высокой конверсией",
      price: "$200-500",
      deadline: "3-7 дней",
      features: ["Анализ ЦА", "Структура продаж", "CTA-блоки", "Мобильная адаптация"],
    },
    {
      title: "Коммерческие предложения",
      description: "Убедительные КП для B2B и B2C",
      price: "$150-300",
      deadline: "2-4 дня",
      features: ["Анализ конкурентов", "УТП", "Структура AIDA", "Персонализация"],
    },
    {
      title: "SEO-статьи",
      description: "Оптимизированный контент для поисковых систем",
      price: "$50-150",
      deadline: "2-5 дней",
      features: ["Сбор семантики", "LSI-слова", "Мета-теги", "Внутренняя перелинковка"],
    },
    {
      title: "Тексты на главную",
      description: "Презентация компании и ключевых услуг",
      price: "$100-250",
      deadline: "2-4 дня",
      features: ["Позиционирование", "Блоки преимуществ", "Социальные доказательства", "CTA-элементы"],
    },
    {
      title: "Тексты об услугах",
      description: "Детальное описание продуктов и сервисов",
      price: "$60-120",
      deadline: "1-3 дня",
      features: ["Выгоды и преимущества", "Техническое описание", "Кейсы применения", "FAQ"],
    },
    {
      title: "О компании",
      description: "История, миссия и ценности бизнеса",
      price: "$80-150",
      deadline: "2-3 дня",
      features: ["Корпоративная история", "Команда", "Достижения", "Социальная ответственность"],
    },
  ]

  const workProcess = [
    {
      icon: FileText,
      title: "Бриф",
      description: "Заполняете подробный бриф о проекте и целях",
    },
    {
      icon: Search,
      title: "Анализ",
      description: "Изучаю вашу нишу, конкурентов и целевую аудиторию",
    },
    {
      icon: BarChart,
      title: "Маркетинг",
      description: "Разрабатываю стратегию и ключевые сообщения",
    },
    {
      icon: Layout,
      title: "Макет",
      description: "Создаю структуру и план будущего текста",
    },
    {
      icon: Edit,
      title: "Написание",
      description: "Пишу текст согласно техническому заданию",
    },
    {
      icon: RefreshCw,
      title: "Правки",
      description: "Вношу корректировки по вашим комментариям",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Услуги и цены</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный копирайтинг для решения ваших бизнес-задач. Прозрачные цены, четкие сроки, гарантия
              качества.
            </p>
          </div>
        </section>

        {/* Process Cards */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Сроки и процесс</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {processCards.map((card, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <card.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Список услуг</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-muted-foreground">{service.deadline}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Что входит:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Как я работаю</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Готовы начать проект?</h2>
              <p className="text-lg text-muted-foreground">Заполните форму, и я вышлю вам подробный бриф для работы</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя *
                      </label>
                      <Input id="name" placeholder="Введите ваше имя" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Компания
                    </label>
                    <Input id="company" placeholder="Название компании" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Интересующая услуга *
                    </label>
                    <select id="service" className="w-full p-3 border border-input rounded-md bg-background" required>
                      <option value="">Выберите услугу</option>
                      <option value="landing">Лендинг</option>
                      <option value="commercial">Коммерческое предложение</option>
                      <option value="seo">SEO-статья</option>
                      <option value="main">Тексты на главную</option>
                      <option value="services">Тексты об услугах</option>
                      <option value="about">О компании</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Бюджет
                    </label>
                    <select id="budget" className="w-full p-3 border border-input rounded-md bg-background">
                      <option value="">Выберите бюджет</option>
                      <option value="50-100">$50-100</option>
                      <option value="100-250">$100-250</option>
                      <option value="250-500">$250-500</option>
                      <option value="500+">$500+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Описание проекта *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте, целях и требованиях..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Выслать бриф
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

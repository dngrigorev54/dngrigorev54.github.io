import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  TrendingUp,
  Search,
  PenTool,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  CheckCircle,
  X,
  Award,
  Users,
  Clock,
  Target,
} from "lucide-react"

export default function AboutPage() {
  const workFor = [
    {
      icon: Building2,
      title: "Бизнес",
      description: "Малый и средний бизнес, стартапы, интернет-магазины",
      examples: ["Лендинги для продуктов", "Тексты для сайтов", "Коммерческие предложения"],
    },
    {
      icon: TrendingUp,
      title: "Маркетологи",
      description: "Специалисты по маркетингу и рекламе",
      examples: ["Email-кампании", "Рекламные тексты", "Контент-планы"],
    },
    {
      icon: Search,
      title: "SEO-специалисты",
      description: "Эксперты по поисковой оптимизации",
      examples: ["SEO-статьи", "Оптимизированные тексты", "Контент для блогов"],
    },
    {
      icon: PenTool,
      title: "Копирайтеры",
      description: "Коллеги по профессии и агентства",
      examples: ["Аутсорс проектов", "Консультации", "Менторство"],
    },
  ]

  const dontDo = [
    {
      icon: X,
      title: "Медицина",
      reason: "Требует специальных знаний и лицензий",
    },
    {
      icon: X,
      title: "Юриспруденция",
      reason: "Нужна юридическая экспертиза",
    },
    {
      icon: X,
      title: "Автомобили",
      reason: "Слишком техническая специфика",
    },
    {
      icon: X,
      title: "Криптовалюты",
      reason: "Высокие риски и неопределенность",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "5+ лет опыта",
      description: "В коммерческом копирайтинге",
    },
    {
      icon: Users,
      title: "200+ проектов",
      description: "Успешно завершенных",
    },
    {
      icon: Clock,
      title: "98% в срок",
      description: "Соблюдение дедлайнов",
    },
    {
      icon: Target,
      title: "Средний рост конверсии",
      description: "На 40% после работы с текстами",
    },
  ]

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@copywriter.com",
      href: "mailto:hello@copywriter.com",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@copywriter",
      href: "https://t.me/copywriter",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@copywriter_pro",
      href: "https://instagram.com/copywriter_pro",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Anna Copywriter",
      href: "https://linkedin.com/in/copywriter",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section with Photo */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Обо мне</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Привет! Меня зовут Анна, и я профессиональный копирайтер с опытом работы более 5 лет.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Специализируюсь на создании продающих текстов для бизнеса. Помогаю компаниям увеличивать конверсию
                  через качественный контент, который говорит на языке целевой аудитории и решает бизнес-задачи.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Верю, что хороший текст — это не просто красивые слова, а инструмент, который приводит к конкретным
                  результатам: больше лидов, выше продажи, сильнее доверие клиентов.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Обсудить проект</Link>
                </Button>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <Image
                    src="/professional-copywriter-portrait.png"
                    alt="Анна - профессиональный копирайтер"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                    <p className="font-bold text-lg">5+ лет</p>
                    <p className="text-sm">опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Достижения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who I Work For */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Для кого я работаю</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {workFor.map((client, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <client.icon className="h-8 w-8 text-primary mr-3" />
                      <CardTitle className="text-xl">{client.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{client.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm mb-3">Что делаю:</p>
                      {client.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What I Don't Do */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">Что я не делаю</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Честно говорю о своих ограничениях. Лучше отказаться от проекта, чем сделать его плохо.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dontDo.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-destructive mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Мой подход к работе</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Принципы работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Всегда изучаю бизнес и аудиторию перед написанием</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Фокусируюсь на результате, а не на красивых словах</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Соблюдаю дедлайны и держу связь на всех этапах</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Делаю правки до полного удовлетворения результатом</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Образование и навыки</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Высшее образование в области маркетинга</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Сертификаты по digital-маркетингу</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Постоянное обучение и изучение трендов</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Опыт работы в разных нишах и форматах</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Контакты и соцсети</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <a
                      href={contact.href}
                      className="flex items-center hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <contact.icon className="h-6 w-6 mr-4 text-primary" />
                      <div>
                        <p className="font-semibold">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">Готовы обсудить ваш проект? Напишите мне!</p>
              <Button size="lg" asChild>
                <Link href="/contact">Связаться со мной</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

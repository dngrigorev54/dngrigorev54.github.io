import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MessageSquare, Send, Clock, MapPin, Linkedin, Twitter, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </Link>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Готова обсудить ваш проект и ответить на все вопросы. Выберите удобный способ связи или заполните форму
            ниже.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Основной способ связи</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:anna@copywriter.ru"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  anna@copywriter.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">Отвечаю в течение 2-4 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Быстрая связь</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://t.me/anna_copywriter"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  @anna_copywriter
                </a>
                <p className="text-sm text-muted-foreground mt-2">Онлайн с 9:00 до 18:00 МСК</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Голосовые сообщения</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/79001234567"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  +7 (900) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-2">Только по предварительной договоренности</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Видеозвонок</CardTitle>
                <CardDescription>Консультация</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                  Записаться
                </a>
                <p className="text-sm text-muted-foreground mt-2">Zoom, Google Meet, Skype</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Написать сообщение</CardTitle>
                  <CardDescription>Расскажите о своем проекте, и я свяжусь с вами в течение 24 часов</CardDescription>
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
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Компания</Label>
                        <Input id="company" placeholder="Название компании" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <select
                        id="subject"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Выберите тему</option>
                        <option value="landing">Создание лендинга</option>
                        <option value="commercial">Коммерческое предложение</option>
                        <option value="seo">SEO-тексты</option>
                        <option value="content">Контент-маркетинг</option>
                        <option value="audit">Аудит текстов</option>
                        <option value="consultation">Консультация</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Бюджет проекта</Label>
                      <select
                        id="budget"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Выберите бюджет</option>
                        <option value="100-300">$100-300</option>
                        <option value="300-500">$300-500</option>
                        <option value="500-1000">$500-1000</option>
                        <option value="1000-2000">$1000-2000</option>
                        <option value="2000+">$2000+</option>
                        <option value="discuss">Обсудим индивидуально</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите подробнее о вашем проекте: цели, целевая аудитория, особые требования, сроки..."
                        rows={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Желаемый срок завершения</Label>
                      <Input id="deadline" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="source">Как узнали обо мне?</Label>
                      <select
                        id="source"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Выберите источник</option>
                        <option value="google">Поиск в Google</option>
                        <option value="yandex">Поиск в Яндекс</option>
                        <option value="social">Социальные сети</option>
                        <option value="referral">Рекомендация</option>
                        <option value="blog">Блог</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="privacy" required />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed">
                        Согласен(а) с{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          обработкой персональных данных
                        </Link>{" "}
                        и{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          условиями использования
                        </Link>
                        *
                      </Label>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить сообщение
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 18:00 МСК</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span className="font-medium">10:00 - 16:00 МСК</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="text-muted-foreground">Выходной</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Срочные проекты:</strong> Возможна работа в выходные дни по предварительной договоренности
                      с доплатой 50%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Местоположение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">Москва, Россия</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Работаю удаленно с клиентами по всему миру. Личные встречи возможны в Москве и МО.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Удаленная работа</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Видеоконференции</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Личные встречи в Москве</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                  <CardDescription>Следите за новостями и полезными материалами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/anna-copywriter" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://twitter.com/anna_copywriter" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://t.me/anna_copywriter_channel" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Подписывайтесь на мой Telegram-канал для получения советов по копирайтингу и анонсов новых статей.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Частые вопросы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Как быстро вы отвечаете?</h4>
                      <p className="text-sm text-muted-foreground">
                        На email отвечаю в течение 2-4 часов в рабочее время, в Telegram — практически мгновенно.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Работаете ли вы с международными клиентами?</h4>
                      <p className="text-sm text-muted-foreground">
                        Да, работаю с клиентами из любых стран. Оплата возможна в USD, EUR или RUB.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Предоставляете ли вы договор?</h4>
                      <p className="text-sm text-muted-foreground">
                        Для проектов от $500 заключаем официальный договор. Для небольших проектов — работаем по
                        техническому заданию.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Не откладывайте на завтра то, что может принести результат уже сегодня. Свяжитесь со мной прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:anna@copywriter.ru">
                <Mail className="mr-2 h-5 w-5" />
                Написать на email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://t.me/anna_copywriter">
                <MessageSquare className="mr-2 h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
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
                  <a href="mailto:anna@copywriter.ru" className="hover:text-primary transition-colors">
                    anna@copywriter.ru
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <a href="https://t.me/anna_copywriter" className="hover:text-primary transition-colors">
                    @anna_copywriter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Анна Петрова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

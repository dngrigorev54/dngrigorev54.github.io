import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  X,
  Users,
  Building,
  TrendingUp,
  Search,
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Twitter,
  Award,
  BookOpen,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/copywriter-professional-photo.png"
                alt="Анна Петрова - профессиональный копирайтер"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Анна Петрова</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Профессиональный копирайтер с 5+ летним опытом создания продающих текстов для B2B и B2C сегментов.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  <span>Сертифицированный специалист по контент-маркетингу</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span>Автор 200+ успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-3" />
                  <span>Средний рост конверсии клиентов: +40%</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Обсудить проект
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">Посмотреть работы</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Specialization */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Опыт и специализация</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Мой путь в копирайтинге</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">2019 - Начало карьеры</h4>
                  <p className="text-muted-foreground">
                    Первые проекты для малого бизнеса. Изучение основ копирайтинга и психологии продаж.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">2020-2021 - Рост экспертности</h4>
                  <p className="text-muted-foreground">
                    Специализация на B2B сегменте. Работа с IT-компаниями и стартапами. Изучение SEO-копирайтинга.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">2022-2023 - Масштабирование</h4>
                  <p className="text-muted-foreground">
                    Работа с крупными брендами. Создание комплексных контент-стратегий. Менторство начинающих
                    копирайтеров.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">2024 - Настоящее время</h4>
                  <p className="text-muted-foreground">
                    Фокус на высокобюджетных проектах. Консультирование по контент-стратегии. Ведение блога и обучение.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ключевые навыки</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Копирайтинг</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Продающие тексты
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Лендинги
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Email-маркетинг
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">SEO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        SEO-тексты
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Семантика
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Контент-план
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Аналитика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        A/B тестирование
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Метрики
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Оптимизация
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Стратегия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Позиционирование
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        UVP
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Воронки продаж
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Для кого я работаю</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Бизнес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Малый и средний бизнес, стартапы, корпорации</p>
                <ul className="text-sm space-y-2">
                  <li>• IT-компании</li>
                  <li>• E-commerce</li>
                  <li>• B2B услуги</li>
                  <li>• Финтех</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Маркетологи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Специалисты по маркетингу и рекламе</p>
                <ul className="text-sm space-y-2">
                  <li>• Performance-маркетологи</li>
                  <li>• Контент-маркетологи</li>
                  <li>• Бренд-менеджеры</li>
                  <li>• CMO</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>SEO-специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Эксперты по поисковому продвижению</p>
                <ul className="text-sm space-y-2">
                  <li>• SEO-агентства</li>
                  <li>• Внутренние SEO</li>
                  <li>• Консультанты</li>
                  <li>• Веб-студии</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Копирайтеры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Коллеги по профессии</p>
                <ul className="text-sm space-y-2">
                  <li>• Менторство</li>
                  <li>• Консультации</li>
                  <li>• Аудит текстов</li>
                  <li>• Обучение</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Don't Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Что я не делаю</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>Медицина</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Не работаю с медицинскими услугами, фармацевтикой и БАДами из-за высоких требований к экспертности и
                  ответственности.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>Юриспруденция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Не беру проекты в сфере права и юридических услуг, так как требуется глубокая экспертность в
                  законодательстве.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>Автомобили</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Не специализируюсь на автомобильной тематике из-за необходимости технических знаний и специфической
                  терминологии.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Я предпочитаю работать в тех сферах, где могу гарантировать высокое качество и экспертность. Это позволяет
              мне создавать действительно эффективные тексты.
            </p>
            <Button variant="outline" asChild>
              <Link href="/services">Посмотреть мои услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Достижения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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

      {/* Education and Certificates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Образование и сертификаты</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Высшее образование</CardTitle>
                <CardDescription>МГУ им. М.В. Ломоносова, факультет журналистики (2018)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Сертификаты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Google Analytics Certified (2023)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Яндекс.Директ Сертификат (2023)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    HubSpot Content Marketing Certification (2022)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Coursera: Psychology of Sales (2021)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact and Social */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Свяжитесь со мной</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Готова обсудить ваш проект и предложить оптимальное решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <a href="mailto:anna@copywriter.ru" className="text-lg hover:text-primary transition-colors">
                anna@copywriter.ru
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <a href="https://t.me/anna_copywriter" className="text-lg hover:text-primary transition-colors">
                @anna_copywriter
              </a>
            </div>
          </div>
          <div className="flex gap-4 justify-center mb-8">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">
              Обсудить проект
              <MessageSquare className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
                  <Phone className="h-4 w-4 mr-2" />
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

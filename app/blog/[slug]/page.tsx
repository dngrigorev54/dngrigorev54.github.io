import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = {
  "kak-napisat-prodayushchiy-zagolovok": {
    title: "Как написать продающий заголовок",
    excerpt: "Разбираю формулы эффективных заголовков и показываю примеры из практики",
    date: "15 декабря 2024",
    readTime: "7 мин",
    category: "Копирайтинг",
    content: `
Заголовок — это первое, что видит ваш потенциальный клиент. От него зависит, будет ли прочитан весь текст или пользователь закроет страницу через 3 секунды.

## Почему заголовки так важны

Статистика показывает, что 80% людей читают заголовки, но только 20% читают весь текст. Это означает, что у вас есть всего несколько секунд, чтобы зацепить внимание читателя.

### Основные функции заголовка:

- **Привлечение внимания** — выделиться среди конкурентов
- **Обещание пользы** — показать, что получит читатель
- **Фильтрация аудитории** — привлечь именно целевых клиентов
- **Мотивация к действию** — побудить читать дальше

## 15 проверенных формул заголовков

### 1. Формула "Как + результат"
**Пример:** "Как увеличить продажи на 40% за 30 дней"

Эта формула работает, потому что обещает конкретный результат и показывает путь к его достижению.

### 2. Формула "Число + польза + срок"
**Пример:** "7 способов сократить расходы на рекламу за неделю"

Конкретные цифры привлекают внимание и создают ощущение структурированности информации.

### 3. Формула "Секрет + авторитет"
**Пример:** "Секрет успешных продаж от топ-менеджера Apple"

Слово "секрет" вызывает любопытство, а упоминание авторитета добавляет доверия.

### 4. Формула "Проблема + решение"
**Пример:** "Клиенты не покупают? 5 ошибок в презентации товара"

Сначала обозначаем боль, затем предлагаем решение.

### 5. Формула "До и после"
**Пример:** "От 50 до 500 заявок в месяц: история одного лендинга"

Показываем трансформацию, которая возможна.

## Психологические триггеры в заголовках

### Триггер срочности
- "Только до конца месяца"
- "Последние 3 дня"
- "Ограниченное предложение"

### Триггер исключительности
- "Только для подписчиков"
- "Эксклюзивная методика"
- "Секретная стратегия"

### Триггер социального доказательства
- "Метод, которым пользуются 90% успешных компаний"
- "Стратегия от лидера рынка"
- "Проверено на 1000+ клиентах"

## Частые ошибки в заголовках

### 1. Слишком общие формулировки
❌ **Плохо:** "Увеличиваем продажи"
✅ **Хорошо:** "Как увеличить продажи B2B услуг на 65% за квартал"

### 2. Отсутствие конкретики
❌ **Плохо:** "Много способов заработать"
✅ **Хорошо:** "12 проверенных способов заработать фрилансеру в 2024"

### 3. Фокус на себе, а не на клиенте
❌ **Плохо:** "Мы лучшие в своем деле"
✅ **Хорошо:** "Как выбрать подрядчика, который не подведет"

## Как тестировать заголовки

### A/B тестирование
Создайте 2-3 варианта заголовка и тестируйте их на небольшой аудитории. Измеряйте:
- CTR (кликабельность)
- Время на странице
- Конверсию в целевое действие

### Инструменты для тестирования
- Google Optimize
- Яндекс.Метрика
- Facebook Ads Manager
- Email-сервисы (MailChimp, SendPulse)

## Чек-лист идеального заголовка

- [ ] Содержит конкретную пользу
- [ ] Указывает на целевую аудиторию
- [ ] Включает цифры или факты
- [ ] Вызывает эмоции
- [ ] Не превышает 60 символов для SEO
- [ ] Легко читается и понимается
- [ ] Соответствует содержанию текста

## Заключение

Хороший заголовок — это результат анализа аудитории, понимания ее болей и грамотного применения психологических триггеров. Не бойтесь экспериментировать и тестировать разные варианты.

Помните: идеального заголовка не существует. Есть заголовок, который лучше всего работает для вашей конкретной аудитории в конкретный момент времени.
    `,
  },
  "5-oshibok-v-kommercheskih-predlozheniyah": {
    title: "5 ошибок в коммерческих предложениях",
    excerpt: "Частые ошибки, которые убивают эффективность КП и как их избежать",
    date: "10 декабря 2024",
    readTime: "5 мин",
    category: "B2B",
    content: `
Коммерческое предложение — это ваш шанс заинтересовать потенциального клиента и получить встречу. Но большинство КП отправляются в корзину уже через 10 секунд просмотра.

## Почему КП не работают

По статистике, только 2-3% коммерческих предложений приводят к сделке. Остальные 97% проваливаются из-за типичных ошибок, которые легко исправить.

## Ошибка №1: Фокус на себе, а не на клиенте

### Что делают неправильно:
"Наша компания существует с 2010 года. Мы лидеры рынка с большим опытом..."

### Как надо:
"Ваши конкуренты уже используют автоматизацию продаж и обгоняют вас на 40%. Покажем, как это исправить."

### Почему это работает:
Клиента не интересует ваша история. Его интересует, как вы решите его проблемы.

## Ошибка №2: Отсутствие персонализации

### Что делают неправильно:
Отправляют одно и то же КП всем подряд, меняя только название компании.

### Как надо:
- Изучить сайт клиента
- Найти конкретные проблемы
- Предложить решение под его специфику

### Пример персонализации:
"Заметил, что на вашем сайте нет онлайн-калькулятора стоимости. Это может снижать конверсию на 25%. Предлагаю добавить его и увеличить заявки."

## Ошибка №3: Слишком много информации

### Проблема:
КП на 10 страниц с подробным описанием всех услуг, кейсов и сертификатов.

### Решение:
Правило одной страницы — максимум информации на одном экране:
- Проблема клиента (1 абзац)
- Ваше решение (2-3 пункта)
- Результат (конкретные цифры)
- Следующий шаг (призыв к действию)

## Ошибка №4: Неубедительные доказательства

### Что не работает:
- "Мы лучшие"
- "Высокое качество"
- "Индивидуальный подход"

### Что работает:
- Конкретные цифры: "Увеличили продажи на 67%"
- Кейсы: "Для компании X сократили расходы на рекламу с 500К до 200К в месяц"
- Отзывы с именами и должностями

## Ошибка №5: Слабый призыв к действию

### Плохие примеры:
- "Свяжитесь с нами"
- "Ждем вашего ответа"
- "Будем рады сотрудничеству"

### Хорошие примеры:
- "Запишитесь на 30-минутную консультацию до 20 декабря"
- "Получите бесплатный аудит вашего сайта"
- "Позвоню завтра в 14:00 для уточнения деталей"

## Структура эффективного КП

### 1. Цепляющий заголовок
"Как увеличить продажи вашего интернет-магазина на 40% за 3 месяца"

### 2. Проблема клиента
"Ваши конкуренты получают больше заказов при том же рекламном бюджете"

### 3. Решение
"Оптимизируем воронку продаж и настроим эффективную рекламу"

### 4. Доказательства
"Для похожей компании увеличили конверсию с 1.2% до 3.8%"

### 5. Призыв к действию
"Запишитесь на бесплатный аудит до 25 декабря"

## Чек-лист эффективного КП

- [ ] Заголовок содержит пользу для клиента
- [ ] Первый абзац описывает проблему клиента
- [ ] Есть конкретные цифры и факты
- [ ] Указаны результаты работы с похожими клиентами
- [ ] Четкий призыв к действию с дедлайном
- [ ] КП помещается на одну страницу
- [ ] Нет орфографических ошибок
- [ ] Указаны контакты для связи

## Заключение

Эффективное КП — это не рассказ о вашей компании, а решение проблем клиента. Фокусируйтесь на пользе, подкрепляйте слова фактами и всегда предлагайте конкретный следующий шаг.
    `,
  },
  "seo-kopirayting-v-2024": {
    title: "SEO-копирайтинг в 2024",
    excerpt: "Актуальные требования поисковых систем к текстовому контенту",
    date: "5 декабря 2024",
    readTime: "8 мин",
    category: "SEO",
    content: `
SEO-копирайтинг кардинально изменился за последние годы. Если раньше достаточно было "впихнуть" ключевые слова в текст, то сейчас поисковые системы оценивают качество контента по совершенно другим критериям.

## Что изменилось в 2024 году

### Алгоритмы стали умнее
Google и Яндекс теперь понимают контекст и семантику текста. Они могут определить:
- Соответствует ли текст поисковому запросу
- Насколько полно раскрыта тема
- Есть ли в тексте экспертность и авторитетность

### E-A-T стал еще важнее
**Expertise, Authoritativeness, Trustworthiness** — три кита современного SEO:
- **Экспертность** — глубокие знания в теме
- **Авторитетность** — признание в профессиональном сообществе
- **Доверие** — надежность информации и источника

## Принципы современного SEO-копирайтинга

### 1. Пишите для людей, оптимизируйте для роботов

**Старый подход:**
"Купить окна пластиковые в Москве недорого. Пластиковые окна купить в Москве цена от производителя."

**Новый подход:**
"Выбираете пластиковые окна в Москве? Рассказываем, на что обратить внимание при покупке и где найти качественные окна по разумной цене."

### 2. Отвечайте на вопросы пользователей

Современный SEO-текст должен закрывать информационную потребность полностью. Используйте:
- Блоки "Часто задаваемые вопросы"
- Подробные ответы на смежные вопросы
- Пошаговые инструкции

### 3. Используйте семантическое ядро

Не ограничивайтесь основными ключами. Включайте:
- **LSI-ключи** (латентно-семантические)
- **Синонимы** и **словоформы**
- **Вопросы** пользователей
- **Смежные темы**

## Структура SEO-текста в 2024

### Title (заголовок страницы)
- Длина: 50-60 символов
- Содержит основной ключ
- Привлекает внимание
- Соответствует содержанию

**Пример:**
"Как выбрать CRM-систему: гид по 15 лучшим решениям 2024"

### Description (описание)
- Длина: 150-160 символов
- Краткое изложение содержания
- Призыв к действию
- Дополнительные ключи

### H1 (главный заголовок)
- Один на страницу
- Может отличаться от Title
- Содержит основной ключ
- Привлекает внимание

### Подзаголовки H2-H6
- Логическая структура
- Содержат дополнительные ключи
- Помогают сканировать текст
- Отвечают на конкретные вопросы

## Технические требования

### Объем текста
- **Информационные запросы:** 2000-5000 слов
- **Коммерческие запросы:** 1000-2000 слов
- **Навигационные запросы:** 500-1000 слов

### Плотность ключевых слов
- **Основной ключ:** 1-3%
- **Дополнительные ключи:** 0.5-1%
- **Естественное вхождение** важнее точного процента

### Уникальность
- **Минимум 90%** для коммерческих сайтов
- **95%+** для информационных ресурсов
- Проверка в нескольких сервисах

## Инструменты для SEO-копирайтера

### Сбор семантики
- **Яндекс.Вордстат** — базовый инструмент
- **Key Collector** — профессиональный сбор
- **Serpstat** — комплексный анализ
- **Ahrefs** — международная семантика

### Анализ конкурентов
- **SEMrush** — анализ топ-10
- **Топвизор** — мониторинг позиций
- **Screaming Frog** — технический анализ

### Проверка текстов
- **Advego** — уникальность и тошнота
- **Text.ru** — комплексная проверка
- **Главред** — качество текста
- **Тургенев** — риски переоптимизации

## Частые ошибки SEO-копирайтеров

### 1. Переоптимизация
**Проблема:** Слишком много ключей в тексте
**Решение:** Фокус на естественности и читабельности

### 2. Игнорирование пользовательских факторов
**Проблема:** Текст оптимизирован, но его не читают
**Решение:** Анализ поведенческих метрик

### 3. Копирование структуры конкурентов
**Проблема:** Одинаковые тексты в топе
**Решение:** Уникальный подход к раскрытию темы

## Метрики эффективности

### Поисковые метрики
- **Позиции** по ключевым запросам
- **Органический трафик**
- **CTR** в поисковой выдаче
- **Индексация** страниц

### Поведенческие метрики
- **Время на странице**
- **Глубина просмотра**
- **Показатель отказов**
- **Конверсия** в целевые действия

## Тренды SEO-копирайтинга 2024

### 1. Голосовой поиск
Оптимизация под разговорные запросы и вопросы

### 2. Искусственный интеллект
Использование AI для генерации идей, но не готовых текстов

### 3. Видео и аудио контент
Интеграция мультимедиа в текстовый контент

### 4. Локальное SEO
Усиление фокуса на географические запросы

## Чек-лист SEO-текста

- [ ] Собрано полное семантическое ядро
- [ ] Проанализированы конкуренты в топ-10
- [ ] Структура логична и удобна для чтения
- [ ] Ключи вписаны естественно
- [ ] Добавлены LSI-ключи и синонимы
- [ ] Текст отвечает на все вопросы пользователей
- [ ] Уникальность выше 90%
- [ ] Нет переоптимизации
- [ ] Добавлены мета-теги
- [ ] Проведена финальная проверка

## Заключение

SEO-копирайтинг в 2024 — это баланс между требованиями поисковых систем и потребностями пользователей. Фокусируйтесь на создании действительно полезного контента, который решает проблемы людей, и поисковые системы это оценят.
    `,
  },
}

const relatedPosts = [
  {
    slug: "psihologiya-prodazh-v-tekstah",
    title: "Психология продаж в текстах",
    category: "Психология",
  },
  {
    slug: "struktura-idealnogo-lendinga",
    title: "Структура идеального лендинга",
    category: "Лендинги",
  },
  {
    slug: "kak-pisat-dlya-b2b-auditorii",
    title: "Как писать для B2B аудитории",
    category: "B2B",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
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

      {/* Breadcrumbs */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Блог
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">{post.excerpt}</p>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Поделиться
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-serif font-bold mt-12 mb-6 text-foreground">${line.slice(3)}</h2>`
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">${line.slice(4)}</h3>`
                    }
                    if (line.startsWith("#### ")) {
                      return `<h4 class="text-lg font-semibold mt-6 mb-3 text-foreground">${line.slice(5)}</h4>`
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="mb-2 text-muted-foreground">${line.slice(2)}</li>`
                    }
                    if (line.includes("**") && line.includes(":")) {
                      return `<p class="mb-4 text-muted-foreground">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')}</p>`
                    }
                    if (line.includes("❌") || line.includes("✅")) {
                      return `<p class="mb-4 p-4 bg-muted/30 rounded-lg text-muted-foreground">${line}</p>`
                    }
                    if (line.startsWith("**")) {
                      return `<p class="mb-4 font-semibold text-foreground">${line.replace(/\*\*(.*?)\*\*/g, "$1")}</p>`
                    }
                    if (line.trim() === "") {
                      return ""
                    }
                    return `<p class="mb-4 text-muted-foreground">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')}</p>`
                  })
                  .join(""),
              }}
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Читайте также</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {relatedPost.category}
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto group-hover:text-primary" asChild>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      Читать статью
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад в блог
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

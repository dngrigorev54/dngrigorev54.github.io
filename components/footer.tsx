import Link from "next/link"
import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Копирайтер</h3>
            <p className="text-muted-foreground">Профессиональные тексты для вашего бизнеса</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Обо мне
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Лендинги</span>
              </li>
              <li>
                <span className="text-muted-foreground">Коммерческие предложения</span>
              </li>
              <li>
                <span className="text-muted-foreground">SEO-тексты</span>
              </li>
              <li>
                <span className="text-muted-foreground">Контент для сайтов</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@copywriter.com"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@copywriter.com
              </a>
              <a href="https://t.me/copywriter" className="flex items-center text-muted-foreground hover:text-primary">
                <MessageCircle className="h-4 w-4 mr-2" />
                Telegram
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
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
  )
}

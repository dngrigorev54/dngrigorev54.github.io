import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Копирайтинг, прототипирование и тексты для бизнеса
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Создаю продающие тексты, которые привлекают клиентов и увеличивают продажи. Работаю с лендингами,
          коммерческими предложениями и контентом для сайтов.
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          Получить консультацию
        </Button>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Globe, FileText } from "lucide-react"

export function WhenNeedCopywriter() {
  const reasons = [
    {
      icon: TrendingDown,
      title: "Не растут продажи",
      description: "Ваши тексты не убеждают клиентов совершить покупку",
    },
    {
      icon: Globe,
      title: "Нужен новый сайт",
      description: "Требуются качественные тексты для нового проекта",
    },
    {
      icon: FileText,
      title: "Тексты не работают",
      description: "Существующий контент не приносит результатов",
    },
  ]

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Когда нужен копирайтер</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <reason.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

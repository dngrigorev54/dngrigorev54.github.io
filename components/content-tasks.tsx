import { Users, TrendingUp, Shield, Target, Heart, Zap } from "lucide-react"

export function ContentTasks() {
  const tasks = [
    { icon: Users, title: "Привлекает клиентов" },
    { icon: TrendingUp, title: "Повышает продажи" },
    { icon: Shield, title: "Усиливает доверие" },
    { icon: Target, title: "Увеличивает конверсию" },
    { icon: Heart, title: "Создает лояльность" },
    { icon: Zap, title: "Ускоряет решения" },
  ]

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Какие задачи решает контент</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tasks.map((task, index) => (
            <div key={index} className="text-center">
              <task.icon className="h-12 w-12 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{task.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

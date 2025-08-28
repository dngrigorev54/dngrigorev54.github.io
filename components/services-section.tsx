import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Лендинги",
      description: "Продающие страницы, которые конвертируют посетителей в клиентов",
      price: "от $200",
    },
    {
      title: "Коммерческие предложения",
      description: "Убедительные КП, которые закрывают сделки",
      price: "от $150",
    },
    {
      title: "SEO-статьи",
      description: "Оптимизированный контент для поисковых систем",
      price: "от $50",
    },
    {
      title: "Тексты для главной",
      description: "Презентация компании и услуг на главной странице",
      price: "от $100",
    },
    {
      title: "О компании",
      description: "История, миссия и ценности вашего бизнеса",
      price: "от $80",
    },
    {
      title: "Описание услуг",
      description: "Детальное описание ваших продуктов и услуг",
      price: "от $60",
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Услуги копирайтера</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Смотреть примеры
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

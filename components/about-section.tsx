import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/professional-copywriter-portrait.png"
              alt="Копирайтер"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Профессиональный копирайтер с опытом работы более 5 лет. Специализируюсь на создании продающих текстов для
              бизнеса.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Помогаю компаниям увеличивать конверсию через качественный контент, который говорит на языке целевой
              аудитории и решает бизнес-задачи.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Специализация:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Лендинги и продающие страницы</li>
                <li>Коммерческие предложения</li>
                <li>SEO-тексты и статьи</li>
                <li>Контент для социальных сетей</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

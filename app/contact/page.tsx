"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MessageCircle, Instagram, Linkedin, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    agreement: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@copywriter.com",
      description: "Основной способ связи",
      href: "mailto:hello@copywriter.com",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@copywriter",
      description: "Быстрые ответы и консультации",
      href: "https://t.me/copywriter",
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звонки по предварительной договоренности",
      href: "tel:+79991234567",
    },
    {
      icon: MapPin,
      title: "Локация",
      value: "Москва, Россия",
      description: "Работаю удаленно по всему миру",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      username: "@copywriter_pro",
      href: "https://instagram.com/copywriter_pro",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "Anna Copywriter",
      href: "https://linkedin.com/in/copywriter",
    },
  ]

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "9:00 - 18:00" },
    { day: "Суббота", hours: "10:00 - 16:00" },
    { day: "Воскресенье", hours: "Выходной" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Спасибо за обращение!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ваше сообщение получено. Я отвечу в течение 24 часов и вышлю подробный бриф для работы.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Отправить еще одно сообщение</Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь со мной удобным способом или заполните форму ниже.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <contact.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                    <a
                      href={contact.href}
                      className="text-primary font-medium hover:underline block mb-2"
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {contact.value}
                    </a>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                    <p className="text-muted-foreground">Заполните форму, и я свяжусь с вами в течение 24 часов</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Ваше имя *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Введите ваше имя"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Компания
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Название компании"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Телефон
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-2">
                            Интересующая услуга *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-input rounded-md bg-background"
                            required
                          >
                            <option value="">Выберите услугу</option>
                            <option value="landing">Лендинг</option>
                            <option value="commercial">Коммерческое предложение</option>
                            <option value="seo">SEO-статья</option>
                            <option value="main">Тексты на главную</option>
                            <option value="services">Тексты об услугах</option>
                            <option value="about">О компании</option>
                            <option value="consultation">Консультация</option>
                            <option value="other">Другое</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-2">
                            Бюджет
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-input rounded-md bg-background"
                          >
                            <option value="">Выберите бюджет</option>
                            <option value="50-100">$50-100</option>
                            <option value="100-250">$100-250</option>
                            <option value="250-500">$250-500</option>
                            <option value="500-1000">$500-1000</option>
                            <option value="1000+">$1000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Описание проекта *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreement"
                          checked={formData.agreement}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, agreement: checked as boolean }))
                          }
                          required
                        />
                        <label htmlFor="agreement" className="text-sm text-muted-foreground leading-relaxed">
                          Я согласен(а) с обработкой персональных данных и политикой конфиденциальности
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={!formData.agreement}>
                        <Send className="h-4 w-4 mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Working Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      График работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Время ответа:</strong> В рабочие часы отвечаю в течение 2-4 часов, в выходные — до 24
                        часов.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle>Социальные сети</CardTitle>
                    <p className="text-muted-foreground">Следите за полезным контентом</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 border rounded-lg hover:bg-muted transition-colors"
                        >
                          <social.icon className="h-6 w-6 text-primary mr-3" />
                          <div>
                            <p className="font-medium">{social.name}</p>
                            <p className="text-sm text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Как быстро вы отвечаете?</h4>
                        <p className="text-sm text-muted-foreground">
                          В рабочее время — в течение 2-4 часов, в выходные — до 24 часов.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Работаете ли вы с международными клиентами?</h4>
                        <p className="text-sm text-muted-foreground">
                          Да, работаю с клиентами по всему миру. Оплата возможна в любой валюте.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Предоставляете ли вы правки?</h4>
                        <p className="text-sm text-muted-foreground">
                          Да, в стоимость включены 2 раунда правок. Дополнительные правки обсуждаются отдельно.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

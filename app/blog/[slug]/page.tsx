import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import type { JSX } from "react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)

  // Convert markdown-like content to JSX
  const formatContent = (content: string): JSX.Element[] => {
    const lines = content.trim().split("\n")
    const elements: JSX.Element[] = []

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold mb-6 mt-8">
            {line.slice(2)}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold mb-4 mt-6">
            {line.slice(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold mb-3 mt-4">
            {line.slice(4)}
          </h3>,
        )
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="ml-4 mb-1">
            {line.slice(2)}
          </li>,
        )
      } else if (line.trim() === "") {
        elements.push(<br key={index} />)
      } else if (line.trim() !== "") {
        elements.push(
          <p key={index} className="mb-4 leading-relaxed">
            {line}
          </p>,
        )
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <section className="py-4 px-4 bg-card border-b">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Главная
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">
                Блог
              </Link>
              <span>/</span>
              <span className="text-foreground">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-lg text-muted-foreground mb-8 p-6 bg-card rounded-lg border-l-4 border-primary">
                {post.excerpt}
              </div>

              <article className="text-foreground">{formatContent(post.content)}</article>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              <span className="text-sm font-medium text-muted-foreground mr-2">Теги:</span>
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Читайте также</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug}>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${relatedPost.slug}`}>Читать</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-8 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад в блог
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

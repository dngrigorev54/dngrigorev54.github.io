document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navLinks = document.getElementById("navLinks")

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navLinkItems = document.querySelectorAll(".nav-links a")
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add("fade-in-up")
        }, index * 100)
      }
    })
  }, observerOptions)

  // Observe all animated elements
  document.querySelectorAll(".card, .portfolio-item, .timeline-item, .achievement-card").forEach((element) => {
    observer.observe(element)
  })

  // Portfolio filtering
  const tabButtons = document.querySelectorAll(".tab-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  if (tabButtons.length > 0 && portfolioItems.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        button.classList.add("active")

        const category = button.getAttribute("data-category")

        // Filter portfolio items
        portfolioItems.forEach((item) => {
          if (category === "all" || item.getAttribute("data-category") === category) {
            item.classList.remove("hidden")
            item.style.display = "block"
          } else {
            item.classList.add("hidden")
            item.style.display = "none"
          }
        })
      })
    })
  }

  // Blog category filtering
  const categoryButtons = document.querySelectorAll(".category-btn")
  const blogArticles = document.querySelectorAll("#articlesGrid article")

  if (categoryButtons.length > 0 && blogArticles.length > 0) {
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryButtons.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        button.classList.add("active")

        const category = button.getAttribute("data-category")

        // Filter blog articles with smooth animation
        blogArticles.forEach((article, index) => {
          const articleCategory = article.getAttribute("data-category")

          if (category === "all" || articleCategory === category) {
            // Show article with delay for stagger effect
            setTimeout(() => {
              article.classList.remove("hidden")
              article.style.display = "block"
            }, index * 50)
          } else {
            // Hide article immediately
            article.classList.add("hidden")
            setTimeout(() => {
              if (article.classList.contains("hidden")) {
                article.style.display = "none"
              }
            }, 300)
          }
        })

        // Update articles count (optional)
        const visibleArticles = Array.from(blogArticles).filter(
          (article) => category === "all" || article.getAttribute("data-category") === category,
        )

        // Show notification with count
        const categoryName = button.textContent
        if (category !== "all") {
          showNotification(`Показано ${visibleArticles.length} статей в категории "${categoryName}"`, "success")
        }
      })
    })
  }

  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Enhanced form validation
      const requiredFields = form.querySelectorAll("[required]")
      const emailFields = form.querySelectorAll('input[type="email"]')
      let isValid = true
      const errors = []

      // Check required fields
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.style.borderColor = "#ef4444"
          errors.push(`Поле "${field.previousElementSibling?.textContent || "обязательное"}" не заполнено`)
        } else {
          field.style.borderColor = ""
        }
      })

      // Validate email format
      emailFields.forEach((field) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (field.value && !emailRegex.test(field.value)) {
          isValid = false
          field.style.borderColor = "#ef4444"
          errors.push("Неверный формат email")
        }
      })

      // Check privacy checkbox
      const privacyCheckbox = form.querySelector("#privacy")
      if (privacyCheckbox && !privacyCheckbox.checked) {
        isValid = false
        errors.push("Необходимо согласие на обработку персональных данных")
      }

      if (isValid) {
        // Show success message
        showNotification("Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.", "success")

        // Reset form
        form.reset()
      } else {
        // Show error message
        showNotification(errors[0], "error")
      }
    })
  })

  const newsletterForms = document.querySelectorAll('form[action="#newsletter"], form:has(input[placeholder*="email"])')
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const emailInput = form.querySelector('input[type="email"]')

      if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailRegex.test(emailInput.value)) {
          showNotification("Спасибо за подписку! Вы будете получать полезные материалы на почту.", "success")
          emailInput.value = ""
        } else {
          showNotification("Пожалуйста, введите корректный email адрес", "error")
        }
      }
    })
  })

  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

function showNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = "notification"
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === "success" ? "#0ea5e9" : "#ef4444"};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        max-width: 300px;
        font-weight: 500;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 4000)
}

const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`
document.head.appendChild(style)

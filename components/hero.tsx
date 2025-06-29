"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import SectionTitle from "./ui/sheard/SectionTitle"
import Title from "./ui/sheard/Title"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* <SectionTitle
          heading="Trusted Partene for Your Website Develop."
          subHeading={"Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev."}
          /> */}
          <Title
           heading="Trusted Partene for Your Website Develop."
          />
        
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background text-foreground">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

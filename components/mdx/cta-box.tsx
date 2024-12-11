import { Button } from "@/components/ui/button"

interface CTABoxProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function CTABox({ title, description, buttonText, buttonLink }: CTABoxProps) {
  return (
    <div className="bg-primary/10 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="text-inherit" asChild>
        <a href={buttonLink}>{buttonText}</a>
      </div>
    </div>
  )
}
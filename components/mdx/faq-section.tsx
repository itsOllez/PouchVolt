interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <h3 className="font-semibold mb-2">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}
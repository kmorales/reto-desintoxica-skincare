import { MessageCircle } from 'lucide-react'

interface CTABlockProps {
  texto: string
}

export function CTABlock({ texto }: CTABlockProps) {
  return (
    <div className="no-print bg-gradient-to-br from-afrodita-gold/20 to-afrodita-earth/20 border border-afrodita-gold/40 rounded-xl p-4 flex gap-3">
      <MessageCircle className="w-5 h-5 text-afrodita-earth shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-afrodita-earth mb-1">
          Un paso más allá
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">{texto}</p>
      </div>
    </div>
  )
}

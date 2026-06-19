import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { dias } from '../data/dias'
import { DayNav } from '../components/DayNav'
import { IngredientTable } from '../components/IngredientTable'
import { DailyTask } from '../components/DailyTask'
import { RecipeCard } from '../components/RecipeCard'
import { CTABlock } from '../components/CTABlock'
import { Leaf, Instagram } from 'lucide-react'

export function DayPage() {
  const { numero } = useParams<{ numero: string }>()
  const navigate = useNavigate()
  const num = Number(numero)

  useEffect(() => {
    if (!num || num < 1 || num > 7 || !Number.isInteger(num)) {
      navigate('/', { replace: true })
    }
  }, [num, navigate])

  const dia = dias.find(d => d.numero === num)
  if (!dia) return null

  const isLast = dia.numero === 7

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-12">
        {/* Day nav */}
        <DayNav current={dia.numero} />

        {/* Day header */}
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{dia.emoji}</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-afrodita-rose">
              Día {dia.numero}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-stone-800">{dia.ingrediente}</h1>
          <p className="text-stone-400 text-sm italic">{dia.subtitulo}</p>
        </div>

        {/* Mensaje del día */}
        <div className="bg-white rounded-xl border border-afrodita-beige-dark/40 p-4 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">
            Mensaje del día
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">{dia.mensaje}</p>
        </div>

        {/* Qué es y por qué importa */}
        <section className="mb-6 space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            Qué es y por qué importa
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">{dia.queEs}</p>
        </section>

        {/* Cómo identificarlo */}
        <section className="mb-6 space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            Cómo identificarlo en la etiqueta
          </h2>
          <IngredientTable ingredientes={dia.identificacion} />
        </section>

        {/* Tarea del día */}
        <div className="mb-6">
          <DailyTask dia={dia.numero} tarea={dia.tarea} />
        </div>

        {/* Receta / alternativa */}
        <section className="mb-6">
          <RecipeCard receta={dia.receta} ingrediente={dia.ingrediente} diaNumero={dia.numero} />
        </section>

        {/* CTA */}
        <div className="mb-6">
          <CTABlock texto={dia.ctaTexto} />
        </div>

        {/* Frase del día */}
        <blockquote className="border-l-4 border-afrodita-rose/40 pl-4 text-sm italic text-stone-500 leading-relaxed mb-8">
          {dia.frase}
        </blockquote>

        {/* Cierre del reto (día 7) */}
        {isLast && (
          <div className="bg-gradient-to-br from-afrodita-rose-light to-afrodita-leaf-light border border-afrodita-beige-dark/40 rounded-xl p-6 text-center space-y-3">
            <p className="text-2xl">🌿</p>
            <h2 className="text-xl font-bold text-stone-800">¡Completaste el reto!</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Eso ya te pone muy por delante de donde estabas hace 7 días. Ahora sabes leer una etiqueta. Sabes cuáles son los ingredientes que conviene evitar y por qué.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Eso no es un dato curioso: es una herramienta que te acompaña cada vez que entras a una farmacia, supermercado o tienda de cosmética.
            </p>
            <p className="text-sm font-semibold text-stone-700">Con cariño, Karen</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print bg-stone-800 text-stone-300 px-4 py-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-full bg-afrodita-rose flex items-center justify-center">
            <Leaf className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-white text-sm">Afrodita Alquimia Natural</span>
        </div>
        <a
          href="https://www.instagram.com/cosmetica.natural.afrodita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-white transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          @cosmetica.natural.afrodita
        </a>
      </footer>
    </div>
  )
}

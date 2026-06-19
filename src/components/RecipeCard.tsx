import { Printer, FlaskConical, Leaf } from 'lucide-react'
import type { Receta } from '../data/dias'

interface RecipeCardProps {
  receta: Receta
  ingrediente: string
  diaNumero: number
}

export function RecipeCard({ receta, ingrediente, diaNumero }: RecipeCardProps) {
  const isCasera = receta.tipo === 'casera'

  return (
    <div className={['print-target rounded-xl border-2 p-5 space-y-4', isCasera ? 'bg-afrodita-rose-light border-afrodita-rose/30' : 'bg-afrodita-leaf-light border-afrodita-leaf/30'].join(' ')}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {isCasera ? (
            <FlaskConical className="w-5 h-5 text-afrodita-rose shrink-0" />
          ) : (
            <Leaf className="w-5 h-5 text-afrodita-leaf shrink-0" />
          )}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
              {isCasera ? 'Alternativa casera' : 'Alternativa de compra'}
            </p>
            <h3 className="font-semibold text-stone-800 text-sm leading-tight">{receta.titulo}</h3>
          </div>
        </div>
        {isCasera && (
          <button
            onClick={() => window.print()}
            className="no-print shrink-0 flex items-center gap-1 text-xs text-stone-400 hover:text-afrodita-rose transition-colors border border-stone-200 rounded-lg px-2 py-1"
          >
            <Printer className="w-3.5 h-3.5" />
            Imprimir
          </button>
        )}
      </div>

      {/* Print header (only visible when printing) */}
      <div className="hidden print:block">
        <p className="text-lg font-bold text-stone-800">Reto Desintoxica tu Skincare · Día {diaNumero}</p>
        <p className="text-sm text-stone-500">{ingrediente} · Afrodita Alquimia Natural · @cosmetica.natural.afrodita</p>
        <hr className="my-2" />
      </div>

      {receta.descripcion && (
        <p className="text-sm text-stone-600 leading-relaxed">{receta.descripcion}</p>
      )}

      {/* Ingredientes */}
      {receta.ingredientes && receta.ingredientes.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">Ingredientes</p>
          <ul className="space-y-1">
            {receta.ingredientes.map((ing, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700">
                <span className="text-afrodita-rose mt-0.5">•</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Combinaciones sugeridas */}
      {receta.combinaciones && receta.combinaciones.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
            Combinaciones sugeridas
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            {receta.combinaciones.map((c, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <span className="font-semibold text-stone-600 shrink-0">{c.nombre}:</span>
                <span className="text-stone-500 italic">{c.formula}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pasos */}
      {receta.pasos && receta.pasos.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">Paso a paso</p>
          <ol className="space-y-2">
            {receta.pasos.map((paso, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-afrodita-rose/20 text-afrodita-rose font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {paso}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Alternativas de compra */}
      {receta.alternativas && receta.alternativas.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
            Busca en la etiqueta
          </p>
          <ul className="space-y-1">
            {receta.alternativas.map((alt, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700">
                <span className="text-afrodita-leaf mt-0.5">✓</span>
                {alt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Por qué es mejor */}
      {receta.porQueEsMejor && receta.porQueEsMejor.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
            Por qué es mejor
          </p>
          <ul className="space-y-1">
            {receta.porQueEsMejor.map((r, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700">
                <span className="text-afrodita-leaf mt-0.5">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Nota */}
      {receta.nota && (
        <div className="bg-white/60 rounded-lg p-3 border border-afrodita-beige-dark/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">Nota importante</p>
          <p className="text-sm text-stone-600 italic">{receta.nota}</p>
        </div>
      )}

      {/* Dónde conseguir */}
      {receta.dondeConseguir && (
        <div className="bg-white/60 rounded-lg p-3 border border-afrodita-leaf/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">Dónde conseguirla</p>
          <p className="text-sm text-stone-600">{receta.dondeConseguir}</p>
        </div>
      )}
    </div>
  )
}

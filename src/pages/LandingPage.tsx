import { useNavigate } from 'react-router-dom'
import { ArrowRight, Leaf, Instagram } from 'lucide-react'
import { dias } from '../data/dias'
import { useChecklist } from '../hooks/useChecklist'

export function LandingPage() {
  const navigate = useNavigate()
  const { isCompleted, total } = useChecklist()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-100 to-afrodita-beige px-4 pt-12 pb-10 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-afrodita-beige-dark/40 rounded-full px-3 py-1 text-xs text-stone-500 font-medium">
            <Leaf className="w-3.5 h-3.5 text-afrodita-leaf" />
            Afrodita Alquimia Natural
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-afrodita-rose font-semibold">Reto</p>
            <h1 className="text-4xl font-bold text-stone-800 leading-tight">
              Desintoxica<br />tu Skincare
            </h1>
          </div>

          <p className="text-stone-500 text-base leading-relaxed">
            7 días para leer etiquetas, eliminar lo que te daña y reemplazarlo con alternativas naturales.
          </p>

          {total > 0 && (
            <div className="bg-afrodita-leaf-light border border-afrodita-leaf/30 rounded-xl px-4 py-2.5 inline-flex items-center gap-2 text-sm text-afrodita-leaf font-medium">
              ✓ {total} de 7 días completados
            </div>
          )}

          <button
            onClick={() => navigate('/dia/1')}
            className="inline-flex items-center gap-2 bg-afrodita-rose text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-afrodita-rose/90 active:scale-95 transition-all shadow-sm"
          >
            {total > 0 ? 'Continuar el reto' : 'Comenzar el Día 1'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Bienvenida */}
      <section className="max-w-2xl mx-auto w-full px-4 py-8 space-y-3">
        <h2 className="text-lg font-semibold text-stone-700">Bienvenida al reto</h2>
        <p className="text-sm text-stone-600 leading-relaxed">
          Durante estos 7 días vas a aprender sobre un ingrediente específico cada día: qué es, dónde aparece, por qué conviene evitarlo y cómo reemplazarlo. El objetivo no es que lo cambies todo de golpe — es que empieces a leer etiquetas con otros ojos.
        </p>
        <p className="text-sm text-stone-600 leading-relaxed">
          Cada día tiene una tarea concreta y una alternativa práctica. Los días que tienen receta casera son sencillos, pensados para principiantes.
        </p>
      </section>

      {/* Grid de días */}
      <section className="max-w-2xl mx-auto w-full px-4 pb-10 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-400">Los 7 días</h2>
        <div className="grid grid-cols-1 gap-2">
          {dias.map(dia => {
            const done = isCompleted(dia.numero)
            return (
              <button
                key={dia.numero}
                onClick={() => navigate(`/dia/${dia.numero}`)}
                className={[
                  'flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all hover:shadow-sm active:scale-[0.99]',
                  done
                    ? 'bg-afrodita-leaf-light border-afrodita-leaf/30'
                    : 'bg-white border-afrodita-beige-dark/40 hover:border-afrodita-rose/40',
                ].join(' ')}
              >
                <span className="text-2xl">{dia.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone-400 font-medium">Día {dia.numero}</p>
                  <p className="font-semibold text-stone-700 text-sm truncate">{dia.ingrediente}</p>
                  <p className="text-xs text-stone-400 truncate">{dia.subtitulo}</p>
                </div>
                {done ? (
                  <span className="text-afrodita-leaf text-lg">✓</span>
                ) : (
                  <ArrowRight className="w-4 h-4 text-stone-300 shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-stone-800 text-stone-300 px-4 py-8 text-center space-y-2">
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
        <p className="text-xs text-stone-500">Con cariño, Karen</p>
      </footer>
    </div>
  )
}

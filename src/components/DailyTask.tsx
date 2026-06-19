import { CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

interface DailyTaskProps {
  dia: number
  tarea: string
}

export function DailyTask({ dia, tarea }: DailyTaskProps) {
  const { isCompleted, toggle } = useChecklist()
  const done = isCompleted(dia)

  return (
    <button
      onClick={() => toggle(dia)}
      className={[
        'no-print w-full text-left rounded-xl p-4 border-2 transition-all flex gap-3 items-start',
        done
          ? 'bg-afrodita-leaf-light border-afrodita-leaf'
          : 'bg-white border-afrodita-beige-dark/40 hover:border-afrodita-rose/50',
      ].join(' ')}
    >
      <span className="mt-0.5 shrink-0">
        {done ? (
          <CheckCircle2 className="w-5 h-5 text-afrodita-leaf" />
        ) : (
          <Circle className="w-5 h-5 text-stone-300" />
        )}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">
          Tu tarea de hoy
        </p>
        <p className={['text-sm leading-relaxed', done ? 'line-through text-stone-400' : 'text-stone-700'].join(' ')}>
          {tarea}
        </p>
        {done && (
          <p className="text-xs text-afrodita-leaf font-medium mt-1">¡Tarea completada! Toca para desmarcar.</p>
        )}
      </div>
    </button>
  )
}

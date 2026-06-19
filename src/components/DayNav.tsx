import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useChecklist } from '../hooks/useChecklist'

interface DayNavProps {
  current: number
}

export function DayNav({ current }: DayNavProps) {
  const navigate = useNavigate()
  const { isCompleted } = useChecklist()

  return (
    <nav className="no-print flex items-center justify-between gap-3 py-4">
      <button
        onClick={() => navigate(current > 1 ? `/dia/${current - 1}` : '/')}
        className="flex items-center gap-1 text-sm text-stone-500 hover:text-afrodita-rose transition-colors disabled:opacity-30"
      >
        <ChevronLeft className="w-4 h-4" />
        {current > 1 ? `Día ${current - 1}` : 'Inicio'}
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: 7 }, (_, i) => i + 1).map(n => (
          <button
            key={n}
            onClick={() => navigate(`/dia/${n}`)}
            title={`Día ${n}`}
            className={[
              'w-7 h-7 rounded-full text-xs font-semibold transition-all',
              n === current
                ? 'bg-afrodita-rose text-white scale-110 shadow-sm'
                : isCompleted(n)
                ? 'bg-afrodita-leaf text-white'
                : 'bg-afrodita-beige-dark/40 text-stone-500 hover:bg-afrodita-beige-dark/70',
            ].join(' ')}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate(current < 7 ? `/dia/${current + 1}` : '/')}
        disabled={current >= 7}
        className="flex items-center gap-1 text-sm text-stone-500 hover:text-afrodita-rose transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        {current < 7 ? `Día ${current + 1}` : 'Fin'}
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  )
}

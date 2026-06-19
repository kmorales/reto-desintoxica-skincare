import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useChecklist } from '../hooks/useChecklist'

export function Header() {
  const { total } = useChecklist()

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-afrodita-beige-dark sticky top-0 z-10 no-print">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-afrodita-rose flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-stone-700 text-sm leading-tight">
            Afrodita<br />
            <span className="font-normal text-stone-500 text-xs">Alquimia Natural</span>
          </span>
        </Link>

        {total > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-afrodita-leaf font-medium">
            <span className="w-5 h-5 rounded-full bg-afrodita-leaf text-white flex items-center justify-center text-[10px] font-bold">
              {total}
            </span>
            <span>/ 7 completados</span>
          </div>
        )}
      </div>
    </header>
  )
}

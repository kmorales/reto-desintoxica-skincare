import type { Ingrediente } from '../data/dias'

interface IngredientTableProps {
  ingredientes: Ingrediente[]
}

export function IngredientTable({ ingredientes }: IngredientTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-afrodita-beige-dark/40">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-afrodita-beige/60">
            <th className="text-left px-4 py-2.5 font-semibold text-stone-600 w-1/2">
              Como aparece en la etiqueta
            </th>
            <th className="text-left px-4 py-2.5 font-semibold text-stone-600">Lo encuentras en</th>
          </tr>
        </thead>
        <tbody>
          {ingredientes.map((ing, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-afrodita-beige/20'}>
              <td className="px-4 py-2.5 font-mono text-xs text-afrodita-rose font-semibold">
                {ing.etiqueta}
              </td>
              <td className="px-4 py-2.5 text-stone-600">{ing.encuentraEn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

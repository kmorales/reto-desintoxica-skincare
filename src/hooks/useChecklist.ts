import { useState, useCallback } from 'react'

const STORAGE_KEY = 'reto-desintoxica-checklist'

function load(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as number[])
  } catch {
    return new Set()
  }
}

function save(completed: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
}

export function useChecklist() {
  const [completed, setCompleted] = useState<Set<number>>(load)

  const toggle = useCallback((dia: number) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(dia)) {
        next.delete(dia)
      } else {
        next.add(dia)
      }
      save(next)
      return next
    })
  }, [])

  const isCompleted = useCallback((dia: number) => completed.has(dia), [completed])

  return { completed, toggle, isCompleted, total: completed.size }
}

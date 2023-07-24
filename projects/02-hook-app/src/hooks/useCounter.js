import { useState } from "react"

export function useCounter({initialCounter}) {
  const [counter, setCounter] = useState(initialCounter)

  const incrementCounter = (value = 1) => setCounter(counter + value)
  const resetCounter = () => setCounter(initialCounter)
  const decrementCounter = (value = 1) => setCounter(counter - value)

  return {counter, incrementCounter, resetCounter, decrementCounter}
}
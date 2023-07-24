import { useCounter } from "../hooks/useCounter"

export default function CounterWithCustomHook() {
  const { counter, incrementCounter, resetCounter, decrementCounter } = useCounter({initialCounter: 0})
  return (
    <>
      <h1>Counter with Custom Hook</h1>
      <p><strong>Value:</strong> {counter}</p>
      <div className="space"></div>
      <button onClick={() => incrementCounter(2)}>+1</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={() => decrementCounter(2)}>- 1</button>
    </>
  )
}

import { useState } from "react"

export default function CounterApp() {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  const {counter1, counter2, counter3} = counter
  return (
    <>
      <h1>CounterApp</h1>
      <p>counter1: {counter1}</p>
      <p>counter2: {counter2}</p>
      <p>counter3: {counter3}</p>

      <button onClick={() => setCounter({...counter, counter1: counter1 + 1})}>+1</button>
    </>
  )
}

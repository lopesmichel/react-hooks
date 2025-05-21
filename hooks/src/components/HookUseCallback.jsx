import {useCallback, useState} from 'react'

import List from './List'

const [counter, setCounter] = useState(0)

const getItemsFromDataBase = () => {
    return ["a", "b", "c"]
}
const HookUseCallback = () => {
  return (
    <div>
        <h2>useCallback</h2>
        <List getItems={getItemsFromDataBase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback
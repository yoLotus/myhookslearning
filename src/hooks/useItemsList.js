import { useState, useEffect, useContext } from 'react'
import Store from '../Store'

const useItemsList = () => {
  const store = useContext(Store)
  const [items, setItems] = useState(store.items)

  useEffect(() => {
    new Promise(resolve => {
      return setTimeout(
        () =>
          resolve([
            { id: 1, name: 'Jean', age: 28, hobby: '🥊' },
            { id: 2, name: 'Romain', age: 32, hobby: '🥊' },
            { id: 3, name: 'Marie', age: 31, hobby: '🥊' },
            { id: 4, name: 'Françoise', age: 33, hobby: '🥊' },
            { id: 5, name: 'Henry', age: 38, hobby: '🥊' }
          ]),
        800
      )
    }).then(results => setItems(results))
  }, [])

  return items
}

export default useItemsList

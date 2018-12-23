import React, { useContext } from 'react'
import ItemAdder from './item-adder.jsx'
import ItemsList from './items-list.jsx'
import SelectedItem from './selected-item.jsx'
import Store from '../Store'

export default () => {
  const { items, currentIndex } = useContext(Store)
  return (
    <div className="container">
      <ItemAdder />
      <ItemsList />
      <SelectedItem {...items[currentIndex]} />
    </div>
  )
}

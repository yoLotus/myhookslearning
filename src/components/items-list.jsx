import React, { useContext } from 'react'
import Item from './item.jsx'
import Store from '../Store'

export default () => {
  const { items } = useContext(Store)
  return (
    <div className="list">
      {items.map((item, index) => (
        <Item key={index} index={index} {...item} />
      ))}
    </div>
  )
}

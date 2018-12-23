import Store from '../Store'
import React, { useContext } from 'react'

export default ({ id, index, name, age, hobby }) => {
  const store = useContext(Store)

  return (
    <div
      className={`item ${store.currentIndex === index ? 'selected' : ''}`}
      onClick={() => store.setCurrentIndex(index)}
    >
      <span>
        <strong>Name:</strong>
        {name}
      </span>
      ,
      <span>
        <strong>Age:</strong>
        {age}
      </span>
      ,
      <span>
        <strong>Hobby:</strong>
        {hobby}
      </span>
    </div>
  )
}

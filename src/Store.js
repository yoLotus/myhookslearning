import React from 'react'

const Store = React.createContext({
  items: [],
  currentIndex: -1,
  setCurrentIndex: () => {}
})

export default Store

import React, { useState } from 'react'
import './App.scss'
import Dashboard from './components/dashboard.jsx'
import useItemsList from './hooks/useItemsList'

import Store from './Store'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(-1)

  return (
    <Store.Provider
      value={{
        items: useItemsList(),
        currentIndex,
        setCurrentIndex
      }}
    >
      <Dashboard />
    </Store.Provider>
  )
}

export default App

import React from 'react'
import  Router from './Router'
import Provider from './context/Provider'

const App = () => {
  return (
    <>
    <Provider>
        <Router/>
    </Provider>    
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

export default () => {
  const el = document.querySelector('#marketing_root')

  return(
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp />
        </div>
      </BrowserRouter>
    )
  } 
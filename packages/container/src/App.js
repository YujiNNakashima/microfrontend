import React from 'react'
import MarketingApp from './components/MarketingApp'

export default () => {
  const el = document.querySelector('#marketing_root')

  return(
      <>
      <h1>Hi!</h1>
      <hr/>
      <MarketingApp></MarketingApp>
      </>
    )
} 
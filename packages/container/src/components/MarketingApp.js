import { mount as MarketingApp} from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { mount } from '../../../marketing/src/bootstrap'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({pathname: nextPathname }) => {
        const { pathname } = history.location
        if(pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })
  })

  return <div ref={ref}></div>
}
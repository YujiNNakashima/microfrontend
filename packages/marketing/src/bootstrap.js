import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory } from 'history'
import { useHistory } from 'react-router-dom'
 

const mount = (el, {onNavigate}) => {
  // memory history
  const history = createMemoryHistory();

  if(onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history}/>, el)

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = useHistory()
      
      if(pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if(devRoot) {
    mount(devRoot, {})
  }
}


export { mount }
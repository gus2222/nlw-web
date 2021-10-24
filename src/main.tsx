import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { AuthProvider } from './contexts/auth'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    {/* todos os componentes terão acesso a authprovider pois o app está dentro dele */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

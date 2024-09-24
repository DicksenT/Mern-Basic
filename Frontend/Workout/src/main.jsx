import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import the provider function to wrap
import { WorkoutContextProvider } from './context/WorkoutContext.jsx'


//then wrap App with function we import which automatically make App the childern
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </StrictMode>,
)

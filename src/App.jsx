import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calendar'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago</h1>

      <h2>Welcome to Chicago, Tunji! Check out our calendar to get to know the city and see all the sights during yout stay</h2>

      <Calendar/>

    </div>
  )
}
export default App

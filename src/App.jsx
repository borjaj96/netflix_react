import { useState } from 'react'
import './App.css'
import './assets/css/main.css'
import { Header } from './components/Header'
import { Popular } from './components/Popular'
import { PopularSeries } from './components/PopularSeries'
import { PopularPelis } from './components/PopularPelis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>

      <Header />

      <main className="layout__main" >
        <div className="main__sections">
          <Popular />
          <PopularSeries />
          <PopularPelis />
        </div>
      </main>
      
    </div>
  )
}

export default App

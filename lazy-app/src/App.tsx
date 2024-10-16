import { lazy, Suspense } from 'react'
import './App.css'
// import Comp01 from './components/Comp01'
// import Comp02 from './components/Comp02'
const Comp01 = lazy(() => import('./components/Comp01'))
const Comp02 = lazy(() => import('./components/Comp02'))
function App() {

  return (
    <>
      <Suspense fallback={<p>loading Comp01...</p>}>
        <Comp01 />
      </Suspense>
      <Suspense fallback={<p>loading Comp02...</p>}>
        <Comp02 />
      </Suspense>    
    </>
  )
}

export default App

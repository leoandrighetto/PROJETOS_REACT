import './App.css'
import JogoVinteUm from './JogoVinteUm'

import { verso, listaCartas } from './assets/Deck'

function App() {

  return (
    <>
      <JogoVinteUm tentativas={4} verso={verso} listaCartas={listaCartas}/>

    </>
  )
}

export default App

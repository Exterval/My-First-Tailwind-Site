
import './App.css'
import Wrapper from './components/Wrapper'
import NavBar from './components/NavBar'
import Main from './sections/Main'
import Footer from './components/Footer'
import About from './sections/About'

function App() {
 
  return (
    <Wrapper>
      <NavBar />
      <Main />
      <About />
      <Footer />
    </Wrapper>
  )
}

export default App

import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title='Card 1' description='Info about how to how'/>
      <Card title='Card 2' description='Gian hai aap'/>
      <Card title='Card 3' description='Bakri hai aap'/>
      <Card title='Card 4' description='Is Modi Dikhthator'/>
      </div>
      

      <Footer />
    </>
  )
}

export default App

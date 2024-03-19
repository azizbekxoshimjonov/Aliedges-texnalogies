import './App.scss';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='App' >
   
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    <Footer/>
         
        </div> 
        
     
    
  )
}
export default App;
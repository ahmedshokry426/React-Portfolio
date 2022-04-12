import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Error from './Error.js'
import Navbar from './Navbar.js'
import Product from './Product.js'

function App() {
  return (
    <div className='container text-center' >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products/:id' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
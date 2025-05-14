import {BrowserRouter, Routes, Route} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

//Componentes
import Menu from './componentes/Menu.js';

//Paginas
import Home from './paginas/Home.js';
import ListaCategoria from './paginas/ListaCategoria.js';
import FormaCategoria from './paginas/FormaCategoria.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/categorias' element={<ListaCategoria />}></Route>
          <Route path='/cadastracategoria' element={<FormaCategoria />}></Route>
          <Route path='/cadastracategoria/:id' element={<FormaCategoria />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

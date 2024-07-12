import { Route, Routes } from 'react-router-dom';

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregator';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormPromocao from './views/promocao/FormPromocao';
import ListPromocao from './views/promocao/ListPromocao';

function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='list-cliente' element={<ListCliente/>}/>
        <Route path='list-produto' element={<ListProduto/>}/>
        <Route path='list-entregador' element={<ListEntregador/>}/>
        <Route path='list-promocao' element={<ListPromocao/>}/>
        <Route path='form-cliente' element={<FormCliente/>}/>
        <Route path='form-produto' element={<FormProduto/>}/>
        <Route path='form-promocao' element={<FormPromocao/>}/>
        <Route path='form-entregador' element={<FormEntregador/>}/>
      </Routes>
    </>
  );
}

export default Rotas;

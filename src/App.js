import React from 'react';

import OfficeDesk from './ParentComponent.js';
import Table from './Table.js';
import Laptop from './Laptop';
import Mobile from './Mobile';
import Bottle from './Bottle';
import Ball from './Ball';
import Book from './Book';
import { render } from "react-dom";
import {
  
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
    
return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<OfficeDesk />} />
      <Route path="Table" element={<Table />} />
      <Route path="Laptop" element = {<Laptop/>}/>
      <Route path="Mobile" element ={<Mobile/>}/>
      <Route path="Bottle" element ={<Bottle/>}/>
      <Route path="Ball" element ={<Ball/>}/>
      <Route path="Book" element ={<Book/>}/>
    </Routes>
  </BrowserRouter>
    )
}
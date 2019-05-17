import React from 'react';
import Form from './Form.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import Footer from './Footer';

function App() {
  return (
    <div className="fundo">
    <div className="container">
    <Form/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;

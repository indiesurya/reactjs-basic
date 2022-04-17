import React from 'react';
import Header from './Header';
import Navbar from './Navbar'

// jika menggunakan function component
// import {Navbar} from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Hello World!</h2>
    </div>
  );
}

//sebelum dilakukan import harus lakukan export
export default App;

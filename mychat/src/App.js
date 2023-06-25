import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Image from './Components/Image';

const App = () => {
  
  return (
    <div>
     <Routes>
      <Route path={"/"} element={<Image></Image>}></Route>
     
     </Routes>
    </div>
  );
};

export default App;


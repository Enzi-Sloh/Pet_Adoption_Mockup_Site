import React from 'react';
import './index.css';
import { Router } from '@reach/router';   
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import AddPet from './views/AddPet';
function App() {
  return (
    <div className="App">
      <Router>                            
        <Main path="/"></Main>
        <AddPet path ="/pet/new"/>
        <Detail path="/pet/:id" />
        <Update path="/pet/:id/edit"/>
      </Router>                           
    </div>
  );
}
export default App;
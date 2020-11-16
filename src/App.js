import React from 'react';
import List from './components/List';
import ListContextProvider from './contexts/ListContext';


function App() {
  return (
    <div>
      <ListContextProvider>
         <List/>
      </ListContextProvider>
    </div>
  );
}

export default App;

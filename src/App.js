import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Master from './components/Partial/Master';
import Header from './components/Layout/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Header/>
       <Routes>
         <Route exact path="/" element={<Master/>} />            
         <Route exact path="*" element={<Master/>} />
         <Route exact path="dashboard" element={<Dashboard/>} />
       </Routes>
    </Router>
    
  );
}

export default App;

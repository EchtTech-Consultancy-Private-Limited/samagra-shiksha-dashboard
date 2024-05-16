import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Master from './components/Partial/Master';
import Header from './components/Layout/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Ecce from './pages/ECCE/Ecce';
import Ecce_details from './pages/ECCE/Ecce_details';

function App() {
  return (
    <Router>
      <Header/>
       <Routes>
         <Route exact path="/" element={<Master/>} />            
         <Route exact path="*" element={<Master/>} />
         <Route exact path="dashboard" element={<Dashboard/>} />
         <Route exact path="ecce" element={<Ecce/>} />
         <Route exact path="ecce_details" element={<Ecce_details/>} />
       </Routes>
    </Router>
    
  );
}

export default App;

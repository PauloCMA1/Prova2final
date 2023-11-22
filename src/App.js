
import './App.css';
import './Header';
import Header from './Header';
import Carrosel from './Carrosel'
import { Outlet } from 'react-router-dom';
import Rodape from './Rodape';
function App(){


  return(
    <div className="App">
          
      <Header></Header>
      <Carrosel></Carrosel>
      <Outlet></Outlet>
      <Rodape></Rodape>
    
    
    </div>  
  );
  
}
export default App;

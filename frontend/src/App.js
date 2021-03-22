import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom' 
import{ useState} from'react'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop';
import Sidedrawer from './Components/Sidedrawer';

function App() {
  const [sideToggle,setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <Sidedrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/products/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </Router>
    
  );
}

export default App;

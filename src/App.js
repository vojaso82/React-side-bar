import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'


function App() {
  return (
    <>
    <Router>
      <SideBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/products' exact component={Products} />
      </Switch>

    </Router>
    </>
  );
}

export default App;

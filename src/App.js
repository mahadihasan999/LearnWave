
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCourse from './components/AllCourse/AllCourse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Resources from './components/Resources/Resources';


function App() {

  return (

    <Router>
      <Header></Header>
      <Switch>

        <Route exact path="/courses">
          <AllCourse></AllCourse>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/resources">
          <Resources></Resources>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;

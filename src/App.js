
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCourse from './components/AllCourse/AllCourse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Resources from './components/Resources/Resources';
import React, { createContext } from 'react';



export const TextContext = createContext('')

function App() {

  //create dynamic text
  const discoutText = "Click Here Get 60% discount"
  return (
    <Router>
      <Header></Header>
      <Switch>
        {/* Use Contex Api */}
        {/* <TextContext.Provider value={discoutText}> */}
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
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
        {/* </TextContext.Provider> */}
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

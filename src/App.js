import './App.css';
import {Navbar,About,Contact,Header,Footer,Main,Error} from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    //implementing routing for the pages
    <Router>

      <div className='bg-black w-full flex flex-col items-center'>

        <Navbar />
        
        <Switch>

          <Route exact path='/'>
            <Header />
            <Main />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
          
          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route path='/'>
            <Error />
          </Route>

        </Switch>

        <Footer />

      </div>

    </Router>
  );
}

export default App;

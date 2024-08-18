import Navbar from './components/Navbar'
import Home from './components/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './components/create.js';
import BlogDetails from './components/BlogDetails.js';
import NotFound from './components/NotFound.js';
// import Learn from './components/learn'

function App() {

  return (
    <Router>
    <div className="App">   
    <Navbar />  
    {/* Navbar will always be shown as it is not inside route */}
      <div className="content">
         
       <Switch>
        {/* Only one component comes out */}
        <Route exact path="/">  
         {/* Since it is inside router.and to avoid it add exact */}
             {/* <Learn /> */}
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

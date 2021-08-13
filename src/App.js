import BookStoreHome from './component/bookStore-home/bookStore-home';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <BookStoreHome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorites from './pages/favorites/Favorites';
import Search from './pages/search/Search';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="section">
        <div className="container is-max-desktop">
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

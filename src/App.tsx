import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorites from './pages/favorites/Favorites';
import Search from './pages/search/Search';

function App() {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
}

export default App;

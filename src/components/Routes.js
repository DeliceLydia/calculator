import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import App from './App';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;

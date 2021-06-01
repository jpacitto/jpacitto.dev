import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import LoadingScreen from './pages/LoadingScreen';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={About} />

          <Route exact path="/projects" component={Projects} />

          <Route exact path="/blog" component={Blog} />

          <Route render={() => <Redirect to="/"/>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/Home"
import Book from './pages/Book';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Assessment from './pages/Assessment';
import Page404 from './pages/Page404';
import { routes } from './pages/routes';

const  App =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.homePage} exact component={Home} />
        <Route path={routes.bookPage} exact component={Book} />
        <Route path={routes.registerPage} exact component={Register} />
        <Route path={routes.signinPage} exact component={SignIn} />
        <Route path={routes.assessmentPage} exact component={Assessment} />
        <Route path={routes.page404} exact component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

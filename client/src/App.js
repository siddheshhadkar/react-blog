import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Blogs from "./components/blog/Blogs";
import CreateBlog from "./components/blog/CreateBlog";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogInState = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const loggedInComponent = (
    <Switch>
      <Route path="/" exact component={Blogs} />
      <Route path="/create-blog" exact component={CreateBlog} />
      <Route path="/blog/:id" exact component={Blog} />
      <Redirect to="/" />
    </Switch>
  );

  const loggedOutComponent = (
    <Switch>
      <Route
        path="/login"
        exact
        render={() => <LoginForm toggleLogInState={toggleLogInState} />}
      />
      <Route
        path="/register"
        exact
        render={() => <RegisterForm toggleLogInState={toggleLogInState} />}
      />
      <Redirect to="/login" />
    </Switch>
  );

  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} toggleLogInState={toggleLogInState} />
        <div className="container mt-4">
          {isLoggedIn ? loggedInComponent : loggedOutComponent}
        </div>
      </BrowserRouter>
    </div>
  );
}

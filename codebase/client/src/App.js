import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context/UserContext";

import ErrorBoundary from "./helper/Error";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Blogs from "./components/blog/Blogs";
import CreateBlog from "./components/blog/CreateBlog";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";

export default function App() {
  const context = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(context);

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
      <Route path="/login" exact component={LoginForm} />
      <Route path="/register" exact component={RegisterForm} />
      <Redirect to="/login" />
    </Switch>
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container mt-4">
          <ErrorBoundary>
            {context ? loggedInComponent : loggedOutComponent}
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </div>
  );
}

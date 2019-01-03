import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import Posts from './containers/Blog/Posts/Posts';
//import NewPost from './containers/Blog/NewPost/NewPost';
import FullPost from './containers/Blog/FullPost/FullPost';

import asyncComponent from './hoc/asyncComponent';
/*const AsyncNewPost = asyncComponent(() => {
  return import('./containers/Blog/NewPost/NewPost');
});*/
const AsyncNewPost = React.lazy(() => import('./containers/Blog/NewPost/NewPost'));

class App extends Component {

  state = {
    auth: true
  }

  render () {
    return (
      <BrowserRouter basename="/">
      {/**basename to set the base url (i.e. my-url.com/myapp -> if the app is not on the root my-url.com/) */}
        <div className="App">
          <Blog />

          <Switch>
            {this.state.auth ? <Route path="/new-post"  render={() => <Suspense fallback={<div>Loading...</div>}><AsyncNewPost/></Suspense>} />: null}
            <Route path="/posts"  component={Posts} />

            {/* <Redirect from="/" to="/posts" /> */}

            {/** 404 -> just leave out path */}
            <Route render={() => {return <h1>404 - Not found!</h1>}} />
            <Route path="/"  component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

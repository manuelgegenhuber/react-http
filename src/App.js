import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import Posts from './containers/Blog/Posts/Posts';
import NewPost from './containers/Blog/NewPost/NewPost';
import FullPost from './containers/Blog/FullPost/FullPost';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
          <Route path="/" exact component={Posts} />
          <Switch>
            <Route path="/new-post"  component={NewPost} />
            <Route path="/:id" exact component={FullPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

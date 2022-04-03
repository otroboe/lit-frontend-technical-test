import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import client from './apollo';
import { Header } from './components/layout';
import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
  return (
    <ApolloProvider client={client}>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <>
            <Header
              navigation={[
                { label: 'Home', path: '/' },
                { label: 'Categories', path: '/categories' },
              ]}
            />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/categories">
                <Category />
              </Route>
              <Route exact path="/post/:id">
                <Post />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      </DndProvider>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';

import States from './states';
import UnionT from './uniont';
import NavBar from './navbar';
import Spotter from './spotter';

function App() {

  return (
    <div fullWidth>
      <NavBar />
      <Route exact path="/" component={States} />
      <Route exact path="/" component={UnionT} />
      <Route path="/spotter" component={Spotter} />
    </div>
  );
}

export default App;

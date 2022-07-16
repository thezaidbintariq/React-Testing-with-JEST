
import './App.css';
import Greeeting from './components/Greeting';
import Async from './components/Async';
import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      <Greeeting />
      <Async />
    </Fragment>
  );
}

export default App;

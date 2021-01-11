import React, { useState } from 'react';
import './App.css';

// ContextApi Counter Files
import Headercontext from './contextapi/components/Header/header';
import Middlecontext from './contextapi/components/Middle/middle';
import Footercontext from './contextapi/components/footer/footer';
import CounterContext from './contextapi/config/contextapi';

// Reducer Conter Files 
import Headerreducer from './reducer/components/Header/header'
import Middlereducer from './reducer/components/Middle/middle'
import Footerreducer from './reducer/components/footer/footer'
// import Reducer from './reducer/config/reducer'


function App() {
  let counterr = useState(1)
  return (

    <div className="App">
      <CounterContext.Provider value={counterr}>
        <div className="contextapi">
          <Headercontext />
          <Middlecontext />
          <Footercontext />
        </div>
      </CounterContext.Provider>

      <hr />
      <hr />


      <div className="reducer">
        <Headerreducer />
        <Middlereducer />
        <Footerreducer />
      </div>

    </div>

  );
}

export default App;

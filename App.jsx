import React from 'react';
import ReactDOM from 'react-dom';
var CurrentTime = require('./CurrentTime.jsx');



class App extends React.Component {
   render() {
      return (
         <div>
           <CurrentTime />
         </div>
      );
   }
}

  


export default App;
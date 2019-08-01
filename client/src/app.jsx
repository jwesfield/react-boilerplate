import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx';

 class App extends React.Component {
  render(){
      return(
      <div><HelloWorld /></div>
      );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

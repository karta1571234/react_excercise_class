import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   render() {
      return(
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
            <p>This is class</p>
         </div>
      );
   }
}
 
export default App;
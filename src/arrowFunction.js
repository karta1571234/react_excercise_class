import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <Header/>
        <Content/>
    </div>
);
const Header = () => (
    <div>
      <h1>Header</h1>
    </div>
);
const Content = () => (
    <div>
      <h2>Content</h2>
      <p>The content text!!!</p>
      <p>This is arrowFunction</p>
    </div>
);
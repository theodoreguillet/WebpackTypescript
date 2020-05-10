import * as React from 'react';
import { hot } from 'react-hot-loader';
import reactLogo from '@assets/1200px-React-icon.svg.png';

const AppImpl = () => (
  <div>
    <h1>React Typescript Webpack</h1>
    <img height={400} src={reactLogo}></img>
  </div>
);

export const App = hot(module)(AppImpl);

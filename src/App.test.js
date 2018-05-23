import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should do nothing...', () => {
  expect(2).to.equal(2)

})
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fails hard', () => {
  expect(2).to.equal(2)

})
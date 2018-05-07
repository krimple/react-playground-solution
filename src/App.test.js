import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Faker from 'faker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('fakes things', () => {
  const faker = new Faker();
  const address = faker.address();
  expect(address).toBeDefined();
  console.log(address);
});

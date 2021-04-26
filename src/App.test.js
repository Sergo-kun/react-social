import React from 'react'
import ReactDOM from 'react-dom'
import AppReactSamurai from "./App";

it('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppReactSamurai />, div);
  ReactDOM.unmountComponentAtNode(div)
});

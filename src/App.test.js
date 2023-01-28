import { render, screen } from '@testing-library/react';
import { createElement } from 'react';
import App from './App';


// it('renders without crashing', () => {
//   const div = document-createElement('dev');
//   ReactDOM.render(<App />, div);
//   expect(div.innerHTML).toContain('Hi there!');
//   ReactDOM.unmountComponentAtNode(div);
// })
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

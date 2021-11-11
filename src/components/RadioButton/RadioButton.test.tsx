import { render } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders the component', () => {
  expect(render(<RadioButton value onChange={() => {}} />)).toBeTruthy();
});

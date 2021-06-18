import renderer from 'react-test-renderer';
import Display from '../components/Display';

test('renders correctly', () => {
  const tree = renderer
    .create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});

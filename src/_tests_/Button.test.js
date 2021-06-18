import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('renders correctly', () => {
  const handleClick = () => { ''; };
  const tree = renderer
    .create(<Button clickHandler={handleClick} ButtonClass="btn" name="" />).toJSON();
  expect(tree).toMatchSnapshot();
});

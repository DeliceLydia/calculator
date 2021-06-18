import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

test('renders correctly', () => {
  const handleClick = () => { ''; };
  const tree = renderer
    .create(<ButtonPanel clickHandler={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});

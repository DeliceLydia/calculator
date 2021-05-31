import PropTypes from 'prop-types';

const Display = ({value}) => (
  {value}
);

Display.PropTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
}

export default Display;

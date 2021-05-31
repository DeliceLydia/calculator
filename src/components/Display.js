import PropTypes from 'prop-types';

const Display = ({value}) => (
  <div>
  {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: '0',
}

export default Display;

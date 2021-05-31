import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button" className="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

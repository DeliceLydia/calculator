import PropTypes from 'prop-types';

const Button = ({name}) => {
  return (
    <button>
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;

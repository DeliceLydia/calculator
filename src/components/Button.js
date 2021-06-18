import PropTypes from 'prop-types';

const Button = ({ name, clickHandler, ButtonClass }) => {
  const handleClick = () => clickHandler(name);
  return (
    <button type="button" onClick={handleClick} className={ButtonClass}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  ButtonClass: PropTypes.string.isRequired,
};

export default Button;

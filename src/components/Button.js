import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Button = ({ name, clickHandler }) => {
  const handleClick = () => clickHandler(name);
  const getClass = (name) => {
    switch (name) {
      case '0':
        return 'Button zero';
      case '+':
      case '-':
      case 'X':
      case '÷':
      case '=':
        return 'Button operator';
      default:
        return 'Button';
    }
  };
  return (
    <button type="button" onClick={handleClick} className={getClass(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

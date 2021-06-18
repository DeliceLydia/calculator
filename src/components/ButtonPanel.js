import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div className="button-list">
      <div className="groupClass">
        <Button name="AC" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="+/-" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="%" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="/" ButtonClass="btn operation" clickHandler={handleClick} />
      </div>
      <div className="groupClass">
        <Button name="7" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="8" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="9" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="*" ButtonClass="btn operation" clickHandler={handleClick} />
      </div>
      <div className="groupClass">
        <Button name="4" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="5" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="6" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="-" ButtonClass="btn operation" clickHandler={handleClick} />
      </div>
      <div className="groupClass">
        <Button name="1" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="2" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="3" ButtonClass="btn" clickHandler={handleClick} />
        <Button name="+" ButtonClass="btn operation" clickHandler={handleClick} />
      </div>
      <div className="groupClass">
        <Button name="0" ButtonClass="btn zero" clickHandler={handleClick} />
        <Button name="." ButtonClass="btn" clickHandler={handleClick} />
        <Button name="=" ButtonClass="btn operation" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

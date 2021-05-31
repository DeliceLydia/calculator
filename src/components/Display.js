import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div className="display-board">
        <h1 className="value">{this.props.value}</h1>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;

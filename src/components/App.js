import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="component-app">
        <>
          <Display result={next || total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;

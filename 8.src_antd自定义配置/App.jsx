import React, { Component } from 'react'

import { Button, Slider } from 'antd';


export class App extends Component {

  state = {
    disabled: false,
  };
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Slider defaultValue={30} disabled={disabled} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import '../styles/index.css';

class IfComponent extends Component {
  render() {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" >
        {this.props.name}
      </button>
    );
  }
}

export default IfComponent;

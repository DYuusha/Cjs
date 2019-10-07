import React, { Component } from 'react';
import '../../styles/index.css';
export default class OperatorComponent extends Component {
  render() {
    return (
      <div className="flex w-1/3 justify-center items-center h-16 bg-gray-100 border-r border-t cursor-pointer">
          <p className="font-bold text-center">{this.props.name}</p>
      </div>
    );
  }
}

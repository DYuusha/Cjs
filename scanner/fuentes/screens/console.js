import React, { Component } from 'react';
import '../styles/index.css';
export default class Console extends Component {

  getParamFile = () => {

  }

  getValues = () => {
    var inputLine = document.getElementById("max_line").value;
    var inputDigit = document.getElementById("max_digit").value;
    var inputId = document.getElementById("max_id").value;

    var paramString = '';

    paramString = 'MAX_LINEA;' + inputLine + '\r\nMAX_DIGIT;' + inputDigit + '\r\nMAX_ID;' + inputId;


    var FileSaver = require('file-saver');
    var blob = new Blob([paramString], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "params.txt");

  }

  render() {
    return (
      <div className='flex flex-col items-between justify-between w-1/4'>

        <div id='generatedCode' className="flex "> int </div>
        <div id='properties' className='flex flex-col items-center justify-center p-5 w-full '>

          <div className='flex justify-between w-full'>

            <label>MAXLINEA:  </label> <input type="number" id="max_line" min="1" max="" placeholder='MAXLINEA' />
          </div><div className='flex justify-between w-full'>

            <label>MAXDIGIT:  </label> <input type="number" id="max_digit" min="1" max="" placeholder='MAXDIGIT' />
          </div>
          <div className='flex justify-between w-full mb-4'>

            <label>MAXID:  </label> <input type="number" id="max_id" min="1" max="" placeholder='MAXID' />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.getValues()}>Descargar Ajustes</button>
        </div>
      </div>

    );
  }
}

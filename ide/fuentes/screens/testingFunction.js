import React from 'react';
import { saveAs } from 'file-saver';

import '../styles/index.css';
var flujo = [];
export default class Functions extends React.Component {
    componentDidMount() {
        flujo.push({ nombre: 'inicio', tipo: 'control' })
        flujo.push({ nombre: 'fin', tipo: 'control' })
        console.log(flujo);
    }

    getInstruction = (option) => {
        console.log("La opcion es " + option)
        switch (option) {
            case 1:
                flujo.splice(flujo.length - 1, 0, { nombre: 'ifelse', tipo: 'condicional', errores: [], valor: 'i<=0' });
                break;
            case 2:
                flujo.splice(flujo.length - 1, 0, { nombre: 'entrada', tipo: 'scanner', errores: [], valor: 'crack' });
                break;
            case 3:
                flujo.splice(flujo.length - 1, 0, { nombre: 'igual', tipo: 'asignacion', errores: [], valor: 'i=20' });
                break;
            case 4:
                flujo.splice(flujo.length - 1, 0, { nombre: 'print', tipo: 'salida', errores: [], valor: 'Hola mundo' });
                break;
            default:
                break;
        }
        console.log(flujo);

    }

    transformCode = () => {
        var codigo = "";
        for (let index = 0; index < flujo.length; index++) {
            if (index === 0) {
                codigo += 'Begin\r\n'
            }
            else if (index === flujo.length - 1) {
                codigo += 'End.'
            }
            else {
                switch (flujo[index].nombre) {
                    case 'ifelse':
                        codigo += 'if(i<=0){ \r\n}\r\n'
                        break;
                    case 'print':
                        codigo += 'cjprint("Hola mundo")\r\n'
                        break;
                    case 'asignacion':
                        codigo += 'var a=2\r\n'
                        break;
                    default:
                        break;
                }

            }

        }
        var FileSaver = require('file-saver');
        var blob = new Blob([codigo], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "cjscode.txt");
    }

    render() {
        //rendering ExampleComponent component in App Component
        return (
            <div className="w-2/4 bg-gray-600 flex flex-col justify-center h-auto items-center">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.getInstruction(1)}>
                    if/else
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.getInstruction(2)}>
                    entrada
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.getInstruction(3)}>
                    asignacion
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.getInstruction(4)}>
                    salida
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" onClick={() => this.transformCode()}>
                    Transformar
                </button> */}
                {this.props.components.map(
                            component=> (
                                <React.Fragment>
                                    {component}
                                </React.Fragment>
                                
                            )
                        )}
                { /*<input type="file" id="files" name="files[]" multiple />*/}
            </div>
        );
    }
}

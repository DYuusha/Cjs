import React, { Component } from 'react';
import Console from './console';
import Aside from './aside';
import Functions from './testingFunction';
import IfComponent from '../components/if';
import '../styles/mainstyles.css';
class Controller extends Component {
    state = {
        operators: [
            { id: 1, name: '+' },
            { id: 2, name: '-' },
            { id: 3, name: '*' },
            { id: 4, name: '/' },
            { id: 5, name: ':=' },
            { id: 6, name: '==' }
        ],
        mathematicFunctions: [
            { id: 1, name: 'Raiz', tipo:'int' },
            { id: 2, name: 'Absoluto', tipo:'int' },
            { id: 3, name: 'Logaritmo', tipo:'float' },
            { id: 4, name: 'Seno',tipo:'float' },
            { id: 5, name: 'Coseno',tipo:'float' },
            { id: 6, name: 'Tangente',tipo:'float' },
            { id: 7, name: 'Seno Inverso',tipo:'float' },
            { id: 8, name: 'Coseno Inverso',tipo:'float' },
            { id: 9, name: 'Tangente Inverso',tipo:'float' },
            { id: 10, name: 'Floor',tipo:'float' },
            { id: 11, name: 'Ceiling',tipo:'float' },
            { id: 12, name: 'Round',tipo:'float' },
        ],
        textFunctions: [
            { id: 1, name: 'Length', tipo:'String' },
            { id: 2, name: 'Split', tipo:'String' },
            { id: 3, name: 'Concatenate', tipo:'String' },
            { id: 4, name: 'Substring',tipo:'String' },
        ],
        arrayFunctions: [
            { id: 1, name: 'Size', tipo:'Array' },
            { id: 2, name: 'Split', tipo:'Array' },
        ],
        arrayComponents:[<IfComponent name={'if'}/>,<IfComponent name={'if'}/>]
    
    }
    render() {
        const {operators,mathematicFunctions,textFunctions ,arrayFunctions, arrayComponents}= this.state;
        return (
            <div className="flex flex-wrap flex-row w-full h-screen">
                <Aside
                    operators={operators}
                    mathematicFunctions={mathematicFunctions}
                    textFunctions={textFunctions}
                    arrayFunctions={arrayFunctions}
                />
                <Functions 
                components={arrayComponents}
                />
                <Console />
            </div>
        );
    }
}

export default Controller;

import React, { Component } from 'react';
import VariableComponent from './operators';
import '../styles/index.css';
export default class Aside extends Component {
    render() {
        const { operators, mathematicFunctions, textFunctions, arrayFunctions } = this.props;
        return (
            <div className="flex flex-col w-1/4 h-auto ">
                <div className="flex flex-col h-auto bg-blue-500 ">
                    <div className="flex w-full items-center justify-center p-4">
                        <h2 className="font-bold">Operators</h2>
                    </div>
                    <div className="flex flex-wrap w-full">
                        {operators.map(
                            operator => (
                                <VariableComponent
                                    key={operator.id}
                                    name={operator.name}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col h-auto bg-blue-500">
                    <div className="flex w-full items-center justify-center p-4">
                        <h2 className="font-bold">Mathematic Functions</h2>
                    </div>
                    <div className="flex flex-wrap w-full">
                        {mathematicFunctions.map(
                            functionM => (
                                <VariableComponent
                                    key={functionM.id}
                                    name={functionM.name}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col h-auto bg-blue-500">
                    <div className="flex w-full items-center justify-center p-4">
                        <h2 className="font-bold">Text Functions</h2>
                    </div>
                    <div className="flex flex-wrap w-full">
                        {textFunctions.map(
                            functionT => (
                                <VariableComponent
                                    key={functionT.id}
                                    name={functionT.name}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col h-auto bg-blue-500">
                    <div className="flex w-full items-center justify-center p-4">
                        <h2 className="font-bold">Mathematic Functions</h2>
                    </div>
                    <div className="flex flex-wrap w-full">
                        {arrayFunctions.map(
                            functionA => (
                                <VariableComponent
                                    key={functionA.id}
                                    name={functionA.name}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

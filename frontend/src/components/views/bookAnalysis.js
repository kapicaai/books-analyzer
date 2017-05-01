/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {RadialChart} from 'react-vis';
import {DiscreteColorLegend} from 'react-vis';
import '../../../public/styles/style.css';
import '../../../node_modules/react-vis/dist/style.css';
import {PartsOfSpeechDiagram} from '../views/analysis/PartsOfSpeechDiagram'

class BookAnalysis extends React.Component {    
    render() {
        var analysis = this.props.analysis;
        if(!analysis)
            analysis = {};
        return (
            <div className="book-analysis">
                <h2>Book analysis</h2>
                <PartsOfSpeechDiagram partsOfSpeech={analysis.partsOfSpeech}/>
            </div>
        );
    }
}



export { BookAnalysis };
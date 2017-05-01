import React from 'react';
import {RadialChart} from 'react-vis';
import {DiscreteColorLegend} from 'react-vis';
import '../../../../public/styles/style.css';
import '../../../../node_modules/react-vis/dist/style.css';

class PartsOfSpeechDiagram extends React.Component {
    render() {
        var colors = ['green', 'lightblue', 'aquamarine', 'lightgreen'];
        var partOfSpeechData = Array();
        if(this.props.partsOfSpeech) {
            let partsAnalysis = this.props.partsOfSpeech;
            
            partOfSpeechData = [
                {angle: partsAnalysis['verbs'], color: colors[0]},
                {angle: partsAnalysis['nouns'], color: colors[1]},
                {angle: partsAnalysis['adjectives'], color: colors[2]},
                {angle: partsAnalysis['adverbs'], color: colors[3]}
            ];
        }        
        var items = [
            {title:'Verbs',color:colors[0]},
            {title:'Nouns',color:colors[1]},
            {title:'Adjectives',color:colors[2]},
            {title:'Adverbs',color:colors[3]}
        ];
        return (
            <div className='parts-of-speech'>
                <RadialChart 
                    colorType={'literal'}
                    showLabels={true}
                    animation={true}                   
                    innerRadius={0}
                    radius={140}
                    data={partOfSpeechData}
                    width={300}
                    height={400}
                />
                <DiscreteColorLegend
                    className='parts-of-speech-legend'
                    items={items}
                    height={300}
                    width={300}
                />
            </div>
        );
    }
}

export {PartsOfSpeechDiagram};
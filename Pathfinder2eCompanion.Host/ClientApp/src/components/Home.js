import React, { Component } from 'react';
import { AbilityScores } from './AbilityScores';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            character: {},
            loading: true
        };

        fetch('api/Character')
            .then(response => response.json())
            .then(data => {
                this.setState({ character: data, loading: false });
            });
    }

    render() {
        return (
            <div>
                <h1>Pathfinder 2e Companion</h1>
                <h2>{this.state.character.name}</h2>
                <AbilityScores {...this.state.character}></AbilityScores>
            </div>
        );
    }
}

import React, { Component } from 'react';

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
                <table>
                    <tbody>
                        <tr>
                            <th>Strength</th>
                            <td>{this.state.character.strength}</td>
                        </tr>
                        <tr>
                            <th>Dexterity</th>
                            <td>{this.state.character.dexterity}</td>
                        </tr>
                        <tr>
                            <th>Constitution</th>
                            <td>{this.state.character.constitution}</td>
                        </tr>
                        <tr>
                            <th>Intelligence</th>
                            <td>{this.state.character.intelligence}</td>
                        </tr>
                        <tr>
                            <th>Wisdom</th>
                            <td>{this.state.character.wisdom}</td>
                        </tr>
                        <tr>
                            <th>Charisma</th>
                            <td>{this.state.character.charisma}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

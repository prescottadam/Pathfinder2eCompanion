import React, { Component } from 'react';

export class AbilityScores extends Component {
    static displayName = AbilityScores.name;

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Strength</th>
                            <td>{this.props.strength}</td>
                        </tr>
                        <tr>
                            <th>Dexterity</th>
                            <td>{this.props.dexterity}</td>
                        </tr>
                        <tr>
                            <th>Constitution</th>
                            <td>{this.props.constitution}</td>
                        </tr>
                        <tr>
                            <th>Intelligence</th>
                            <td>{this.props.intelligence}</td>
                        </tr>
                        <tr>
                            <th>Wisdom</th>
                            <td>{this.props.wisdom}</td>
                        </tr>
                        <tr>
                            <th>Charisma</th>
                            <td>{this.props.charisma}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

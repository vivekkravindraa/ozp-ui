import React, { Component } from 'react'

export default class CompanyDetails extends Component {
    componentDidMount() {
        // console.log(this.props.match.params.name);
    }
    render() {
        return (
            <div>
                <p>{this.props.match.params.name}</p>
            </div>
        )
    }
}

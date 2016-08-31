import * as React from 'react';

export interface HelloProps { compiler: string, framework: string }
export interface HelloState { count: number }

export class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props: HelloProps) {
        super(props)
        this.state = { count: 1 }
        setInterval(this.tick, 1000)
    }

    tick = () => this.setState({ count: this.state.count + 1 })

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <p>You've stared at this page for {this.state.count} seconds&hellip;</p>
            </div>
        );
    }
}
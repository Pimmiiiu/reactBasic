import React from 'react'


class Hello extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState(function (prevState) {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                {/* React.Fragment or Div */}
                <h1>Hello React Class Component</h1>
                <button onClick={this.handleClick.bind(this)}>Click me to increment</button>
                <p>counter:{this.state.counter}</p>
            </React.Fragment>
        )
    }
}

export default Hello;
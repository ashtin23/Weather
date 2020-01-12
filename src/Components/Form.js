import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input placeholder="City..." name="city" type="text"></input>
                <input placeholder="Country..." name="country" type="text"></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default Form;
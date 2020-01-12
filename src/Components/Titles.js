import React from 'react';


class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Weather App</h1>
                <h3 className="title-container__subtitle">Search a city and its country to begin...</h3>
            </div>
        )
    }
}

export default Titles;
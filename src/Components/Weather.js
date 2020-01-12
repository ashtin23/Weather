import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                { 
                    this.props.city && this.props.country &&
                <p className="weather__key">
                    Location:<span className="weather__value"> { this.props.city }, { this.props.country }</span>
                </p> 
                }
                { 
                    this.props.temperature && 
                <p className="weather__key">
                    Temperature:<span className="weather__value"> { this.props.temperature } °F</span>
                </p> 
                }
                { 
                    this.props.desctiption &&
                <p className="weather__key">
                    Conditions:<span className="weather__value"> { this.props.description }</span>
                </p> 
                }
                { 
                    this.props.humidity && 
                <p className="weather__key">
                    Humidity:<span className="weather__value"> { this.props.humidity }%</span>
                </p> 
                }
                { 
                    this.props.wind && 
                <p className="weather__key">
                    Wind:<span className="weather__value"> { this.props.wind } mph</span>
                </p> 
                }
                { 
                    this.props.error && 
                <p className="weather__key">
                    <span className="weather__error">{ this.props.error }</span>
                </p>
                }
                {/* <p>Sunrise: { this.props.sunrise }</p>
                <p>Sunset: { this.props.sunset }</p> */}
            </div>
        )
    }
}

export default Weather;
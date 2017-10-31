import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: []
        }
    }

    onCommentsChanged(){
        console.log("yaaaayyyyy!");
    }

    handleSubmit(event){
        event.preventDefault();
        var url = `http://api.apixu.com/v1/current.json?key=5f1979d6812b411491d164417171806&q=${this.state.city}`

        axios.get(url)
        .then(response => {
            this.props.onSubmitSearchForm(response.data);
            this.setState({city: ''});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({city: event.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default SearchForm;
import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    
    //Declare local state
    this.state = {
      boxes: []
    }

  }
  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
  }

  onSubmitSearchForm(data) {
    if(this.search(data.location.name, this.state.boxes)){
      alert('Allready found!');
      return;
    }

    var stracture = {
      name: data.location.name,
      icon: data.current.condition.icon,
      feelslike_c: data.current.feelslike_c,
      text: data.current.condition.text,
      comments: []
    };

    this.setState(prevState => ({
      boxes: prevState
        .boxes
        .concat(stracture)
    }));
  };

  removeWeatherBox(data) {
    const newState = this.state.boxes;
    if (newState.indexOf(data) > -1) {
      newState.splice(newState.indexOf(data), 1);
      this.setState({boxes: newState})
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          boxes={this.state.boxes}
          removeWeatherBox={this.removeWeatherBox}/>
      </div>
    );
  }
}

export default App;
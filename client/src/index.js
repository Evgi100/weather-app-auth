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
      cards: []
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
    if(this.search(data.location.name, this.state.cards)){
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
      cards: prevState
        .cards
        .concat(stracture)
    }));
  };

  removeWeatherBox(data) {
    const newState = this.state.cards;
    if (newState.indexOf(data) > -1) {
      newState.splice(newState.indexOf(data), 1);
      this.setState({cards: newState})
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
          cards={this.state.cards}
          removeWeatherBox={this.removeWeatherBox}/>
      </div>
    );
  }
}

export default App;
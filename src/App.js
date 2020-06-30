import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import ReceipeList from './components/receipeList';
import recipes from './components/receipeList/mock'

class App extends React.Component {
  state = {
      recipes
  }

handleRemove = id => {
    const { recipes } = this.state;
    const recipesList = recipes.filter(recipe => recipe.id !== id);
    this.setState({
      recipes: recipesList
    })
}


  render() {
    const {recipes} = this.state;
    return (
      <div>
          <Navigation />
          <ReceipeList 
            recipes={recipes}
            handlerRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;

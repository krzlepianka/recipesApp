import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import ReceipeList from './components/receipeList';
import recipes from './components/receipeList/mock'


class App extends React.Component {
  state = {
      recipes,
      error: null,
      loading: false
  }

handleRemove = id => {
    const { recipes } = this.state;
    const recipesList = recipes.filter(recipe => recipe.id !== id);
    this.setState({
      recipes: recipesList
    })
}

handleExpand = id => {
  const { recipes } = this.state;
  const currentRecipe = recipes.find(recipe => recipe.id == id);
  currentRecipe.expand = !currentRecipe.expand;
  this.setState({
    recipes
  });
};


  render() {
    const {recipes, expand} = this.state;
    return (
      <div>
          <Navigation />
          <ReceipeList 
            recipes={recipes}
            handlerRemove={this.handleRemove}
            handleExpand={this.handleExpand}
            />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import RecipeList from "./RecipeList";
import RecipeForm from './RecipeForm';

export default class RecipeContainer extends Component {
   state = {
       recipes: []
   };

   addRecipeHandler = (r) => {
       debugger;
     this.setState({
       recipes: [...this.state.recipes, r ]
     });
   };

   render() {
      return (
          <div>
            <RecipeForm newRecipeHandler={this.addRecipeHandler} />
            <RecipeList recipes={this.state.recipes}/>
          </div>
      );
   }
}
import React, { Component } from 'react';

const Recipe = ({ recipe }) => {
    return (<p>{recipe.text}</p>)
};

export default class RecipeList extends Component {

    render() {
        const recipes = this.props.recipes.map((r,i) => <li key={i}><Recipe recipe={r}/></li>);
        return (
             <ul>
                { recipes }
              </ul>
        )
    }
}


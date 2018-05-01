import React, { Component } from 'react';
export default class RecipeForm extends Component {

    state = {
        recipeForm: this.generateEmptyRecipe()
    };

    generateEmptyRecipe() {
        return {
            title: '',
            text: '',
            author: '',
            rating: 0
        };
    };

    addRecipe = (e) => {
        // call the event callback in the parent
        this.props.newRecipeHandler({
            title: this.state.title,
            text: this.state.text,
            author: this.state.author,
            rating: this.state.rating
        });

        this.setState({recipeForm: this.generateEmptyRecipe()});
        e.preventDefault();

    };

    render() {
        return (
            <form onSubmit={ this.addRecipe }>
                <label htmlFor='titleInput'>Title</label>
                <input id="titleInput" type="text" onChange={ (e) => {
                    this.setState({ title: e.target.value });
                }}/>
                <label htmlFor='textInput'>Recipe Text</label>
                <input id="textInput" type="text" onChange={ (e) => {
                    this.setState({ text: e.target.value });
                }}/>
                 <button>Add...</button>
            </form>
        );
    }
}
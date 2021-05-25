import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {
    render () {
        const ingredients = {
            'bread-bottom': () => <div className={classes.BreadBottom}></div>,
            'bread-top': () => 
                <div className={classes.BreadTop}>
                  <div className={classes.Seeds1}></div>
                  <div className={classes.Seeds2}></div>
                </div>,
            'meat': () => <div className={classes.Meat}></div>,
            'cheese': () => <div className={classes.Cheese}></div>,
            'salad': () => <div className={classes.Salad}></div>,
            'bacon': () => <div className={classes.Bacon}></div>,
            default: () => null
        };
        return (ingredients[this.props.type] || ingredients.default)();    
    } 
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
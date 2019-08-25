import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './listItem.scss';

class listItem extends Component {
    render() {
        let quantity = this.props.data.serving_qty;
        return (
            <div className="listItem row">
                <div className="col-1">
                    <img src={this.props.data.thumb} alt={this.props.data.food_name}></img>
                </div>
                <div className="col-11">

                    <div className="itemName justify-content-between">
                        <div>{this.props.data.food_name}</div>
                        <div>{Math.floor(this.props.data.nf_calories*quantity)} cal</div>
                    </div>
    
                    <div className="itemDetail justify-content-between">
                        <p>{quantity} {this.props.data.serving_unit} ({this.props.data.serving_weight_grams*quantity} g)</p>
                        <p>{this.props.data.meal_type}</p>
                    </div>
                    <hr />
                </div>



            </div>
        );
    }
}

export default listItem

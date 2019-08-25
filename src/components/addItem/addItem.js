import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './addItem.scss';
import { connect } from 'react-redux';
import Aux from '../hoc/Aux';
import * as actionType from '../../store/action';

class addItem extends Component {
    state = {
        mealType: 'breakfast',
        cal: null,
        gram: null,
        serving: 1,
    }

    onChange = (event) => {
        this.setState({
            mealType: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            serving: event.target.value
        });
    }

    addHandler = () => {
        this.props.closeAdding();

        let cal = this.props.data.full_nutrients.find((item) => item.attr_id === 208);
        
        if( this.state.serving > 0){
            let data = {
                "nix_item_id": this.props.data.nix_item_id, 
                "food_name": this.props.data.food_name,
                "serving_unit": this.props.data.serving_unit,
                "serving_weight_grams": this.props.data.serving_weight_grams, 
                "serving_qty": this.state.serving, 
                "nf_calories": cal.value, 
                "serving_size" : this.props.data.serving_size, 
                "meal_type": this.state.mealType,
                "thumb": this.props.data.photo.thumb
            }
            this.props.addItem(data)

        }
        


    }

    render() {
        let item;
        let calories;

        if (this.props.data) {

            calories = this.props.data.full_nutrients.find((item) => item.attr_id === 208);
            item =
                <Aux>
                    <button onClick={this.props.closeAdding} className="closebtn">X</button>
                    <div className="addItemImg" >
                        <img src={this.props.data.photo.thumb} alt={this.props.data.food_name} />
                        <div>{this.props.data.food_name}</div>
                        <hr />
                    </div>

                    <div className="addItemContent" >

                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label style={{ color: 'gray' }} >Serving</label>
                                    <input style={{ background: 'lightgray' }} type="number" onChange={this.handleChange} value={this.state.serving} className="form-control" id="formGroupExampleInput" />
                                </div>
                            </div>

                            <div className="col-7" style={{ marginTop: '15px' }}>
                                <div className="justify-content-between" style={{ display: "flex" }}>
                                    <div>{Math.floor(this.props.data.serving_weight_grams * this.state.serving)}</div>
                                    <div>{Math.floor(calories.value * this.state.serving)}</div>
                                </div>

                                <div className="justify-content-between" style={{ display: "flex", color: "gray", fontSize: '15px' }}>
                                    <div>grams</div>
                                    <div>calories</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '-15px', color: 'gray' }}>{this.props.data.serving_unit}</div>


                        <hr />
                        <div>ADD TO TODAY</div>

                        <div className="mealSelect form-group">
                            <select value={this.state.mealType} onChange={this.onChange.bind(this)} className="form-control">
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                            </select>

                        </div>

                        <button onClick={this.addHandler} type="button" className="btn" style={{ float: 'right', color: 'white', background: 'purple' }} >ADD</button>
                    </div>


                </Aux>
        }

        return (
            <div className="addItem card " style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                {item}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.selectedItem,
        show: state.showAddForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeAdding: () => dispatch(actionType.CLOSE_ADD_FORM()),
        addItem: (data) => dispatch(actionType.ADD_ITEM(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addItem)

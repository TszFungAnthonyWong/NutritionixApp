import React, { PureComponent } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './searchListItem.scss';
import { connect } from 'react-redux';
import * as actionType from '../../../store/action';

class searchListItem extends PureComponent {
    click = () =>{
        this.props.selected(this.props.data);
    }
    render() {
        let hr;
        if (this.props.counter <4){
            hr = <hr />
        }
        return (
            <div>
                <div className="slContainer row">
                    <div className="imgConatiner col-1">
                        <img className="itemImg" src={this.props.data.photo.thumb} alt={this.props.data.food_name} />
                    </div>
                    <div className="itemText col-10">
                        <div onClick={this.click}>{this.props.data.food_name.length<30?this.props.data.food_name:this.props.data.food_name.slice(0,30)+"..."}</div>
                        <div className="brandName">{this.props.data.brand_name}</div>
                        {hr}
                    </div>
                </div>

            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selected: (item) => dispatch(actionType.SELECTED(item)),
    }
}

export default connect(null, mapDispatchToProps)(searchListItem)


import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './header.scss';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';
import SearchList from '../searchList/searchList';
import BackDrop from '../Backdrop/Backdrop';

import AddingBackDrop from '../Backdrop/bd/Backdrop';

import AddItem from "../addItem/addItem";

class header extends Component {
    state = {
        searching: false
    }
    seachClick = () => {
        this.setState({
            searching: true
        });
    }

    close = () => {
        this.setState({
            searching: false
        });
    }


    render() {
        let bBtn = "<";

        let day;

        if (this.props.date === 0) {
            day = <div>Today</div>
        } else if (this.props.date === -1) {
            day = <div>Yesterday</div>
        } else {
            let d = new Date();
            d.setDate(d.getDate() - 2)
            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            let formatted_date = d.getDate() + " " + months[d.getMonth()]
            day = <div>{formatted_date}</div>
        }

        return (
            <div className="header">
                <div className="container col-sm-12 col-md-7 col-lg-4">
                    <div className="searchBar input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                        </div>
                        <input onClick={() => this.seachClick()} onChange={(event) => { this.props.search(event) }} type="text" className="form-control" placeholder="Search food..." />
                    </div>
                    <SearchList show={this.state.searching} />

                    <AddItem />

                    <div className="dateControl">
                        <button disabled={this.props.date <= -2} onClick={() => this.props.back()}>{bBtn}</button>
                        <div>{day}</div>
                        <button disabled={this.props.date >= 0} onClick={() => this.props.next()}>></button>
                    </div>

                </div>
                <BackDrop show={this.state.searching} click={this.close} />
                <AddingBackDrop show={this.props.showAddForm} click={this.props.closeAdding} />
                <div onClick={this.seachClick} className="aBtn"><p>+</p></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchList: state.searchList,
        date: state.curDate,
        showAddForm: state.showAddForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: (event) => dispatch(actionType.SEARCH(event)),
        back: () => dispatch(actionType.BACK()),
        next: () => dispatch(actionType.NEXT()),
        closeAdding: () => dispatch(actionType.CLOSE_ADD_FORM())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './searchList.scss';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';
import SearchListItem from './searchListItem/searchListItem';

class searchList extends Component {
    render() {

        let commonList;
        let brandList;

        if (this.props.searchList) {
            commonList = this.props.searchList.common.slice(0, 5).map((item, key) =>
                <SearchListItem data={item} counter={key} key={key + 'c'} />
            );
        }

        if (this.props.searchList) {
            brandList = this.props.searchList.branded.slice(0, 5).map((item, key) =>
                <SearchListItem data={item} counter={key} key={key + 'b'} />
            );
        }



        return (
            <div
                className="searchList card"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>

                <div className="typeTag">COMMON</div>
                {commonList}
                <hr />
                <div className="typeTag">BRANDED</div>
                {brandList}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchList: state.searchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: (event) => dispatch(actionType.SEARCH(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchList)
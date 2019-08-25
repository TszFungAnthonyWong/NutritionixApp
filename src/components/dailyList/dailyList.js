import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './dailyList.scss';
import { connect } from 'react-redux';
import Aux from '../hoc/Aux';

import ListItem from './listItem/listItem';

class dailyList extends Component {
    render() {
        let date = this.props.curDate*-1
        let list = this.props.data.data_points[date].intake_list.map((item,key)=>{
            return <ListItem data={item} key={key} />
        });
        return (
            <Aux>
                {list}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.user,
        curDate: state.curDate
    }
}

export default connect(mapStateToProps)(dailyList)
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Cal.scss';
import { connect } from 'react-redux';


class Cal extends Component {
    render() {
        let date = this.props.curDate * -1
        let list = this.props.user.data_points[date].intake_list;
        let goal = this.props.user.daily_goal

        let totalCal = Object.keys(list).reduce((sum, key) => {
            let x = list[key].nf_calories * list[key].serving_qty;
            return sum + x;
        }, 0);

        let percent = parseInt(totalCal / goal * 100) + "%";
        let breakfastTotal = 0;
        let lunchTotal = 0;
        let dinnerTotal = 0;
        let snackTotal = 0;

        for (let c = 0; c < list.length; c++) {
            switch (list[c].meal_type) {
                case "breakfast":
                    breakfastTotal += list[c].nf_calories * list[c].serving_qty;
                    break;
                case "lunch":
                    lunchTotal += list[c].nf_calories * list[c].serving_qty;
                    break;
                case "dinner":
                    dinnerTotal += list[c].nf_calories * list[c].serving_qty;
                    break;
                case "snack":
                    snackTotal += list[c].nf_calories * list[c].serving_qty;
                    break;
                default:
                    break;
            }

        }

        return (
            <div className="calContainer">

                <div className="calInf justify-content-between">
                    <div>{Math.floor(totalCal)} Cal</div>
                    <div>{goal} Cal</div>
                </div>

                <div className="calTag justify-content-between">
                    <div>consumed</div>
                    <div>daily goal</div>
                </div>

                <br/>

                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: percent }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div>{percent}</div>
                    </div>
                </div>

                <br />

                <div className="calInf justify-content-between">
                    <div>{Math.floor(breakfastTotal)}</div>
                    <div>{Math.floor(lunchTotal)}</div>
                    <div>{Math.floor(dinnerTotal)}</div>
                    <div>{Math.floor(snackTotal)}</div>
                </div>

                <div className="calTag justify-content-between">
                    <div>breakfast</div>
                    <div>lunch</div>
                    <div>dinner</div>
                    <div>snack</div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        curDate: state.curDate
    }
}

export default connect(mapStateToProps)(Cal)
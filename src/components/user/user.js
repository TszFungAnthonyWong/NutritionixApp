import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './user.scss';
import { connect } from 'react-redux';
import userImg from '../../assets/girl.jpg';

class user extends Component {
    render() {
        return (
            <div className="userInfo">
                <div className="imageBubble">
                    <img src={userImg} className="userImage" alt="uimg"></img>
                </div>
                <div className="bubble leftBubble">
                    <div>
                        <p style={{ fontSize: "15px" }}>{this.props.user.weight_kg}</p>
                        <p style={{ fontSize: "10px" }}>kg</p>
                    </div>
                </div>

                <div className="bubble rightBubble">
                    <div>
                        <p style={{ fontSize: "15px" }}>{this.props.user.height_cm}</p>
                        <p style={{ fontSize: "10px" }}>cm</p>
                    </div>
                </div>
                <div className="name">
                    <p style={{display: 'inline'}}>{this.props.user.first_name}</p><p className="lastName">{"  " + this.props.user.last_name}</p>
                </div>
                <div className="hrLine">
                    <hr />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(user)
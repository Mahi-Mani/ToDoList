import React, {Component} from "react";
import Moment from 'react-moment';
import moment from "moment";

class DisplayDate extends Component {
    state = {
        currentDate: moment(new Date()).format("YYYY-MM-DD"),
        day: moment(new Date()).format("dddd")
       };

    render() { 
        const Style={
            header: {
                backgroundColor: "#618685"
            }
        }
    return(
        <div>
            <h1 className="header text-light" style={Style.header}>{this.state.currentDate} {this.state.day}</h1>
        </div>
    )
    }
}

export default DisplayDate;
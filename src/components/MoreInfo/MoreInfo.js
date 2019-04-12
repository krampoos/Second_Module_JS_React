import React, {Component} from 'react';
import axios from '../../axios-news';
import {Link} from "react-router-dom";

class MoreInfo extends Component {

    state = {
        moreInfo: {}
    };

    componentDidMount() {
        axios.get('/news/' + this.props.match.params.id  +'.json')
            .then(response => {
                this.setState({
                    moreInfo: response.data
                })
            });
    }

    render() {
        console.log(this.state.moreInfo);
        return (
            <div className="moreInfo">
                <img src={this.state.moreInfo.fileUrl} alt=".!."/>
                <h1 className="moreInfo__title">{this.state.moreInfo.title}</h1>
                <p className="moreInfo__text">{this.state.moreInfo.text}</p>
                <Link to='/' className="btn btn-dark">Редактировать</Link>
            </div>
        );
    }
}


export default MoreInfo;

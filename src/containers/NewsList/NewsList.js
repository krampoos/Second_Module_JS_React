import React, {Component} from 'react';
import './NewsList.css';
import listImg from '../../assets/images/logo.png';
import {connect} from 'react-redux';

class NewsList extends Component {
    render() {
        return (
            <div className="list-group">
                    <a href="#" className="newsList__item list-group-item list-group-item-action flex-column align-items-start">
                        <img src={listImg} alt="img" className="newsList__img"/>
                        <div>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                                varius blandit.</p>
                            <small>Donec id elit non mi porta.</small>
                        </div>
                    </a>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

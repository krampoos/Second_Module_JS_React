import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <div>
                <h1>Main page here!!</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

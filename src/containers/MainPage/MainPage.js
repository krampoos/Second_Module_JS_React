import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import CardImg from '../../assets/images/CardImg.jpg';
import {Link} from "react-router-dom";


class MainPage extends Component {


    render() {
    return (
            <section className="main_page">
                <div className="banner">
                    <h1 className="banner_title">Banner title here</h1>
                    <span className="banner_text">Banner text here</span>
                </div>

                <div className="container">
                    <div className="card_news">
                        <div className="card" style={{width: "20rem"}}>
                            <img src={CardImg} alt="img" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title here!!</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <img src={CardImg} alt="img" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title here!!</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <img src={CardImg} alt="img" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title here!!</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
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

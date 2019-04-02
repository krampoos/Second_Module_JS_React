import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './MainPage.css';
import CardImg from '../../assets/images/CardImg.jpg';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="banner">
                    <h1 className="banner_title">Banner title here</h1>
                    <span className="banner_text">Banner text here</span>
                </div>
                <section className="news_card">
                    <ul className="card_list">
                        <li className="card_item">
                            <img src={CardImg} alt="#" className="card_img"/>
                            <span className="card_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum maxime nemo nisi quibusdam repellendus! Dolore est excepturi numquam voluptatem!
                            </span>
                            <div className="card_button">Readmore</div>
                        </li>
                        <li className="card_item">
                            <img src={CardImg} alt="#" className="card_img"/>
                            <span className="card_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum maxime nemo nisi quibusdam repellendus! Dolore est excepturi numquam voluptatem!
                            </span>
                            <div className="card_button">Readmore</div>
                        </li>
                        <li className="card_item">
                            <img src={CardImg} alt="#" className="card_img"/>
                            <span className="card_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum maxime nemo nisi quibusdam repellendus! Dolore est excepturi numquam voluptatem!
                            </span>
                            <div className="card_button">Readmore</div>
                        </li>
                    </ul>
                    <div className="news-car_button">More news</div>
                </section>

            </Fragment>
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

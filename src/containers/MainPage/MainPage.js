import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MainPage.css';

import {getNewsCard} from "../../store/action/news";
import NewsCards from "../../components/NewsCards/NewsCrads";


class MainPage extends Component {

    componentDidMount() {
        this.props.onNewsLoad();

    }


    render() {
        let newsCard = Object.keys(this.props.newsInfo).map(newsKeys => {
            return <NewsCards
                key={newsKeys}
                newsImg={this.props.newsInfo[newsKeys].fileUrl}
                title={this.props.newsInfo[newsKeys].title}
                text={this.props.newsInfo[newsKeys].text}
            />
        });
    return (
            <section className="main_page">
                <div className="banner">
                    <h1 className="banner_title">Banner title here</h1>
                    <span className="banner_text">Banner text here</span>
                </div>

                <div className="container">
                    <h1 className="card__title">Свежие новости дня!!</h1>
                    <div className="card_news">
                        {newsCard}
                    </div>
                </div>

            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        newsInfo: state.newsState.news
    }
};

const mapDispatchToProps = dispatch => {
  return {
      onNewsLoad: () => dispatch(getNewsCard())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

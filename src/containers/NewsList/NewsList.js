import React, {Component} from 'react';
import './NewsList.css';
import {connect} from 'react-redux';
import {getNewsList, removeNews} from "../../store/action/news";
import NewsItem from "../../components/NewsItem/NewsItem";




class NewsList extends Component {
    componentDidMount() {
        this.props.onNewsLoad();

    }

    render() {
        // let newsList = this.props.news.map(newsInfo => {
        //     return  <NewsItem
        //         newsImg={newsInfo.fileUrl}
        //         title={newsInfo.title}
        //         text={newsInfo.text}
        //     />;
        // });
        let newsList = Object.keys(this.props.news).map(newsKeys => {
            return <NewsItem
                    key={newsKeys}
                    newsImg={this.props.news[newsKeys].fileUrl}
                    title={this.props.news[newsKeys].title}
                    text={this.props.news[newsKeys].text}
                    date={this.props.news[newsKeys].date}
                    id={newsKeys}
                    remove={() => this.props.onPostDelete(newsKeys)}
                />;
        });


        return (
            <div>
                {newsList}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
        news: state.newsState.news
  }
};

const mapDispatchToProps = dispatch => {
    return {
        onNewsLoad: () => dispatch(getNewsList()),
        onPostDelete: (id) => dispatch(removeNews(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

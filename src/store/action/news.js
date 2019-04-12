import * as actionTypes from './actionTypes';
import axios from '../../axios-news';


export const getUserAuth = user => {
  return {type: actionTypes.USER_LOGIN, user};
};

export const setUserLogout = () => {
    return {type: actionTypes.USER_LOGOUT};
};

export const uploadProgress = progress => {
    return {type: actionTypes.FILE_UPLOAD, progress};
};


export const newsRequest = () => {
    return {type: actionTypes.NEWS_REQUEST};
};

export const newsSuccess = () => {
    return {type: actionTypes.NEWS_SUCCESS};
};

export const getNewsSuccess = (news) => {
    return {type: actionTypes.GET_NEWS_SUCCESS, news};
};

export const getNewsCardSuccess = (news) => {
    return {type: actionTypes.GET_NEWS_CARD, news};
};

export const getMoreInfoSuccess = (news) => {
    return {type: actionTypes.GET_MORE_INFO, news};
};

export const newsError = () => {
    return {type: actionTypes.NEWS_ERROR};
};

export const removeSuccess = (id) => {
  return {type: actionTypes.REMOVE_NEWS, id};
};

export const createNews = news => {
    return dispatch => {
        dispatch(newsRequest());
        axios.post('/news.json', news).then(
            response => dispatch(newsSuccess()),
            error => dispatch(newsError())
        )
    }
};

export const getNewsList = () => {
    return dispatch => {
        dispatch(newsRequest());
        axios.get('/news.json').then(
            response => dispatch(getNewsSuccess(response.data)),
            error => dispatch(newsError())
        )
    }
};

export const getNewsCard = () => {
    return dispatch => {
        dispatch(newsRequest());
        axios.get('/news.json?orderBy="date"&limitToLast=3').then(
            response => dispatch(getNewsCardSuccess(response.data)),
            error => dispatch(newsError())
        )
    }
};

export const getMoreInfo = () => {
    return dispatch => {
        dispatch(newsRequest());
        axios.get('/news.json?orderBy="date"&limitToLast=3').then(
            response => dispatch(getMoreInfoSuccess(response.data)),
            error => dispatch(newsError())
        )
    }
};


export const removeNews = (id) => {
  return dispatch => {
      dispatch(newsRequest());
      axios.delete('/news/' + id + '.json').then(
          response => dispatch(removeSuccess(id)),
          error => dispatch(newsError())
      );
  }
};

export const editNews = () => {
  return dispatch => {

  }
};
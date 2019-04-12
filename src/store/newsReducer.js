import * as actionTypes from './action/actionTypes';


const initialState = {
    news: {},
    progress: '',
    user: null,
    loading: false,
    error: false
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null
            };
        case actionTypes.FILE_UPLOAD:
            return {
                ...state,
              progress: action.progress
            };
        case actionTypes.NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.NEWS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionTypes.NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case actionTypes.GET_NEWS_SUCCESS:
                return {
                    ...state,
                    news: action.news
                };
        case actionTypes.GET_NEWS_CARD:
            return {
                ...state,
                news: action.news
            };
        case actionTypes.GET_MORE_INFO:
        return {
            ...state,
            news: action.news
        };
        case actionTypes.REMOVE_NEWS:
            // const index = state.news.findIndex(newsItem => newsItem.id === action.id);
            // const deleteKey = Object.keys(state.news).findIndex(item => item === action.id);
            // const newsCopy = {...state.news};
            //
            // const news =
            //
            // console.log(news);


            return {
                ...state,
                loading: false,
                news: Object.keys(state.news).reduce((acc, elem) => {
                    if (elem !== action.id) {
                        acc[elem] = state.news[elem];
                    }
                    return acc;
                }, {})
            };
        default:
            return state;
    }
};

export default newsReducer;
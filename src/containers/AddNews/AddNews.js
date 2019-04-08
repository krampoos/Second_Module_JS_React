import React, {Component} from 'react';
import firebase, {auth} from '../../config/FbConfig';
import './AddNews.css';
import {connect} from "react-redux";
import Auth from "../../components/Auth/Auth";
import {createNews, getUserAuth, setUserLogout, uploadProgress} from "../../store/action/news";


class AddNews extends Component {
    state = {
        title: '',
        text: '',
        fileUrl: null,
        file: null,
    };


    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.props.onUserAuth(user);
            }
        })
    }

    onChangeHandler = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
    };

    onFileSelectHandler = e => {
      this.setState({
          file: e.target.files[0]
      })
    };

    onSubmitHandler = e => {
        e.preventDefault();

        const news = {
            title: this.state.title,
            text: this.state.text
        };
        this.onFileUpload(news);

        e.target.reset();
    };

    onFileUpload = (news) => {
        const file = this.state.file;
        const fileName = file.name;

        const storageRef = firebase.storage().ref('images/' + fileName);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {
                //progress
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                this.props.onProgressUpload(progress);
            },
            (error) => {
                console.log(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(imgUrl => {
                        news.fileUrl = imgUrl;
                        this.props.onNewsAdd(news);
                    })
                }
            )
    };

    onLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                this.props.onUserLogout();
            });
    };
    render() {
        let form = (
            <Auth/>
        );
        if (this.props.user) {
            form = (
                <div className="add-news">
                    <form onSubmit={this.onSubmitHandler}>
                        <h2 className="add-news_title">Введите загаловок новости</h2>
                        <input type="text" name="title" onChange={this.onChangeHandler} className="form-control"/>
                        <h2 className="add-news_text">Введите текст новости.</h2>
                        <textarea name="text" onChange={this.onChangeHandler}  rows="3" className="form-control"/>
                        <h2 className="display-5 my-5">Добавить картинку в хранилише</h2>
                        <div className="custom-file md-3">
                            <input
                                className="custom-file-input"
                                type="file"
                                name="file"
                                onChange={this.onFileSelectHandler}
                            />
                            <label
                                htmlFor="uploadImg"
                                className="custom-file-label"
                                >выберите файл...</label>
                        </div>
                        <button className="btn btn-success">загрузить</button>
                        <hr/>
                        <div className="progress">
                            <div
                                className="progress-bar bg-info"
                                style={{width: this.props.progress + '%'}}
                            />
                        </div>
                        <hr/>
                        {
                            this.state.fileUrl ?
                                <img
                                    src={this.state.fileUrl}
                                    alt="file"
                                    style={{width: '100%'}}
                                />:
                                null
                        }

                    </form>
                    <button
                        className="btn btn-warning"
                        onClick={this.onLogout}
                    >Выйти</button>
                </div>

            )
        }
        return (
            <div className="container news_add">
                <div className="row justify-contant-center">
                    <div className="col-8">
                        {form}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.newsState.user,
        progress: state.newsState.progress
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUserAuth: (user) => dispatch(getUserAuth(user)),
        onUserLogout: () => dispatch(setUserLogout()),
        onProgressUpload: progress => dispatch(uploadProgress(progress)),
        onNewsAdd: news => dispatch(createNews(news))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AddNews);

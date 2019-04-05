import React, {Component} from 'react';
import firebase, {auth} from '../../config/FbConfig';
import './AddNews.css';
import {connect} from "react-redux";


class AddNews extends Component {
    state = {
      email: '',
      pass: '',
      fileUrl: null,
      file: null,
      user: null,
      progress: ''
    };

    onChangeHandler = e => {
      e.preventDefault();
      this.setState({
          [e.target.name]: e.target.value
      })
    };

    onLogin = e => {
        e.preventDefault();
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.pass)
            .then(result => {
                const user = result.user;
                this.setState({user});
            })
            .catch(error => {
                console.log(error);
            })
    };

    onLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                this.setState({user: null});
            });
    };

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({user})
            }
        })
    }

    onFileSelectHandler = e => {
      this.setState({
          file: e.target.files[0]
      })
    };

    onFileUpload = e => {
      e.preventDefault();
        const file = this.state.file;
        const fileName = file.name;

        const storageRef = firebase.storage().ref('images/' + fileName);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {
                //progress
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                this.setState({progress});
            },
            (error) => {
                console.log(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(fileUrl => {
                        this.setState({fileUrl});
                    })
                }
            )
    };
    render() {
        let form = (
            <form onSubmit={this.onLogin}>
                <h1 className="display-3 md-4">Авторизация</h1>
                <div className="form-group">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        name="pass"
                        onChange={this.onChangeHandler}
                        value={this.state.pass}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-danger">войти</button>
                </div>
            </form>
        );
        if (this.state.user) {
            form = (
                <div className="add-news">
                    <h1>Ect' user</h1>
                    <button
                        className="btn btn-warning"
                        onClick={this.onLogout}
                    >Выйти</button>
                    <h2 className="display-5 my-5">Добавить картинку в хранилише</h2>
                    <form onSubmit={this.onFileUpload}>
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
                                style={{width: this.state.progress + '%'}}
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

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AddNews);

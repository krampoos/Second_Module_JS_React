import React, {Component} from 'react';
import './SliderV1.css';
import CardImg from '../../../assets/images/CardImg.jpg';

class SliderV1 extends Component {
    constructor() {
        super();

        this.state = {
            images: ['1', '2', '3', '4'],
            currentImageIndex: 0,
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true
        };

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler(e) {
        let newIndex = this.state.currentImageIndex;
        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = this.state.currentImageIndex + 1;
                this.state.canGoPrev = true;
            }
            if (newIndex === this.state.images.length - 1) {
                this.state.canGoNext = false;
            }
        } else {
            if (newIndex > 0) {
                newIndex = this.state.currentImageIndex - 1;
                this.state.canGoNext = true;
            }
            if (newIndex === 0) {
                this.state.canGoPrev = false;
            }
        }

        this.setState({currentImageIndex: newIndex});
    }


    render() {
        return (
            <div className="slider-v1">
                <div>
                    <button
                        data-direction="prev"
                        onClick={this.nextSlideHandler.bind(this)}
                        disabled={!this.state.canGoPrev}
                    >PREV</button>
                </div>
                <div>
                    <div className="accordian">
                        <ul>
                            <li>
                                <div className="image_title">
                                    <a href="#">Черника</a>
                                </div>
                                <a href="#">
                                    <img src={CardImg}/>
                                </a>
                            </li>
                            <li>
                                <div className="image_title">
                                    <a href="#">Ягоды Годжи</a>
                                </div>
                                <a href="#">
                                    <img src={CardImg}/>
                                </a>
                            </li>
                            <li>
                                <div className="image_title">
                                    <a href="#">Можжевельник</a>
                                </div>
                                <a href="#">
                                    <img src={CardImg}/>
                                </a>
                            </li>
                            <li>
                                <div className="image_title">
                                    <a href="#">Малина</a>
                                </div>
                                <a href="#">
                                    <img src={CardImg}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*/!*<img src="" alt=""/>*!/*/}
                    {this.state.currentImageIndex}
                </div>
                <div>
                    <button
                        data-direction="next"
                        onClick={this.nextSlideHandler.bind(this)}
                        disabled={!this.state.canGoNext}
                    >NEXT</button>
                </div>
            </div>
        );
    }
}

export default SliderV1;

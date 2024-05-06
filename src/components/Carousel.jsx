import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    handleNext = () => {
        if(this.state.count !== images.length-1){
            this.setState({ count: this.state.count + 1 });
      }
      else{
          this.setState({ count: 0});
      
      }
    }

    handlePrev = () => {
        if(this.state.count !== 0){
            this.setState({ count: this.state.count - 1 });
        }
        else{
            this.setState({ count: images.length-1 });
        }
      }

    render(){

        return(
            <div className="carousel">
                <div id="innerCarousel" style={{backgroundImage:`url(${images[this.state.count].img})`}}>
                <div id="leftButton" className="button left" onClick={this.handlePrev}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="centreText">
                    <h1>{images[this.state.count].title}</h1>
                    <p>{images[this.state.count].subtitle}</p>
                
                </div>
                <div id="rightButton" className="button right" onClick={this.handleNext}>
                    <ArrowForwardIosIcon/>
                </div>
                </div>
            </div>
        )
    }

    }   

export default Carousel;
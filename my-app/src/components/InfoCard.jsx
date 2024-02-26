import React from "react";
import cimg from "../assets/cardimg.svg";
import webinfo from "../webinfo";
import down from "../assets/bluedown.svg";
import info from "../assets/info.svg";
import rating from "../assets/rating.svg";
function InfoCard(props){
    return(
        <div className="infocard">
            <div className="left">
                <div className="cardimg">
                    <img src={cimg} />
                    <p>Builder 1</p>
                 </div>
                <div className="info"> 
                <p><b>{props.name}</b>- {props.des}</p>
                    <h4>Main Highlights</h4>
                    <p>[What you Get]:{props.wyg}</p>
                    <a href="#"> show more<img  src={down} /></a>
                </div>
            </div>
            
            <div className="rating">
                <div className="ratingbox">
                    <img src={info} className="infopic" />
                    <h2> {props.rating}</h2>
                    <p>{props.remark}</p>
                    <img src={rating}  />
                </div>
                <div className="view" >
                    <p> View </p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
import React from "react"
import exercise from "../img/exercise.png"
import "./styles/card.css"

class Card extends React.Component{
    render(){
        return(
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div class="row center">
                        <div>
                            <img src={exercise} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card
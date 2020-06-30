import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log(location)
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <div className="movie">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <div className="movie_data">
                        <h5 className="movie_year">{location.state.year}</h5> 
                        <h3 className="movie_title">{location.state.title}</h3>
                        <ul className="genres">
                            {location.state.genres.map((genre,index) =>(
                                <li key={location.state.index} className="genres_genre">{genre}</li>
                            ))}
                        </ul>
                        <p className="movie_summary">{location.state.summary.slice(0,90)}...</p>            
                    </div>
                </div>
            ) 
        }

        else if(location.state === undefined){
            return null;
        }
    }
}


export default Detail;
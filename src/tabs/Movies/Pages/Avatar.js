import "../../tabs.css";
import { Link } from "react-router-dom";
import Card from "../../../components/Cards/CastCard";
import {CastData} from "../../../components/JSON_Data/CastData";

export default function Avatar(){
    const card = CastData.map((item) => (
        <Card
          key={item.id}
          cast_name={item.cast_name}
          pic={item.pic}
          alt={item.alt}
          role={item.role}
        />
      ));
    return(
        <div className="wrapper">
            <div className="whole-container">
                <div className="top-display">
                <img className="movie-thumnail" style={{borderRadius: 20}} src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-the-way-of-water-et00037264-1670850986.jpg" alt="avatar"/>
                <div className="movie-container">
                    <h1 className="movie-title">Avatar: The Way of Water</h1>
                    <div className="movie-ratings">
                        <p className="star-ratings">&#11088; 8.7/10 180.4K votes <i class="fa-solid fa-chevron-right"></i></p> 
                    </div>
                    <div className="add-rating">
                        <p className="rating-text"> Add your rating & review </p>
                        <Link className="rate-btn" to="/rate-avatar"><span id="RateSpan">Rate Now</span></Link>
                    </div>
                    <p className="movie-formats">2D, 3D, 3D SCREEN X, 4DX 3D, IMAX 3D</p>
                    <p className="movie-languages">English, Kannada, Malayalam, Tamil, Telugu, Hindi</p>
                    <div className="movie-details">
                        <span className="duration">3h 12m</span> • <span className="genre">Action, Adventure, Fantasy, Sci-Fi</span> • <span className="movie-certificate">UA </span> • <span className="release-date"> 16 Dec, 2022</span>
                    </div>
                    <div className="book-button">
                        <Link className="book-btn" to="/book/avatar"><span id="BookSpan">Book Tickets</span></Link>
                    </div>        
                </div>
            </div>
            </div>
            <div className="movie-desc">
                <h3>About the movie</h3>
                <p>Set more than a decade after the events of the first film, "Avatar The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.</p>
                <hr className="hori-line"/>
            </div>
            <h3 id="cast-head">Cast</h3>
            <div className="cast">
                {card}
            </div>
        </div>
    );
}
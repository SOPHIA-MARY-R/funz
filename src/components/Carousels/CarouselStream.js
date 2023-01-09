import Carousel from 'react-bootstrap/Carousel';
import "../../tabs/tabs.css";
import PremiereMultiCarousel from "./PremiereMultiCarousel";
import MultiCarousel from "./MultiCarousel";

//promotions carousel
export default function CarouselStream() {
  return (
    <>
      <Carousel variant="black" className="carousel-container" style={{marginLeft: 0, marginRight: 0}}>
        <Carousel.Item interval={2500}>
          <div className="top-info-display" style={{display: 'flow-root'}}>
              <div className="movie-info-thumbnail"><img  style={{borderRadius: 20, height: 320, width: 220}} src="https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg" alt="everything-everywhere"/></div>
              <div className="movie-info-container">
                  <h1 className="movie-title">Everything Everywhere All at Once</h1>
                  <p className="movie-languages">English</p>
                  <div className="movie-details">
                      <span className="duration">2h 20m</span> • <span className="genre">Action, Adventure, Sci-Fi</span> • <span className="movie-certificate">A</span> • <span className="release-date"> 16 Dec, 2022</span>
                  </div>
                  <p className="movie-about">An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.</p>       
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="top-info-display" style={{display: 'flow-root'}}>
              <div className="movie-info-thumbnail"><img  style={{borderRadius: 20, height: 320, width: 220}} src="https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg" alt="everything-everywhere"/></div>
              <div className="movie-info-container">
                  <h1 className="movie-title">Everything Everywhere All at Once</h1>
                  <p className="movie-languages">English</p>
                  <div className="movie-details">
                      <span className="duration">2h 20m</span> • <span className="genre">Action, Adventure, Sci-Fi</span> • <span className="movie-certificate">A</span> • <span className="release-date"> 16 Dec, 2022</span>
                  </div>
                  <p className="movie-about">An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.</p>       
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="top-info-display" style={{display: 'flow-root'}}>
              <div className="movie-info-thumbnail"><img  style={{borderRadius: 20, height: 320, width: 220}} src="https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg" alt="everything-everywhere"/></div>
              <div className="movie-info-container">
                  <h1 className="movie-title">Everything Everywhere All at Once</h1>
                  <p className="movie-languages">English</p>
                  <div className="movie-details">
                      <span className="duration">2h 20m</span> • <span className="genre">Action, Adventure, Sci-Fi</span> • <span className="movie-certificate">A</span> • <span className="release-date"> 16 Dec, 2022</span>
                  </div>
                  <p className="movie-about">An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.</p>       
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="top-info-display" style={{display: 'flow-root'}}>
              <div className="movie-info-thumnail"><img  style={{borderRadius: 20, height: 320, width: 220}} src="https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg" alt="everything-everywhere"/></div>
              <div className="movie-info-container">
                  <h1 className="movie-title">Everything Everywhere All at Once</h1>
                  <p className="movie-languages">English</p>
                  <div className="movie-details">
                      <span className="duration">2h 20m</span> • <span className="genre">Action, Adventure, Sci-Fi</span> • <span className="movie-certificate">A</span> • <span className="release-date"> 16 Dec, 2022</span>
                  </div>
                  <p className="movie-about">An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.</p>       
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="top-info-display" style={{display: 'flow-root'}}>
              <div className="movie-info-thumnail"><img  style={{borderRadius: 20, height: 320, width: 220}} src="https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg" alt="everything-everywhere"/></div>
              <div className="movie-info-container">
                  <h1 className="movie-title">Everything Everywhere All at Once</h1>
                  <p className="movie-languages">English</p>
                  <div className="movie-details">
                      <span className="duration">2h 20m</span> • <span className="genre">Action, Adventure, Sci-Fi</span> • <span className="movie-certificate">A</span> • <span className="release-date"> 16 Dec, 2022</span>
                  </div>
                  <p className="movie-about">An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.</p>       
              </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <h3>Premieres</h3>
      <PremiereMultiCarousel/>
      <h3>Coming soon</h3>
      <MultiCarousel/>
      </>
  );
}
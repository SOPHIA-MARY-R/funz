import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {MovieCardsData} from "../components/MovieCardsData"; 
function Cards() {
    {MovieCardsData.map((item, index) => {
        return (
        <Card style={{ width: '45%', height: '100%' }} key={index}>
        <Card.Img src={item.pic} />
        <Card.Body>
            <Card.Title>{item.movie_name}</Card.Title>
            <Card.Text>
            <p>{item.certification}</p>
            <p>{item.languages}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    );
    })}
}

export default Cards;
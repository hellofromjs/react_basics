import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Article({title, description}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fakeimg.pl/300x200" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
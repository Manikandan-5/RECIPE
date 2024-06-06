import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';
import ListGroup from 'react-bootstrap/ListGroup';

const RecipeItem = ({ recipe }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // Ensure recipe and its properties are defined before accessing them
    if (!recipe || !recipe.recipe) {
        return null;
    }

    const { label, image, source, url, ingredientLines } = recipe.recipe;

    return (
        <>
            <Card style={{ width: '18rem' }} className='text-center'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{label}</Card.Title>
                    <Card.Text>
                        {source}
                    </Card.Text>
                    <ListGroup.Item>  <Button variant="outline-primary" onClick={handleShow}>
                        View Ingredients
                    </Button></ListGroup.Item>
        <ListGroup.Item><button style={{backgroundColor:'tomato',padding:'6px',borderRadius:"6px",marginTop:'4px'}}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white ">
                        View Recipe
                    </a>
                    </button></ListGroup.Item>
                  
                    
                </Card.Body>
            </Card>
            <RecipeModal
                show={showModal}
                handleClose={handleClose}
                recipe={{ label, image, ingredientLines }}
            />
        </>
    );
};

export default RecipeItem;

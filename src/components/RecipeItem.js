import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';

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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{label}</Card.Title>
                    <Card.Text>
                        {source}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={handleShow}>
                        View Ingredients
                    </Button>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary ml-2">
                        View Recipe
                    </a>
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

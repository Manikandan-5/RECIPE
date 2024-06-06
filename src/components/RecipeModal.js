import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RecipeModal = ({ show, handleClose, recipe }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{recipe.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={recipe.image} alt={recipe.label} className="img-fluid mb-3" />
                <h5>Ingredients</h5>
                <ul>
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RecipeModal;

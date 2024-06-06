import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
}

  return (
    <Container>
      <Row >
            {recipes.map((recipe, index) => (
                <Col key={index} lg={4} md={4} sm={6} xs={12} className="mt-4 ">
                    <RecipeItem recipe={recipe} />
                </Col>
            ))}
        </Row>
      
    </Container>
  );
};

export default RecipeList;

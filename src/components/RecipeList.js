import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <h5 className="text-center mt-4" style={{color:'tomato'}}>No recipes found.</h5>;
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

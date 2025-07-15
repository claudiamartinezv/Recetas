import React from 'react';
// Importamos los íconos desde FontAwesome React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

// Importamos componentes de Bootstrap (Card y Button)
import { Card, Button } from 'react-bootstrap';

// Componente funcional que representa una tarjeta de receta
// Recibe por props: receta (objeto), onDelete (función), onEdit (función)
const RecipeCard = ({ recipe, onDelete, onEdit }) => {
  return (
    <Card className="mb-3">
      {/* Si la receta tiene imagen, la mostramos */}
      {recipe.image && <Card.Img variant="top" src={recipe.image} alt={recipe.name} />}
      
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <Card.Text><strong>Tiempo:</strong> {recipe.time} min</Card.Text>

        {/* Botón para editar - Llama a la función onEdit pasándole la receta */}
        <Button variant="primary" onClick={() => onEdit(recipe)} className="me-2">
          <FontAwesomeIcon icon={faEdit} /> Editar
        </Button>

        {/* Botón para eliminar - Llama a la función onDelete pasándole el id */}
        <Button variant="danger" onClick={() => onDelete(recipe.id)}>
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;

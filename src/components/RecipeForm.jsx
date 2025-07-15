import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RecipeForm = ({ show, handleClose, onSave, initialData }) => {
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    time: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({ id: null, name: "", description: "", time: "", image: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, image: reader.result });
      if (files[0]) reader.readAsDataURL(files[0]);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.time) return;
    onSave(form);
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{form.id ? "Editar Receta" : "Agregar Nueva Receta"}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la receta</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ej: Tarta de Manzana"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Breve descripción"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tiempo de preparación (minutos)</Form.Label>
            <Form.Control
              type="number"
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="Ej: 30"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagen de la receta</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
            {form.image && (
              <img
                src={form.image}
                alt="Vista previa"
                className="img-fluid mt-2 rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            )}
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RecipeForm;

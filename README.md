# 🍽️ Aplicación CRUD de Recetas — Claudia Martínez

Aplicación desarrollada con **React** y **Vite**, orientada a la gestión básica de un recetario personal.  
El proyecto implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y almacenamiento local, con un enfoque en la usabilidad y la experiencia del usuario.

---

## 🎯 Características principales

- 📋 **Visualización dinámica de recetas**  
  Las recetas se presentan mediante tarjetas que incluyen imagen, descripción, tiempo estimado y método de preparación.

- ➕ **Registro de nuevas recetas**  
  Formulario controlado para agregar recetas, incluyendo campos para nombre, descripción, tiempo de preparación, imagen y método de preparación detallado.

- ✏️ **Edición de recetas existentes**  
  Permite actualizar la información de cualquier receta registrada.

- 🗑️ **Eliminación de recetas**  
  Opción para remover recetas individualmente del listado y del almacenamiento local.

- 🖼️ **Vista previa de imágenes**  
  Las imágenes seleccionadas se previsualizan antes de guardar la receta.

- 💾 **Persistencia de datos con LocalStorage**  
  La información registrada permanece disponible en el navegador tras recargar la página.

- 🎨 **Interfaz responsive y moderna**  
  Uso de CSS personalizado, Bootstrap y animaciones simples para mejorar la experiencia del usuario en distintos dispositivos.

---

## 🗂️ Estructura del Proyecto

```
public/
 └── img/
     ├── ensalada-cesar.jpg
     ├── tortilla-espanola.jpg
     └── pasta-alfredo.jpg

src/
 ├── components/
 │   ├── RecipeCard.jsx      // Componente de tarjeta individual de receta
 │   ├── RecipeForm.jsx      // Componente de formulario de creación y edición
 │   └── RecipeList.jsx      // Componente listado de recetas
 ├── utils/
 │   └── storage.js          // Funciones auxiliares para LocalStorage
 ├── App.jsx                 // Componente principal de la aplicación
 ├── App.css                 // Estilos globales personalizados
 └── main.jsx                // Entrada principal de la aplicación

README.md
index.html
package.json
vite.config.js
```

---

## 🌐 Demo en línea

Puedes ver la aplicación funcionando aquí:  
👉 [https://claudiamartinezv.github.io/Recetas/](https://claudiamartinezv.github.io/Recetas/)


## 💻 Instalación y ejecución local

```bash
git clone https://github.com/claudiamartinezv/Recetas.git
cd Recetas
npm install
npm run dev
```

Abrir en el navegador:  
```
http://localhost:5173
```

---

## 👩‍💻 Autor

**Claudia Martínez**  
🔗 GitHub: [claudiamartinezv](https://github.com/claudiamartinezv)

---

## 📄 Licencia

Proyecto realizado con fines académicos y educativos.

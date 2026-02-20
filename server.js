const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/productos", (req, res) => {
  res.json([
    { id: 1, nombre: "Jose Manuel" },
    { id: 2, nombre: "Rafa" }
  ]);
});

app.post("/api/productos", (req, res) => {
  const { nombre} = req.body;

  res.status(201).json({
    mensaje: "Producto creado correctamente",
    producto: {
      id: Math.floor(Math.random() * 1000),
      nombre
    }
  });
});


app.delete("/api/productos/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    mensaje: `Producto con id ${id} eliminado correctamente`
  });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
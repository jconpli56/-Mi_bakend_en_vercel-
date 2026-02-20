export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json([
      { id: 1, nombre: "Jose Manuel" },
      { id: 2, nombre: "Rafa" }
    ]);
  }

  if (req.method === "POST") {
    const { nombre } = req.body;

    return res.status(201).json({
      mensaje: "Alumno creado correctamente",
      alumno: {
        id: Math.floor(Math.random() * 1000),
        nombre
      }
    });
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    return res.status(200).json({
      mensaje: `Alumno con id ${id} eliminado correctamente`
    });
  }

  return res.status(405).json({
    mensaje: "Metodo no permitido"
  });
}
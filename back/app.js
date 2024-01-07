const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const {
  getAllAgents,
  getAgentsByName,
  getAgentsByRole,
} = require("./controllers/agentsController");

// Middleware para parsear JSON en las solicitudes
app.use(cors());
app.use(express.json());

app.get("/agents", async (req, res) => {
  try {
    const agents = await getAllAgents();
    res.status(200).json(agents);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: message.error });
  }
});

app.get("/agents/byname/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const agentsByName = await getAgentsByName(name);
    res.status(200).json(agentsByName);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
});

app.get("/agents/byrole/:role", async (req, res) => {
  const { role } = req.params;
  try {
    const agentsByRole = await getAgentsByRole(role);
    res.status(200).json(agentsByRole);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
});

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

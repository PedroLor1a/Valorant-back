const axios = require("axios");

const getAllAgents = async () => {
  const agents = await axios(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  const data = agents.data.data;
  return data;
  // console.log(data);
};

const getAgentsByName = async (name) => {
  const agents = await axios("http://localhost:3000/agents");
  const data = agents.data;
  console.log(data, "esto es data");
  const agentsByName = await data.find((e) => {
    return e.displayName === name;
  });
  console.log(agentsByName, "esto es el map");
  return agentsByName;
};

const getAgentsByRole = async (role) => {
  const agents = await axios("http://localhost:3000/agents");
  const data = agents.data;
  const agentsByRole = await data.filter((e) => {
    return e.role?.displayName === role;
  });
  return agentsByRole;
};

module.exports = {
  getAllAgents,
  getAgentsByName,
  getAgentsByRole,
};

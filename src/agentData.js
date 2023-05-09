import { bearerToken } from "../script";

const getAgentData = () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken,
    },
  };

  fetch("https://api.spacetraders.io/v2/my/agent", options)
    .then((response) => response.json())
    .then((response) => response.console.log(response))
    .catch((err) => console.log(err));
};

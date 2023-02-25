const axios = require("axios");

const fetchData = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
};

module.exports = fetchData;

const axios = require("axios");

exports.getUserByName = async (userName) => {
  try {
    return await axios.get(`https://api.github.com/users/${userName}`);
  } catch (error) {
    return error.message;
  }
};

exports.getReposByNameAndRepo = async (userName, repoName) => {
  try {
    return await axios.get(`https://api.github.com/repos/${userName}/${repoName}`);
  } catch (error) {
    return error.message;
  }
};

exports.getReposByContributors = async (userName, repoName) => {
  try {
    return await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors`);
  } catch (error) {
    return error.message;
  }
};


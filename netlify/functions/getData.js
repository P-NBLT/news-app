const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const weatherApi = `${process.env.API_KEY}`;
    const newsApi = `${process.env.API_KEY_NEWS}`;
    return {
      statusCode: 200,
      body: JSON.stringify({
        weather: weatherApi,
        news: newsApi,
      }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};

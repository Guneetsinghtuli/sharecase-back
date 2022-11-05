const axios = require("axios");
const { response } = require("express");

const stockDetails = (req, res) => {
  const stockCode = (req.params.id).toUpperCase();
  console.log(stockCode);
  axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockCode}.BSE&outputsize=full&apikey=JEA324TWUB7BLM9M`
    )
    .then((response) => {
        res.send(response.data['Time Series (Daily)']["2022-11-04"]["4. close"]);
    }).catch((err) => {
        res.send("Invalid Stock Code");
    })
};

module.exports = {
  stockDetails,
};

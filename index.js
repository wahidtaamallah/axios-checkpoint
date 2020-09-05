const express = require("express");

const axios = require("axios");

const port = 5000;

app.listen(port, function(err) {
    if (err) console.log("server not running");
    else console.log("server running port : " + port);
  });


  app.get("/", function (req, res) {
    res.send("Axios Checkpoint");
  });
  app.get("/Brazil", (req, res) => {
    requestBrazil
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  
  const requestBrazil = axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=brazil&appid=7823d36f41862a9a6da16ece304eaa6f&units=metric"
  );
  const requestLondon = axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=7823d36f41862a9a6da16ece304eaa6f&units=metric"
  );
  const requestTunis = axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=Tunis&appid=7823d36f41862a9a6da16ece304eaa6f&units=metric"
  );
  
  axios
    .all([requestBrazil, requestLondon, requestTunis])
    .then(
      axios.spread((brazil, London, Tunis) => {
        console.log(brazil.data, London.data, Tunis.data);
      })
    )
  
    .catch((errors) => {
      console.error(errors);
    });
  
  ///////////////////////Brazil//////////////////////////
  app.get("/Brazil", (req, res) => {
    requestBrazil
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  ///////////////////////London//////////////////////////
  app.get("/London", (req, res) => {
    requestLondon
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  ///////////////////////Tunis//////////////////////////
  app.get("/Tunis", (req, res) => {
    requestTunis
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
const express = require('express');
const crudController = require('../controller/crud.controller');
const router = express.Router();

// Endpoint for Adding a Car
router.get('/getcrud', async (req, res) => {
  try {
    const value = await crudController.getCrud(req.body, req.headers);
    res.status(201).send({ message: "success", obj: value });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Endpoint for Booking the Car
router.post('/postCrud', async (req, res) => {
  try {
    const value = await crudController.postCrud(req.body, req.headers);
    res.status(200).send({ message: "success", obj: value });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Endpoint for showing cars based on filter
router.put('/updateCrud', async (req, res) => {
  try {
    const value = await crudController.updateCrud(req.body, req.headers);
    res.status(200).send({ message: "success", obj: value });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Endpoint for showing a car features and booking by id
router.delete('/deleteCrud', async (req, res) => {
  try {
    const value = await crudController.deleteCrud(req.body, req.headers);
    res.status(200).send({ message: "success", obj: value });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
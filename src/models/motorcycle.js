const mongoose = require('mongoose');

const torqueSpecsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: true
  }
});

const motorcycleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  engineSize: {
    type: String,
    required: true
  },
  transmission: {
    type: String,
    required: true
  },
  torqueSpecs: [torqueSpecsSchema]
});

const Motorcycle = mongoose.model('Motorcycle', motorcycleSchema);

module.exports = Motorcycle;
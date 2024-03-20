import mongoose from 'mongoose';

const bicycleSchema = new mongoose.Schema({ 
  model: {
    type: String,
    required: true,
    unique: true,
  },
  speeds: {
    type: Number,
    required: true,
  },
  frame:{
    type: String,
    required: true,
  },
  electric:{
    type: Boolean,
    required: true,
  },
  image:{
    type: String,
    required: true,
  }
});



const BicycleModel = mongoose.model('BicycleModel', bicycleSchema);

// const newBicycle = new BicycleModel({
//   model: "bubummmmmmmmmmmm",
//   speeds: 5, // Since it's a number, provide it without quotes
//   frame: "test",
//   electric: true, // Since it's a boolean, provide it as true/false, not "1"
//   image: "www.test.com"
// });

// // Guardar el nuevo bicicleta en la base de datos
// newBicycle.save()
//   .then((result) => {
//     console.log('New bicycle saved successfully.', result);
//   })
//   .catch(error => {
//     console.error('Error saving new bicycle:', error);
//   });

export default BicycleModel;

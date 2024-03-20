// controllers/BicycleController.js
import BicycleModel from "../models/BicycleModel.js";

export const getAllBicycles = async (req, res) => {
  try {
    const bicycles = await BicycleModel.find();
    res.status(200).json({ success: true, data: bicycles });
  } catch (error) {
    console.error('Error al obtener todas las bicicletas:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const createBicycle = async (req, res) => {
  try {
    const { model, speeds, frame, electric, image } = req.body; // Corregir aquí
    const newBicycle = await BicycleModel.create({ model, speeds, frame, electric, image }); // Corregir aquí
    res.status(201).json({ success: true, data: newBicycle });
  } catch (error) {
    console.error('Error al agregar bicicleta:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};


export const updateBicycle = async (req, res) => {
  const { id } = req.params;

  // Extraer solo los campos válidos que se pueden actualizar
  const { model, speeds, frame, electric, image } = req.body;

  try {
    const updatedBicycle = await BicycleModel.findByIdAndUpdate(
      id,
      { model, speeds, frame, electric, image },
      { new: true }
    );

    if (!updatedBicycle) {
      return res.status(404).json({ success: false, message: 'Bicicleta no encontrada' });
    }

    res.status(200).json({ success: true, data: updatedBicycle });
  } catch (error) {
    console.error('Error al editar bicicleta:', error);
    res.status(500).json({ success: false, message: 'Error al editar bicicleta' });
  }
};


export const deleteBicycle = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBicycle = await BicycleModel.findOneAndDelete({ _id: id });
    if (!deletedBicycle) {
      return res.status(404).json({ success: false, message: 'Bicicleta no encontrada' });
    }
    res.status(200).json({ success: true, message: 'Bicicleta eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar bicicleta:', error);
    res.status(500).json({ success: false, message: 'Error al eliminar bicicleta' });
  }
};

export const getOneBicycle = async (req, res) => {
  const { id } = req.params;

  try {
    const bicycle = await BicycleModel.findById(id);
    if (!bicycle) {
      return res.status(404).json({ success: false, error: 'Bicicleta no encontrada' });
    }
    res.status(200).json({ success: true, data: bicycle });
  } catch (error) {
    console.error('Error al obtener bicicleta:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};






import data from "../models/data.model.js";

export const createCard = async (req, res) => {
  try {
    const { name, tittle, description } = req.body; 
     
    const newCard = await data.create({
      name,
      tittle,
      description,
    });

    res.status(201).json({
      message: "Card created successfully",
      card: newCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating card",
      error: error.message,
    });
  }
};


export const getAllCards = async (req, res) => {
  try {
    const cards = await data.find();
    res.status(200).json({
      message: "Cards retrieved successfully",
      cards,
    });
  }
    catch (error) {
    res.status(500).json({
      message: "Error retrieving cards",
      error: error.message,
    });
  } 
};
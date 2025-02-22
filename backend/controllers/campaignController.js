// backend/controllers/campaignController.js

import Campaign from "../models/campaignModel.js";

export const createCampaign = async (req, res) => {
  const { title, description, goal } = req.body;

  try {
    const campaign = new Campaign({
      title,
      description,
      goal,
      creator: req.user.id,
    });

    const savedCampaign = await campaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

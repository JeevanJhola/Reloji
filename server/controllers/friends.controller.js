import Friends from "../models/friends.model.js";

export const getFriends = async (req, res) => {
  const friends = await Friends.find();
  res.json(friends);
};

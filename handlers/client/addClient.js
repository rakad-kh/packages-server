const { Business } = require("../../db/db");

const addClient = async (req, res, next) => {
  const businessId = req.params.id;
  const client = {
    firstname: req.body.name,
    lastname: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  };

  try {
    await Business.findOneAndUpdate(
      { _id: businessId },
      {
        $push: {
          clients: client,
        },
      }
    );
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = addClient;
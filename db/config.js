require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@jot-cluster.ixdfm.mongodb.net/jot`,
};


require('dotenv').config({ path: ".env" });
require("@nomiclabs/hardhat-ethers");


module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url:process.env.POLYGON_MUMBAI_URL,
         accounts: [process.env.POLYGON_MUMBAI_PRIVATE_KEY]
      }
   },
}
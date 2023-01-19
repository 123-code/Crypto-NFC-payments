// getaccount balance works 

const ethers = require('ethers');
const address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/d710f293be9046b38a5a45ff8a288102");

const getaccountbalance = async()=>{
    const accountbalance = await provider.getBalance(address);

    ///console.log(`Balance:${accountbalance.toString()}`);

    const etherBalance = ethers.utils.formatEther(accountbalance);
    console.log(`Balance: ${etherBalance} ether`);

}
getaccountbalance();


//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Coin is ERC20{
    address public owner;

    constructor() ERC20("PayzToken","PYZ"){

    }


    function minttokens(address _to) external payable{
        _mint(_to,1);
    }


    function balance(address _address) external view returns(uint){
        return balanceOf(_address);
    }


    function burntokens(address _from ,uint256 _amount) external{
        _burn(_from,_amount);
    }



}

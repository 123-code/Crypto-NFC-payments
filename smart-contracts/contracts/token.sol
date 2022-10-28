pragma solidity ^ 0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";



contract Token is ERC20 {
    constructor(uint256 initialsupply) ERC20("EC","ECD){
        _mint(msg.sender,initialsupply);
    }
 

    public bool contractpaused;
    
    mapping(address => uint256) accountbalances;
    event Incrementsupply(address user,uint256 amount);
    event Minter(address minter);
    event pause(bool paused);
    event unpause(bool unpaused);

    function decimals() public view virtual override returns(uint8){
        return 2;
    }

// contract security functions 

    function pausecontract() public {
        contractpaused = true;
    }

    function unpausecontract()public{
        contractpused = false
    }

    // user level functions.
    function balanceOf(address _address) public view returns(uint){
        return balance(_address);
    }






}
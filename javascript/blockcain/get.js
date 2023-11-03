var Web3 = require('./node_modules/web3');
var state = Web3.eth.getStorageAt("0x868753b6c21Ef853A1Fda6723D82E1cF69834205",'0x868753b6c21Ef853A1Fda6723D82E1cF69834205','114','514','114514',1);
console.log(state); // "0x03"

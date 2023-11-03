from web3 import Web3
w3 = Web3(Web3.HTTPProvider("http://101.37.81.166:20002/"))
slot = w3.eth.get_storage_at("0xe5eCAF8d84B9C0B73CFdA81D5cbb8b0a3c99014e","0x95691dad884ae85ccc3e2242bba2e7d2872b15204a58f3b161a7001e35bfa7cd")
print(w3.to_hex(slot))
# w3.keccak(hexstr="0x000000000000000000000000000000000000000000000000000000005")
# print(w3_1)
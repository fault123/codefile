import base64
import string
import pickle

# str1 = "F0lWEVA7BmUzAGB0C2UuAU9hbnIpATEidDdnACQ9"

# string1 = "ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0123456789+/"
# string2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

# print (base64.b64decode(str1.translate(str.maketrans(string1,string2))))
#
#a="xOPDu9PQuObL387Sw9zC69G9o6ENCg0KDQoNCg0KtPPA0A0KDQq3orz+yMujuiBJU0NDMjAyM18xDQq3osvNyrG85KO6IDIwMjMtMDgtMTEgMDk6MzkNCsrVvP7Iy6O6IElTQ0MyMDIzXzINCtb3zOKjuiDH89b6o6ENCrTzwNCw77DvztKjrM7SsrvQodDEsNHNvMasxaq7tcHLDQoNCg0KDQoNCtChw/c="
#a="tPPA0LDvsO/O0qOsztKyu9Ch0MSw0c28xqzFqru1wcsNCg0KDQoNCg0K0KHD9w=="
# a="zfvcyegxjrvmvyf"
# bytes(a)
#b=base64.b64decode(a).decode('UTF-16LE')
# b=a.decode('UTF-16LE')
# print(b)
b="LQAtABKAAAACgA5OAAAAA9XAEkARABHAEUAVABMAEwAQwACABIAVwBJAEQARwBFAFQATABMAEMAAQAIAEQAQwAwADEABAAkAFcAaQBkAGcAZQB0AEwATABDAC4ASQBuAHQAZQByAG4AYQBsAAMALgBEAEMAMAAxAC4AVwBpAGQAZwBlAHQATABMAEMALgBJAG4AdABlAHIAbgBhAGwABQAkAFcAaQBkAGcAZQB0AEwATABDAC4ASQBuAHQAZQByAG4AYQBsAAcACAAEDZYrAu3ZAQAAAAA==="
print(base64.b64decode(b))

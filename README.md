# yeghs-react
Yeghs is a the client for yeghs transaction service application built with NodeJS and MongoDb, that can allow an authenticated user to send money to another user, receive an OTP via his registered phone number to complete the transaction 

### Postman Documentation
My Postman API documentation can be found [ here ](https://documenter.getpostman.com/view/8211988/SW7T8XHf?version=latest)

### Heroku API Host
My Hosted API's can be found [ here ](https://yeghs.herokuapp.com)

### Key Application Features
A User can perform the following:
1. User (client) can sign up.
2. User (client) can login.
3. Authenticated User (client) can transfer funds to an account.
5. Authenticated User (client) can verify transaction to mark as completed

### API Information

METHOD |    DESCRIPTION       |   ENDPOINTS
-------|----------------------|-------------------------
POST | User (client) can sign up | user/auth/signup
POST | User (client) can login | user/auth/login
POST | User (client) can transfer funds to an account | fund/transfer
POST | User (client) can verify transaction to mark as completed | fund/transfer/verify
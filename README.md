# role_based_access_control
## Code Structure
### NODE APP       ---MONGODB
### --> app.js
### --> config
### --> routes
### --> controllers
### --> middleware
### --> models


Auth---                 User Routes
api/auth/register       api/users/admin
api/auth/login          api/users/manager
                        api/users/user

Roles--admin can access all three user routes 
    --manager can access only /manager and /user routes
    --user ____________api/users/user


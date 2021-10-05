# ERD Diagram:
Install extension in vs code: ERD Editor

Right-click to open ERD editor, and enjoy designing your diagram

Note: Every design that you perform will generate automatically as a JSON file.


# Postman:
Please import postman collection and env from postman folder - if you add new requests, please update the postman for the rest of the team

Export collection as v2.1(recommended)


# Step 1: Remote = origin
git pull
# Step 2:
npm start
# Step 3:
npm run migrate:latest



# Create migration:
npm run migrate:make table_name

# Pull the latest migration:
npm run migrate:latest

# Undo migration:
npm run migrate:rollback --> if entered once, goes back one migration, and if twice, it cleares out the table

# Flow:
Migration -> Types -> Mappers -> Repositories -> Services -> Controllers -> Routes

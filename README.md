# Step 1
git pull
# Step 2
npm start
# Step 3
npm run migrate:latest



# Create migration:
npm run migrate:make table_name

# Pull the latest migration:
npm run migrate:latest

# Undo migration:
npm run migrate: rollback --> if entered once, goes back once, if twice, cleares out the table



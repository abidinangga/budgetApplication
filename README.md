# budgetApplication

## Installation
Use the package manager npm to install

```js
npm install
```
## Usage

```js
#create database
sequelize db:create

#migration
sequelize db:migrate

#seed
sequelize db:seed:all

#runing
npm run dev
```
## Tech stack:

- Node.js
- Express
- PostgreSQL
- Sequelize
- vue.js
- pinia
- axios
- jwt
- bcryptjs

## Endpoints:

### Service

/user /
- POST LOGIN
- POST REGISTER

/category/
- GET ALL CATEGORY

/transaction/
- GET transaction -> get all transaction
- POST    -> add to transaction
- GET income -> get data income sum transactionAmount 
- GET expense -> get data expense sum transactionAmount
- GET total -> get data on the total number of transactions Amount of income minus expense
- GET ById -> params: id transaction
- PUT , params: id transaction 
- DELETE , params: id transaction 

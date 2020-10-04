# # Angular 7 Coding Assignment (Insurance Company)

## System Requirement

* Node version >= v10.19.0
* NPM version >= 6.14.4
* Angular version >= 7.0.0


## Getting Started

Clone the repo:
```sh
git clone https://github.com/shubhabundela071/insuranceCompany_admin.git
cd insuranceCompany_admin
```

Install dependencies:
```sh
npm i
```

Start server:
```sh

# Start 
ng s


# Server listening port:
4200

# browser URL:
http://localhost:4200/auth/login


Lint:
```sh
# Lint code with ESLint
yarn lint

# Run lint on any file change
yarn lint:watch

# Run lint on any file change and try to fix problems
yarn lint:fix
```

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```

##### Deployment

```sh

#Create build on local server
sudo ng build --prod --aot --base-href /admin/ 

# compile to ES5
1. npm i

# upload dist/ to your server
2. scp -rp dist/ user@dest:/path

# live server clone and pull dist resp
3. sudo git pull origin master

```


## Using Object-relational mapping 

Objection.js is an ORM for Node.js that aims to stay out of your way and make it as easy as possible to use the full power of SQL and the underlying database engine.

Objection.js, like Bookshelf, is built on the wonderful SQL query builder knex. All databases supported by knex are supported by objection.js. SQLite3, Postgres and MySQL are thoroughly tested.



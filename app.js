const Router = require('express').Router();
const {search} = require('./Controller/searchController.js');
const { smallcaseController, createSmallcase, updateVote } = require('./Controller/smallCaseController.js');
const { stockDetails } = require('./Controller/stockController.js');
const { createUser, getUser } = require('./Controller/userController.js');
// Login System

Router.route('/users')
.all((req,res,next) => {
    console.log('all');
    next();
})
.get(getUser)
.post(createUser);


Router.route('/users/portfolio')
.all((req,res,next) => {})
.get((req, res) => {})

Router.route('/stock/search/:company')
.get(search)


Router.route('/stocks/:id')
// Get stock by ID
// Done
.get(stockDetails)

// Get smallcase data
Router.route('/smallcase/:id')
// Done
.get(smallcaseController)


Router.route('/smallcase/create')
// Create smallcase
.post(createSmallcase)

Router.route('/smallcase/trending')
// Get trending smallcases
.get()

Router.route('/smallcase/vote')
.put(updateVote)


// Update Stocks
// Router.route('/smallcase/update/:id')

module.exports = Router;
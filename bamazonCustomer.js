// Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// -- The app should then prompt users with two messages.
// -- The first should ask them the ID of the product they would like to buy.
// -- The second message should ask how many units of the product they would like to buy.
// -- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// -- If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// -- However, if your store does have enough of the product, you should fulfill the customer's order.
// -- This means updating the SQL database to reflect the remaining quantity.
// -- Once the update goes through, show the customer the total cost of their purchase.
// -- If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// Start the buying process.

function start() {
  inquirer
    .prompt([
      {
        name: "product_name",
        type: "input",
        message: "What would you like to buy?"
      },
      {
        name: "purchase_quantity",
        type: "input",
        message: "Please specify the quantity"
      }
    ])
    .then(function(answer) {
      let q =
        "SELECT * FROM products WHERE product_name = " +
        mysql.escape(answer.product_name);
      connection.query(q, function(err, res) {
        if (err) throw err;
        if (res[0] === undefined) {
          console.log("Sorry, Product '" + answer.product_name + "' Not Found. Please enter another product");
          connection.end();
          return;
        }
        var purchase = {
          id: res[0].item_id,
          name: answer.product_name,
          price: res[0].price,
          purchase_quantity: answer.purchase_quantity,
          stock_quantity: res[0].stock_quantity
        };
        if (purchase.stock_quantity - purchase.purchase_quantity < 0) {
          console.log("Not enough inventory");
          connection.end;
          return;
        } else {
          update(purchase);
        }
      });
    });
}

// Update the store quantities

function update(purchase) {
  var diff = purchase.stock_quantity - purchase.purchase_quantity;
  var sql = "UPDATE products set stock_quantity =?  WHERE item_id = ?";
  var query = connection.query(sql, [diff, purchase.id], function(err, result) {
    console.log("Purchase Complete");
    console.log(purchase.name);
    console.log("x" + purchase.purchase_quantity);
    console.log("Total $" + purchase.purchase_quantity * purchase.price);
    connection.end();
  });
}

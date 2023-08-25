const db = require("../config");

class Products {
  fetchProducts(req, res) {
    const query = `
            SELECT prodID, prodName, quantity, price, category, prodDesc, prodUrl FROM Products;
        `;
    db.query(query, (err, results) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          results,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured: 😓",
          err
        });
      }
    });
  }
  fetchProduct(req, res) {
    const query = `
        SELECT prodID, prodName, prodDesc, quantity, price, category, prodDesc, prodUrl FROM Products WHERE prodID = ${req.params.prodID}
        `;
    db.query(query, (err, result) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          result,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured 😓",
        });
      }
    });
  }
  addProduct(req, res) {
    const query = `
            INSERT INTO Products SET ?
        `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Product inserted successfully 😇",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured 😓",
          err,
        });
      }
    });
  }
  updateProduct(req, res) {
    const query = `
            UPDATE Products SET ? WHERE prodID = ${req.params.prodID};
        `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Product updated successfully 😇",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured 😓",
          err,
        });
      }
    });
  }
  deleteProduct(req, res) {
    const query = `
            DELETE FROM Products WHERE prodID = ${req.params.prodID}
        `;
    db.query(query, (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Product deleted successfully 😇",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error occured 😓",
        });
      }
    });
  }
}

module.exports = { Products };

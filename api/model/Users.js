const db = require("../.config");
const { hash, compare, hashSync } = require("bcrypt");

class Users {
  fetchUsers(req, res) {
    const query = `
            SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile FROM Users;
        `;
    db.query(query, (err, results) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          results,
        });
      } else {
        res.json({
          err,
          msg: "Error has occured",
        });
      }
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile FROM Users WHERE userID = ${req.params.id}
        `;
    db.query(query, [req.params.id], (err, result) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          result,
        });
      } else {
        res.json({
          err,
          msg: "Error has occured",
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    data.userPass = await hash(data.userPass, 16);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };

    const query = `
            INSERT INTO Users SET ?
        `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        let token = createUser(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "User registered successfully",
        });
      } else {
        res.json({
          err,
          msg: "An error occured",
        });
      }
    });
  }
  async login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `
            SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userProfile FROM Users WHERE emailAdd = ?
        `;
    db.query(query, [emailAdd], async (err, result) => {
      if (err) {
        res.json({
          err,
          msg: "An error has occured",
        });
      }
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email or password",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in successfully",
              token,
              cResult: cResult[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid Login details",
            });
          }
        });
      }
    });
  }
  updateUser(req, res) {
    const query = `
            UPDATE Users SET ? WHERE userID = ${req.params.id}
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "User profile updated successfully",
        });
      } else {
        res.json({
          err,
          msg: "Error occured",
        });
      }
    });
  }
  removeUser(req, res) {
    const query = `
            DELETE FROM Users WHERE userID = ${req.params.id}
        `;
    db.query(query, [req.params.id], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "User record deleted successfully",
        });
      } else {
        res.json({
          err,
          msg: "An error occured",
        });
      }
    });
  }
}

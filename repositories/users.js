/* Our User Database */
let userDB = [];

/* ID counter */
let userID = 1;

/* Get all users (return the database itself) */
const getUsers = () => {
  return userDB;
};

/* 
  Get user by ID 
  Find in userDB such that user.id equals to id
  Tips: the code below is equal with
  
  for (let i = 0; i < userDB.length; i++) {
    const user = userDB[i];
    if (user.id === id) return user;
  }
*/
const getUserByID = (id) => {
  const data = userDB.find((user) => user.id === id);
  return data;
};

/* 
  Add user to userDB 

  -Create user object with specified data
  -Add the user to userDB
  -Increment userID counter
*/
const addUser = (data) => {
  data = { id: userID, ...data };
  userDB = [...userDB, data];
  userID++;
  return data;
};

/* 
  Update specific user 
  Find user with id id, then update the data with new data.

  Tips:
  map() function convert each element in the list.
  In mathematics, we also use map, for example:

  f(x) = x + 1

  we convert each input (x) to x+1

  The code below also does the same.
  If we translate map function below to sentence:
  " 
    For each user in userDB,
    If user.id === id, then convert user to updatedUser
    Otherwise, convert user to user (no changes)
  "
*/
const updateUser = (id, data) => {
  const updatedUser = { id: id, ...data };

  userDB = userDB.map((user) => (user.id === id ? updatedUser : user));

  return updatedUser;
};

/* 
  Delete specific user 
  Delete user with id id from userDB

  In JavaScript, we can perform delete with filter() function.
  We just have to filter the userDB, so the userDB doesn't contain
  user with id id anymore.
*/
const deleteUser = (id) => {
  userDB = userDB.filter((user) => user.id !== id);
  return { success: true };
};

/* Export functions */
module.exports = {
  getUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser
};

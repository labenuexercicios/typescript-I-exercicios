import { users, products, createUser, createProduct, getAllUsers, getAllProducts, searchProductsByName } from "./database";

createUser("u004", "Ana","a@gmail.com", "12345678" )
createUser("u007", "Gio","g@gmail.com", "12345678" )
createProduct("u150", "mouse gamer", 50.00 , "mouse gamer", "mouse gamer")

// console.table(users)
// console.log(getAllUsers());
// console.table(products)
// console.log(getAllProducts());

console.table(searchProductsByName("gamer"))

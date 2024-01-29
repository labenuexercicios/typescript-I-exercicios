"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@email.com",
        password: "fulano123",
        createdAt: new Date().toISOString()
    },
    {
        id: "u002",
        name: "Beltrana",
        email: "beltrana@email.com",
        password: "beltrana00",
        createdAt: new Date().toISOString()
    }
];
exports.products = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    }
];
const createUser = (id, nome, email, password) => {
    const newUser = {
        id: id,
        name: nome,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
    };
    exports.users.push(newUser);
    return "Cadastro realizado com sucesso";
};
exports.createUser = createUser;
const getAllUsers = () => {
    return exports.users;
};
exports.getAllUsers = getAllUsers;
(0, exports.getAllUsers)();
const createProduct = (id, nome, price, description, imageUrl) => {
    const newProduct = {
        id: id,
        name: nome,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    exports.products.push(newProduct);
    return "Cadastro realizado com sucesso";
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    return exports.products;
};
exports.getAllProducts = getAllProducts;
(0, exports.getAllUsers)();
const searchProductsByName = (name) => {
    return exports.products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase());
    });
};
exports.searchProductsByName = searchProductsByName;

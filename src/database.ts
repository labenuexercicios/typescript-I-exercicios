import { TUser, TProducts } from "./types";

export const users: TUser[] = [
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
]

export const products: TProducts[] = [
    {
        id: "prod001",
        name:"Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name:"Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    }
]


export const createUser = (
    id: string | number,
    nome: string,
    email: string,
    password: string | number
): string => {
    const newUser: TUser = {
        id: id,
        name: nome,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    return "Cadastro realizado com sucesso"
};

export const getAllUsers = (): TUser[] => {
    return users;
}
getAllUsers();

export const createProduct = (
    id: string | number,
    nome: string,
    price: number,
    description: string,
    imageUrl: string
): string => {
    const newProduct: TProducts = {
        id: id,
        name: nome,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    products.push(newProduct);
    return "Cadastro realizado com sucesso"
};

export const getAllProducts = (): TProducts[] => {
    return products;
}
getAllUsers();


export const searchProductsByName = (name: string) => {
    return products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase())
    })
}
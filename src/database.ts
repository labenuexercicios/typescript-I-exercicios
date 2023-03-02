import { DPeople, DProduct, DPurchase } from "./types"

export const users: DPeople[] = [{
    id: '1',
    email: 'string@gmail',
    password: '123'
}, {
    id: '2',
    email: 'stringCopy@gmail',
    password: 'fdsc3'
}]

export const products: DProduct[] = [{
    id: '1',
    name: 'Iphone12',
    price: 8500,
    category: 'Telephone'
},
{
    id: '2',
    name: 'Mouse Gamer',
    price: 200,
    category: 'Components Computer'
}]

export const purchase: DPurchase[] = [{
    userId: users[0].id,
    productId: products[0].id,
    quantity: products.length,
    totalPrice: products[0].price + products[1].price
}]
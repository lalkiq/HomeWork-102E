const products = [
  {
    name: "Смартфон",
    price: 25000,
    stock: 10,
    category: "Электроника",
    rating: 4.7,
    isOnSale: false,
  },
  {
    name: "Ноутбук",
    price: 55000,
    stock: 5,
    category: "Электроника",
    rating: 4.5,
    isOnSale: true,
  },
  {
    name: "Наушники",
    price: 3000,
    stock: 25,
    category: "Аксессуары",
    rating: 4.2,
    isOnSale: false,
  },
  {
    name: "Клавиатура",
    price: 1500,
    stock: 15,
    category: "Периферия",
    rating: 3.9,
    isOnSale: true,
  },
  {
    name: "Монитор",
    price: 12000,
    stock: 8,
    category: "Электроника",
    rating: 4.8,
    isOnSale: false,
  },
];

console.log("Названия товаров:");
products.forEach((product) => {
  console.log(product.name);
});

console.log("\nТовары на скидке:");
products.forEach((product) => {
  if (product.isOnSale) {
    console.log(`${product.name} - ${product.price} грн`);
  }
});

console.log("\nТовары с высоким рейтингом (больше 4.5):");
products.forEach((product) => {
  if (product.rating > 4.5) {
    console.log(`${product.name} - Рейтинг: ${product.rating}`);
  }
});

const products = [
    {
      name: "Смартфон",
      price: 25000,
      stock: 10,
      category: "Электроніка",
      rating: 4.7,
      isOnSale: false,
    },
    {
      name: "Ноутбук",
      price: 55000,
      stock: 5,
      category: "Электроніка",
      rating: 4.5,
      isOnSale: true,
    },
    {
      name: "Навушники",
      price: 3000,
      stock: 25,
      category: "Аксесуари",
      rating: 4.2,
      isOnSale: false,
    },
    {
      name: "Клавіатура",
      price: 1500,
      stock: 15,
      category: "Периферія",
      rating: 3.9,
      isOnSale: true,
    },
    {
      name: "Монітор",
      price: 12000,
      stock: 8,
      category: "Электроніка",
      rating: 4.8,
      isOnSale: false,
    },
  ];
  


console.log("Назви продуктів:");
products.forEach(product => {
    console.log(product.name);
});


console.log("\nЦіни продуктів:");
products.forEach(product => {
    console.log(product.price);
});

console.log("Кількість товару в наявності:");
products.forEach(product => {
    console.log(product.stock);
});


console.log("\nКатегорії продуктів:");
products.forEach(product => {
    console.log(product.category);
});

console.log("\nРейтинг продуктів:");
products.forEach(product => {
    console.log(product.rating);
});


console.log("\nПродукт в продажі?");
products.forEach(product => {
    console.log(product.isOnSale);
});

let products = [
  { id: 1, name: "Coca Cola", price: 1.5, category: "Bebidas" },
  { id: 2, name: "Doritos", price: 0.5, category: "Snacks" },
  { id: 3, name: "Cerveza", price: 2.25, category: "Bebidas" },
];

//Funcion para obtener todos
export const getProducts = () => {
  return products;
};

//Funcion para guardar
export const saveProduct = (product) => {
  products.push(product);
  console.log(products);
};

//Buscar un producto
const findProduct = (id) => {
  return products.find((p) => p.id === id);
};

//Actualizar producto
export const updateProduct = (product) => {
  const found = findProduct(product.id);
  if (found) {
    found.name = product.name;
    found.price = product.price;
    found.category = product.category;
  }
};
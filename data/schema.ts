type Product = {
  productId: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: number; // Foreign key reference to Category
  imageRef: string;
};

type Category = {
  categoryId: number;
  categoryName: string;
};

type Inventory = {
  inventoryId: number;
  productId: number; // Foreign key reference to Product
  quantityAvailable: number;
};

type Review = {
  reviewId: number;
  productId: number; // Foreign key reference to Product
  customerId: number; // Foreign key reference to Customer
  rating: number;
  comment: string;
  date: Date;
};

// type Customer = {
//   customerId: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   address: string;
//   phone: string;
// };

// type Order = {
//   orderId: number;
//   customerId: number; // Foreign key reference to Customer
//   orderDate: Date;
//   totalAmount: number;
//   shippingAddress: string;
// };

// type OrderDetail = {
//   orderDetailId: number;
//   orderId: number; // Foreign key reference to Order
//   productId: number; // Foreign key reference to Product
//   quantity: number;
//   price: number;
// };

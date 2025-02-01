// Fungsi untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

const orders = [];

// Fungsi untuk menambahkan order baru
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    status: "Belum dibayar",
  };
  orders.push(order);
}

// Fungsi untuk mengupdate status order
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari order yang sudah selesai
function calculateTotalRevenue() {
  const selesaiOrders = orders.filter((order) => order.status === "Selesai");
  return selesaiOrders.reduce(
    (total, order) =>
      total + order.items.reduce((total, item) => total + item.price, 0),
    0
  );
}

// Fungsi untuk menghapus order berdasarkan id
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};

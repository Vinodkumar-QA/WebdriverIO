function processOrder(order) {
    // Validate order
    if (!order || !order.items || order.items.length === 0) {
      console.error("Invalid order");
      return;
    }
  
    // Calculate total price
    let totalPrice = 0;
    for (const item of order.items) {
      // Apply discounts, taxes, and calculate individual item prices
      // ...
  
      // Sum up individual item prices
      totalPrice += item.price;
    }
  
    // Apply global discounts, taxes, and calculate final price
    // ...
  
    // Generate shipping label
    if (order.deliveryMethod === "Express") {
      // Handle express delivery
      // ...
    } else {
      // Handle standard delivery
      // ...
    }
  
    // Update inventory
    for (const item of order.items) {
      // Deduct purchased items from inventory
      // ...
    }
  
    // Update customer loyalty points
    // ...
  
    // Send order confirmation email
    // ...
  
    // Log order details
    console.log("Order processed successfully");
  }
  
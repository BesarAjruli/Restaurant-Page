let menu = [];

class foods {
  constructor(name, description, price, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

menu.push(
  new foods(
    "Oysters on the Half Shell",
    "Freshly shucked oysters, served with a tangy mignonette and lemon wedges.",
    24,
    "Starters",
  ),
  new foods(
    'Lobster Bisque',
    'Rich, creamy soup infused with the delicate flavors of lobster and a hint of brandy.',
    18,
    'Starters'
  ),
  new foods(
    'Filet Mignon (8 oz)',
    'Center-cut filet, known for its tenderness, grilled to perfection and served with a red wine reduction.',
    55,
    'Steaks'
  ),
  new foods(
    'Tomahawk Steak (32 oz)',
    'A grand, bone-in ribeye, perfect for sharing, with bold flavor and a charred crust. Served with chimichurri sauce.',
    120,
    'Steaks'
  )
);

export {menu}

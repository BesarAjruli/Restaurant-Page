const restaurantName = document.createElement('h1');
const aboutHome = document.createElement('p');

restaurantName.textContent = 'Aquila Steak House';

aboutHome.innerHTML =
  'Aquila Restaurant is an upscale steakhouse where elegance meets culinary excellence. Nestled in the heart of the city, the restaurant offers a luxurious dining experience in a sleek, modern setting. With its dim ambient lighting, rich wooden interiors, and floor-to-ceiling windows showcasing stunning views, Aquila creates the perfect atmosphere for intimate dinners and special occasions.<br><br> At Aquila, the menu is crafted to celebrate the finest cuts of beef, expertly aged and grilled to perfection. From tender filet mignon to robust tomahawk steaks, each dish is prepared with precision and served with gourmet sauces and sides. Guests can also indulge in an extensive wine list, featuring rare vintages and carefully selected pairings to complement each meal.<br><br>The attentive service and refined atmosphere make Aquila a destination for discerning diners seeking a truly exceptional steakhouse experience.';


export { restaurantName, aboutHome };

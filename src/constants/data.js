import images from './images';

const wines = [
  {
    title: 'Vogienne',
    price: '6 500 CFA',
    tags: 'Pizza | Fromage | Sauce tomate | Jambon | Champignons',
  },
  {
    title: 'Calzone',
    price: '6 000 CFA',
    tags: 'Pizza | Fromage | Sauce tomate | Pepperoni | Olives',
  },
  {
    title: '3 Fromages',
    price: '7 000 CFA',
    tags: 'Pizza | Mozzarella | Parmesan | Cheddar | Sauce tomate',
  },
  {
    title: 'Margherita',
    price: '5 500 CFA',
    tags: 'Pizza | Mozzarella | Sauce tomate | Basilic frais',
  },
  {
    title: 'Pepperoni',
    price: '6 200 CFA',
    tags: 'Pizza | Pepperoni | Mozzarella | Sauce tomate',
  },
];

const cocktails = [
  {
    title: 'Côte de Porc',
    price: '8 500 CFA',
    tags: 'Porc | Sauce à choix | Légumes sautés',
  },
  {
    title: 'Poisson braisé',
    price: '7 500 CFA',
    tags: 'Poisson frais | Sauce à choix | Légumes grillés',
  },
  {
    title: 'Poulet braisé',
    price: '6 000 CFA',
    tags: 'Poulet | Grillé | Marinade spéciale',
  },

  {
    title: 'Poulet aux Champignons',
    price: '6 800 CFA',
    tags: 'Poulet | Champignons frais | Sauce crémeuse',
  },
  {
    title: 'Pâtes Carbonara',
    price: '6 000 CFA',
    tags: 'Pâtes | Sauce carbonara | Lardons | Parmesan râpé',
  },
];

const awards = [

  {
    imgUrl: images.award01,
    title: 'LE MAYON, une part de bonheur dans chaque bouchée !',
    subtitle: 'Pour chaque 2 pizzas achetées, la maison vous en offre une gratuitement !',
  },

];

export default { wines, cocktails, awards };

/* eslint-disable prettier/prettier */

import { type Product } from './models/product';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const productsData: Product[] = [
  {
    product: 'Tomaca',
    id: 0,
    price: 1000,
    currency: '€',
    rating: 3.9,
    favorite: false,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
    similarProducts: [
      {
        product: 'Cafeina',
        id: 1,
        price: 4000,
        currency: '$',
        rating: 2.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
      },
      {
        product: 'Jamon',
        id: 2,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Queso Curado',
        id: 4,
        price: 1500,
        currency: '€',
        rating: 4.5,
        favorite: false,
        description: 'Un queso con un sabor intenso y textura firme.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Homer J. Simpson',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Marge Simpson',
        rating: 4,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Café',
    id: 1,
    price: 4000,
    currency: '$',
    rating: 2.8,
    favorite: true,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    similarProducts: [
      {
        product: 'Tomate',
        id: 0,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tortilla',
        id: 3,
        price: 2500,
        currency: '€',
        rating: 5,
        favorite: false,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      },
      {
        product: 'Jamon',
        id: 2,
        price: 1000,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'P. Escobar',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'M.A. Nestle',
        rating: 2,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Jamón',
    id: 2,
    price: 2500,
    currency: '€',
    rating: 5,
    favorite: false,
    description:
      'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
    similarProducts: [
      {
        product: 'Tortilla',
        id: 3,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Aceitunas',
        id: 5,
        price: 500,
        currency: '€',
        rating: 4.2,
        favorite: false,
        description: 'Aceitunas jugosas y llenas de sabor.',
      },
      {
        product: 'Tomaco',
        id: 0,
        price: 1000,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Stan Marsh',
        rating: 1,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Randy Marsh',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'primer día, 2023',
      },
    ],
  },
  {
    product: 'Tortilla',
    id: 3,
    price: 200,
    currency: '€',
    rating: 3.1,
    favorite: false,
    description:
      'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
    similarProducts: [
      {
        product: 'Aceitunas',
        id: 5,
        price: 500,
        currency: '€',
        rating: 4.2,
        favorite: false,
        description: 'Aceitunas jugosas y llenas de sabor.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Tortillas Girar',
        rating: 5,
        opinion:
          'Me gusta la tortilla, me gusta la tortilla que buena la tortilla.',
        date: 'Ayer por la tarde, 2023',
      },
    ],
  },
  {
    product: 'Queso Curado',
    id: 4,
    price: 1500,
    currency: '€',
    rating: 3,
    favorite: false,
    description: 'Un queso con un sabor intenso y textura firme.',
    similarProducts: [
      {
        product: 'Tortilla',
        id: 3,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Naranjas',
        id: 6,
        price: 300,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description: 'Naranjas frescas y llenas de zumo.',
      },
      {
        product: 'Tomaco',
        id: 0,
        price: 1000,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Stan Marsh',
        rating: 1,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Randy Marsh',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'primer día, 2023',
      },
    ],
  },
  {
    product: 'Aceitunas',
    id: 5,
    price: 500,
    currency: '€',
    rating: 2.2,
    favorite: false,
    description: 'Aceitunas jugosas y llenas de sabor.',
    similarProducts: [
      {
        product: 'Tomate',
        id: 0,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tortilla',
        id: 3,
        price: 2500,
        currency: '€',
        rating: 5,
        favorite: false,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      },
      {
        product: 'Jamon',
        id: 2,
        price: 1000,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: null,
  },
  {
    product: 'Naranjas',
    id: 6,
    price: 300,
    currency: '€',
    rating: 4,
    favorite: false,
    description: 'Naranjas frescas y llenas de zumo.',
    similarProducts: [
      {
        product: 'Tortilla',
        id: 3,
        price: 200,
        currency: '€',
        rating: 3.5,
        favorite: false,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tomaco',
        id: 0,
        price: 1000,
        currency: '€',
        rating: 4.8,
        favorite: false,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Stan Marsh',
        rating: 1,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Randy Marsh',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'primer día, 2023',
      },
    ],
  },
];

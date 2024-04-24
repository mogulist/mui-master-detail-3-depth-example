import {
  randomCreatedDate,
  randomPrice,
  randomCurrency,
  randomCountry,
  randomCity,
  randomEmail,
  randomInt,
  randomAddress,
  randomCommodity,
} from "@mui/x-data-grid-generator";

function generateProducts() {
  const quantity = randomInt(1, 5);
  return [...Array(quantity)].map((_, index) => ({
    id: index,
    name: randomCommodity(),
    quantity: randomInt(1, 5),
    unitPrice: randomPrice(1, 1000),
  }));
}

export const rows = [
  {
    id: 1,
    customer: "Matheus",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
  {
    id: 2,
    customer: "Olivier",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
  {
    id: 3,
    customer: "Flavien",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
  {
    id: 4,
    customer: "Danail",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
  {
    id: 5,
    customer: "Alexandre",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
];

export type Customer = (typeof rows)[number];

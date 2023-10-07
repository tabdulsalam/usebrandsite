import Item1 from "../public/assets/images/item1.png";
import Item2 from "../public/assets/images/item2.png";
import Item3 from "../public/assets/images/item3.png";
import Item4 from "../public/assets/images/item4.png";
import Item5 from "../public/assets/images/item5.png";
import Item6 from "../public/assets/images/item6.png";
import Item7 from "../public/assets/images/item7.png";
import Item8 from "../public/assets/images/item8.png";
import Profile1 from "../public/assets/images/profile1.png";
import Profile2 from "../public/assets/images/profile2.png";
import Profile3 from "../public/assets/images/profile3.png";
import Profile4 from "../public/assets/images/profile4.png";

export const items: Item[] = [
  {
    id: 1,
    itemImage: Item1,
    profileImage: Profile1,
    price: "N20,000.00",
    nameOfItem: "Nike Blazers 2021",
    noOfComment: 7,
    noOfLikes: 25,
  },
  {
    id: 2,
    itemImage: Item2,
    profileImage: Profile2,
    price: "N60,000.00",
    nameOfItem: "Nike Blazers 2021",
    noOfComment: 9,
    noOfLikes: 67,
  },
  {
    id: 3,
    itemImage: Item3,
    profileImage: Profile3,
    price: "N14,000.00",
    nameOfItem: "Valentino Garavani",
    noOfComment: 3,
    noOfLikes: 16,
  },
  {
    id: 4,
    itemImage: Item4,
    profileImage: Profile4,
    price: "N13,000.00",
    nameOfItem: "Valentino Gown",
    noOfComment: 4,
    noOfLikes: 15,
  },
  {
    id: 5,
    itemImage: Item5,
    profileImage: Profile1,
    price: "N8,000.00",
    nameOfItem: "Stock Jeans ",
    noOfComment: 1,
    noOfLikes: 7,
  },
  {
    id: 6,
    itemImage: Item6,
    profileImage: Profile2,
    price: "N9,000.00",
    nameOfItem: "Fendi Armless Gown",
    noOfComment: 9,
    noOfLikes: 21,
  },
  {
    id: 7,
    itemImage: Item7,
    profileImage: Profile3,
    price: "N16,000.00",
    nameOfItem: "Stock Jeans Shirt",
    noOfComment: 5,
    noOfLikes: 13,
  },
  {
    id: 8,
    itemImage: Item8,
    profileImage: Profile4,
    price: "N12,000.00",
    nameOfItem: "Valentino Winter Coat",
    noOfComment: 7,
    noOfLikes: 25,
  },
];

interface Item {
  id: number;
  itemImage: any;
  profileImage: any;
  price: string;
  nameOfItem: string;
  noOfComment: number;
  noOfLikes: number;
}

export const Locations = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Abuja (FCT)",
];

export const Brands = [
  "Chanel",
  "Louis Vuitton",
  "Gucci",
  "Prada",
  "Hermès",
  "Dior",
  "Burberry",
  "Fendi",
  "Balenciaga",
  "Valentino",
  "Versace",
  "Givenchy",
  "Cartier",
  "Tiffany & Co.",
  "Rolex",
  "Bvlgari",
  "Jimmy Choo",
  "Alexander McQueen",
  "Bottega Veneta",
  "Celine",
  "Christian Louboutin",
  "Yves Saint Laurent (YSL)",
  "Miu Miu",
  "Salvatore Ferragamo",
  "Bottega Veneta",
  "Dolce & Gabbana",
  "Ralph Lauren",
  "Tom Ford",
  "Chloe",
  "Prabal Gurung",
  "Marc Jacobs",
  "Calvin Klein",
  "Nike",
];

export const Category = [
  "Shoe",
  "Bag",
  "Shirt",
  "Trouser",
  "Accessories",
  "Sport wears",
  "Sneakers",
];
export const Delivery = ["All", "PickUp", "Customer Services"];
export const Condition = ["Brand New", "Rarely Used", "Very Used"];
export const Sex = ["Male", "Female", "Unisex"];

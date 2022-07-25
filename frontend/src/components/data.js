import imgg from '../asset/img/last-03.jpg';

const designers = [
  {
    id: 1,
    avatar: imgg,
    name: 'eyosiyas',
    rating: '4',
    username: 'johnthelegend',
    bio: '26 years old graphics designer from ethiopia',
  },
  {
    id: 2,
    avatar: imgg,
    name: 'jonah',
    rating: '3',
  },
  {
    id: 3,
    avatar: imgg,
    name: 'johnny',
    rating: '5',
  },
];

const designs = [
  {
    id: 1,
    title: 'logo',
    image: imgg,
    designer: 'senper',
    designerId: 1,
    description:
      'here are actually three possible values for the crossorigin attribute: anonymous, use-credentials, and an missing value default that can only be accessed by omitting the attribute. (An empty string, on the other hand, maps to anonymous.) The default value causes the browser to ski',
    client: 'senper',
  },
  {
    id: 2,
    title: 'poster',
    image: imgg,
    designer: 'senper',

    designerId: 2,
    description:
      'here are actually three possible values for the crossorigin attribute: anonymous, use-credentials, and an missing value default that can only be accessed by omitting the attribute. (An empty string, on the other hand, maps to anonymous.) The default value causes the browser to ski',

    client: 'no one',
  },
];

export const product_arr = [];

export const getDesigners = () => {
  return designers;
};

export const getDesigner = (id) => {
  return designers.find((designer) => designer.id === id);
};

export function getImages() {
  return designs;
}

export function getImage(id) {
  return designs.find((design) => design.id === id);
}

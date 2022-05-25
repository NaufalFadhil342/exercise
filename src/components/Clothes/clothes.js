import Card from '../UI/Card/card';
import ClothesItem from './ClothesItem/clothesItem';
import classes from './clothes.module.css';
import shirtImg from '../../Gambar/shirt.jpg';
import tshirtImg from '../../Gambar/t-shirt.jpg';
import pantsImg from '../../Gambar/pants.jpg';

const DUMMY_MEALS = [
  {
    id: 'm1',
    image: shirtImg,
    name: 'Shirt',
    description: 'Kemaja Hijau Lumut',
    price: 22.99,
  },
  {
    id: 'm2',
    image: tshirtImg,
    name: 'T-Shirt',
    description: 'Kaos Katun Biru',
    price: 17.5,
  },
  {
    id: 'm3',
    image: pantsImg,
    name: 'Pants',
    description: 'Celana Jeans Biru',
    price: 15.99,
  },
];

const Clothes = () => {
  const mealsList = DUMMY_MEALS.map((cloth) => <ClothesItem key={cloth.id} id={cloth.id} image={cloth.image} name={cloth.name} description={cloth.description} price={cloth.price} />);

  return (
    <section className={classes.clothes}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Clothes;

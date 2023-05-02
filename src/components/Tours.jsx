import Card from "./Card";

const tourismLocations = [
  {
    id: 1,
    name: "Petra",
    info: "some information about petra",
    image:
      "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 10,
  },
  {
    id: 2,
    name: "Wadi rum",
    info: "some information about rum",
    image:
      "https://images.pexels.com/photos/13458330/pexels-photo-13458330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 12,
  },
  {
    id: 3,
    name: "Jerash",
    info: "some information about Jerash",
    image:
      "https://images.pexels.com/photos/4216244/pexels-photo-4216244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 6,
  },
  {
    id: 4,
    name: "Madaba",
    info: "some information about Madaba",
    image:
      "https://media.istockphoto.com/id/146737795/photo/madaba-map.jpg?s=1024x1024&w=is&k=20&c=7hk9LfuYqTYwIUjCCSx8QTO1Ua8yO2tyHz1IHx_jOKE=",
    price: 8,
  },
  {
    id: 5,
    name: "Dead Sea",
    info: "some information about Dead Sea",
    image:
      "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 60,
  },
  {
    id: 6,
    name: "Zarqa",
    info: "some information about Zarqa",
    image:
      "https://images.pexels.com/photos/4553124/pexels-photo-4553124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 60,
  },
];

const Tours = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-24 place-items-center py-12">
      {tourismLocations.map((location) => (
        <Card key={location.id} image={location.image} title={location.name} />
      ))}
    </div>
  );
};

export default Tours;

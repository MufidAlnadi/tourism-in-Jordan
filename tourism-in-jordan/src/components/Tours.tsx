import TouristPlaces from "./TouristPlace";

interface TouristPlace {
  id: number;
  image: string;
  name: string;
  info: string;
  price: number;
}

const Tours = () => {
  return (
    
    <div className="flex flex-wrap justify-center pb-8">
      {TouristPlaces.map((place: TouristPlace) => (
        <div
          key={place.id}
          className="max-w-md mx-4 my-6 bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <img
            className="w-full h-48 object-cover"
            src={place.image}
            alt={place.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{place.name}</div>
            <p className="text-gray-700 text-base">{place.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tours;

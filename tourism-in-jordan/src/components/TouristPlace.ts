interface TouristPlaceProps {
  id: number;
  image: string;
  name: string;
  info: string;
  price: number;
}
 const TouristPlaces: TouristPlaceProps[] = [
   {
     id: 1,
     image:
       "https://i0.wp.com/jordantraveler.com/wp-content/uploads/2022/04/One-Day-in-Petra-Treasury-1.jpg?ssl=1",
     name: "Petra",
     info: "Some information about Petra",
     price: 50,
   },
   {
     id: 2,
     image:
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7e/4c/1c/wadi-rum-bedouin-camp.jpg?w=700&h=-1&s=1",
     name: "Wadi Rum",
     info: "Some information about Wadi Rum",
     price: 25,
   },
   {
     id: 3,
     image:
       "https://upload.wikimedia.org/wikipedia/commons/2/21/Dead_Sea_by_David_Shankbone.jpg",
     name: "Dead Sea",
     info: "Some information about the Dead Sea",
     price: 10,
   },
   {
     id: 4,
     image:
       "https://www.travelandleisure.com/thmb/eWELFt4YmdnY4Y-HcNkOmmANIag=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nymphaeum-jerash-jordan-JERASH0315-5cd6775be954456790392a896099c864.jpg",
     name: "Jerash",
     info: "Some information about Jerash",
     price: 15,
   },
   {
     id: 5,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaFrpU-gWby_yUQx4taMZ8CDj6eXsVz1dLA&usqp=CAU",
     name: "Aqaba",
     info: "Some information about Aqaba",
     price: 20,
   },
   {
     id: 6,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUlLXfw1UO-IB07L9Rrkg-h1VbLO-393b-w&usqp=CAU",
     name: "Amman Citadel",
     info: "Some information about the Amman Citadel",
     price: 5,
   },
   {
     id: 7,
     image:
       "https://en.unesco.org/sites/default/files/cover_dana_biosphere_reserve_jordan.jpg",
     name: "Dana Biosphere Reserve",
     info: "Some information about the Dana Biosphere Reserve",
     price: 10,
   },
   {
     id: 8,
     image:
       "https://safeandhealthytravel.com/wp-content/uploads/2022/02/share4-2.jpg",
     name: "Wadi Mujib",
     info: "Some information about Wadi Mujib",
     price: 12,
   },
 ];

export default TouristPlaces;

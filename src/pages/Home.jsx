import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios
  //       .get("https://www.themealdb.com/api/json/v1/1/categories.php") // Your local JSON Server endpoint
  //       .then((response) => {
  //         console.log(response.data);
  //         setMenu(response.data.categories);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //         setLoading(false);
  //         console.error("Error details:", err.response?.data || err.message);
  //       });
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error fetching data: {error.message}</div>;
  // }
  console.log("hi");
  return (
    <div>
      <Nav></Nav>
      <div>Chicken beef dessert pasta seafood vegan Vegetarian other</div>
    </div>
  );
};

export default Home;
// <div className="mx-6">
//   <h1>Meal Categories</h1>
//   <div className="">
//     {menu.map((item, index) => (
//       <div
//         key={index}
//         className="w-[100%] flex flex-col items-center justify-center border"
//       >
//         <h3>{item.strCategory}</h3>
//         <img
//           src={item.strCategoryThumb}
//           alt={item.strCategory}
//           className="w-32 h-32 object-cover"
//         />
//         <p>{item.strCategoryDescription}</p>
//       </div>
//     ))}
//   </div>
// </div>

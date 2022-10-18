import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);
  // Need a way to delete a tour
  const deleteTour = (id) => {
    setTours(tours.filter((el) => el.id !== id));
  };
  const fetchTours = async () => {
    setloading(true);
    try {
      const reponse = await fetch(url);
      const tours = await reponse.json();
      setloading(false);
      setTours(tours);
    } catch (error) {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}></Tours>
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // console.log(response.data);

        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.data);
      }
    };
    console.log(data);
    fechData();
  }, []);
  return isLoading ? (
    <p>Is Loading</p>
  ) : (
    <div>
      <h1>PERSONNAGE</h1>
      {data.results.map((characters) => {
        return (
          <div key={characters._id} className="perso">
            <div>{characters.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;

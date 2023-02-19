import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Information = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  //   console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters?id=${id}`
        );
        setData(response.data);

        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div classeName="information">
      <h1>INFORMATIONS</h1>
      {data.results.map((characters) => {
        return (
          <div key={characters._id}>
            <h2>{characters.name}</h2>
            <img
              src={
                characters.thumbnail.path + "." + characters.thumbnail.extension
              }
              alt=""
            />

            <p>{characters.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Information;

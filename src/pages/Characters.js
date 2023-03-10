import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters?name=${search}`
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };
    console.log(data);
    fechData();
  }, [search]);
  return isLoading ? (
    <p>Is Loading</p>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Rechercher des articles ..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {data.results.map((characters) => {
        return (
          <Link
            key={characters._id}
            className="characters"
            to={`/information/${characters._id}`}
          >
            <h2>{characters.name}</h2>
            <img
              src={
                characters.thumbnail.path + "." + characters.thumbnail.extension
              }
              alt=""
            />
            <p>{characters.description}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Characters;

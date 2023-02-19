import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fechData = async () => {
      try {
        // j'envoi une requête à mon back (en envoyant l'adresse avec le numéro du port auquel on fait tourner le server
        // dans mon back j'ai app.listen(4000, () => {console.log("Server started🚀");});)
        //
        //
        const response = await axios.get(
          `http://localhost:4000/comics?title=${search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };
    fechData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Rechercher des articles ..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {data.results.map((comics) => {
        return (
          <div key={comics._id} className="comics">
            <div className="title">
              <h2>{comics.title}</h2>
            </div>

            <img
              src={comics.thumbnail.path + "." + comics.thumbnail.extension}
              alt=""
            />

            <p>{comics.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;

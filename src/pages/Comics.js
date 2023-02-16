import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fechData = async () => {
      try {
        // j'envoi une requête à mon back (en envoyant l'adresse avec le numéro du port auquel on fait tourner le server
        // dans mon back j'ai app.listen(4000, () => {console.log("Server started🚀");});)
        //
        //
        const response = await axios.get("http://localhost:4000/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };
    fechData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {/* <h1>Les Comics</h1> */}
      {data.results.map((comics) => {
        return (
          <div key={comics._id} className="comics">
            <div className="popo">
              <div>{comics.title}</div>
              <img
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt=""
              />
            </div>

            <div className="description">
              <div>{comics.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;

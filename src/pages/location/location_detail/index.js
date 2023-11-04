import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_LOCATION } from "../../../queries/location_query";

const LocationDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: id.toString() },
  });
  const location = data && data.location;
  return (
    <div>
      {location && (
        <div className="flex justify-center items-center w-full mb-20">
          <div className="text-3xl pl-4">
            <h1 className="text-7xl font-bold mb-5">{location.name}</h1>
            <h1 className="mb-3">{`Type : ${location.type}`}</h1>
            <h1 className="mb-3">{`Dimension : ${location.dimension}`}</h1>
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default LocationDetail;

import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_LOCATION } from "../../../queries/location_query";
import { BsPinFill } from "react-icons/bs";

const LocationDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: id.toString() },
  });
  const location = data && data.location;
  return (
    <div>
      {location && (
        <div className="flex justify-center items-center w-full mb-20 flex-col md:flex-row  gap-10">
          <BsPinFill className="text-7xl font-bold transform rotate-45 text-lightBlue" />

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold mb-5 ">{location.name}</h1>
            <h1 className="text-3xl font-bold mb-3">{`Type : ${location.type}`}</h1>
            <h1 className="text-3xl font-bold mb-3">{`Dimension : ${location.dimension}`}</h1>
          </div>
        </div>
      )}
      {location && (
        <div className="flex justify-center items-center w-full mb-20 flex-col">
          <h1 className=" text-3xl pl-4 font-bold mb-5">
            {location.residents.length} Known Resident
            {location.residents.length > 1 ? "s" : ""}
          </h1>
          <div className="flex justify-center items-center w-full mb-20 flex-wrap gap-5">
            {location.residents.map((resident) => {
              return (
                <Link
                  to={"/character/" + resident.id}
                  className=" text-2xl font-bold text-lightBlue bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-20
                 rounded-md px-5 py-2"
                >
                  {resident.name}
                </Link>
              );
            })}
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

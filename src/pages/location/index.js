import { useEffect } from "react";
import { LocationCard, Pagination, Search } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";

const LocationPage = () => {
  const { data, sendRequest: getLocations } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      await getLocations("location", true, true);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search />

        <div className="mb-20 flex flex-wrap items-center pl-20">
          {data &&
            data.map((location) => {
              return (
                <LocationCard
                  key={location.id}
                  to={Route.LOCATION + "/" + location.id}
                  character={location}
                />
              );
            })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default LocationPage;

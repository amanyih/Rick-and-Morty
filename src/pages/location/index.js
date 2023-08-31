import { useEffect, useState } from "react";
import { LocationCard, Pagination, Search } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";

const LocationPage = () => {
  const { data, sendRequest: getLocations } = useHttp();
  const [page, setPage] = useState(1);

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
    await getLocations(`location/?page=${selected}`, true, true);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getLocations("location", true, true);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search placeholder={"Search Locations"} />

        <div className="mb-20 flex flex-wrap items-center pl-20">
          {data &&
            data.map((location) => {
              return (
                <LocationCard
                  key={location.id}
                  to={Route.LOCATION + "/" + location.id}
                  location={location}
                />
              );
            })}
        </div>
        <Pagination onPageChange={handlePageChange} pageCount={7} />
      </div>
    </div>
  );
};

export default LocationPage;

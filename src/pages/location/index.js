import { useEffect, useState } from "react";
import { LocationCard, Pagination, Search } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../queries/location_query";

const LocationPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: page, filter: filter },
  });
  const locations = data && data.locations.results;

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search placeholder={"Search Locations"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {locations &&
            locations.map((location) => {
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

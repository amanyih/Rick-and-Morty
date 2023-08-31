import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="justify-self-end mt-auto">
      <ReactPaginate
        pageCount={20}
        className="flex  text-4xl px-4 py-6 items-center rounded-lg dark:border-lightBlue"
        activeClassName="bg-lightGreen dark:bg-lightBlue text-bold"
        pageClassName="mx-1 px-6 py-2 border-2 dark:border-lightBlue"
        previousLabel="Prev"
        previousClassName="mr-2"
        nextClassName="ml-2"
      />
    </div>
  );
};

export default Pagination;

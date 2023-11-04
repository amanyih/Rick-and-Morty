import ReactPaginate from "react-paginate";

const Pagination = ({ onPageChange, pageCount }) => {
  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageCount={pageCount}
      className=" flex items-center justify-center mb-20 text-lightBlue dark:text-lightGreen text-2xl"
      activeClassName=" bg-lightBlue dark:bg-lightGreen text-white dark:text-white rounded-full"
      pageClassName=" cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:bg-lightBlue dark:hover:bg-lightGreen rounded-full text-lightBlue dark:text-white"
      previousLabel="Previous"
      nextLabel="Next"
      previousClassName="mr-2"
      nextClassName="ml-2"
      initialPage={1}
    />
    // </div>
  );
};

export default Pagination;

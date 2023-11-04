//responsive filter
const Filter = ({ filterItems, setFilter, filter }) => {
  return (
    <div className=" w-full flex flex-col md:flex-row justify-center items-center flex-1 px-20 mb-20">
      <h1 className=" text-4xl font-bold text-center">{filterItems.title}</h1>
      <div className=" flex flex-row justify-center items-center gap-2">
        {filterItems.items.map((item, index) => (
          <span className="">
            <input
              name={filterItems.title}
              className="peer invisible"
              id={filterItems.title + "-" + item + `${index}`}
              radioGroup={filterItems.title}
              type="radio"
            />
            <label
              className="rounded-full px-4 py-1 cursor-pointer bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-slate-100 transition-colors duration-300 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-500 peer-checked:bg-lightBlue peer-checked:hover:bg-lightBlue 
              text-sm md:text-base lg:text-lg font-bold"
              htmlFor={filterItems.title + "-" + item + `${index}`}
              onClick={() =>
                setFilter({
                  ...filter,
                  [filterItems.title.toLowerCase()]: item,
                })
              }
            >
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;

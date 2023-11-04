//responsive filter
const Filter = ({ filterItems, setFilter, filter }) => {
  return (
    <div className="">
      {filterItems.map((item) => (
        <span
          key={item.title}
          className=" text-sm md:text-base lg:text-lg flex justify-center items-center m-2 "
        >
          {item.title}

          {item.items.map((itm, index) => (
            <span
              className=""
              onClick={() =>
                setFilter({ ...filter, [item.title.toLowerCase()]: itm })
              }
            >
              <input
                name={item.title}
                className="peer invisible"
                id={item.title + "-" + itm + `${index}`}
                radioGroup="first"
                type="radio"
              />
              <label
                className="rounded-full px-4 py-1 cursor-pointer bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-slate-100 transition-colors duration-300 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-500 peer-checked:bg-lightBlue peer-checked:hover:bg-lightBlue "
                htmlFor={item.title + "-" + itm + `${index}`}
              >
                {itm}
              </label>
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default Filter;

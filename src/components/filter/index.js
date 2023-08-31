const Filter = (props) => {
  return (
    <div className="my-5 mx-3">
      {props.filterItems.map((item) => (
        <span className=" text-3xl">
          {item.title}

          {item.items.map((itm, index) => (
            <span>
              <input
                className="peer invisible"
                id={item.title + "-" + itm + `${index}`}
                radioGroup="first"
                type="checkbox"
              />
              <label
                className="peer-checked:bg-lightGreen text-black px-6 py-1 transition-colors duration-500 bg-slate-200 rounded-full"
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

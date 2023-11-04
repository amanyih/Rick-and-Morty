const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={
        props.onChange
          ? (e) => {
              props.onChange(e.target.value);
            }
          : null
      }
      ref={props.ref}
      placeholder={props.placeholder}
      className="
        w-full
       px-6
        py-3
        
        text-black
        transition
        duration-500
        ease-in-out
        transform
        border-transparent
        rounded-lg
        bg-gray-100
        focus:outline-none
        focus:bg-white
        focus:ring-2
        focus:ring-lightBlue
        focus:border-transparent
        dark:bg-gray-700
        dark:text-white
        dark:placeholder-gray-400
        dark:focus:bg-gray-600
        dark:focus:ring-lightGreen
        dark:focus:border-transparents
      text-4xl

      "
    />
  );
};

export default Input;

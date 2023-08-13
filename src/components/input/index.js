const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      ref={props.ref}
      placeholder={props.placeholder}
      className={`text-black border-2 border-lightBlue focus:outline focus:outline-lightBlue focus:outline-2 focus:outline-offset-1 ${props.className}`}
    />
  );
};

export default Input;

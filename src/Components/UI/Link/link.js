const Link = (props) => {
  return (
    <a
      href={props.href}
      className="hover:cursor-pointer hover:text-lime-400 shadow-2xl"
    >
      {props.children}
    </a>
  );
};

export default Link;

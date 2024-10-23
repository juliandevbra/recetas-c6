const Card = ({ title, text, children }) => {
  //   console.log(props);
  //   const { title, text } = props;
  console.log(title, text, children);
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </>
  );
};

export default Card;

import gentlemen from "../../gentleman";

const Button = (): JSX.Element => {
  const selectAllGentlemen = () => {
    gentlemen.forEach((gentelmenIteration) => {
      gentelmenIteration.selected = true;
    });
  };

  const buttonText = "Select all";

  return (
    <button onClick={selectAllGentlemen} className="button button--select">
      {buttonText}
    </button>
  );
};

export default Button;

import gentlemen from "../../gentleman";
import Button from "../Button/Button";

const Info = (): JSX.Element => {
  const checkForSelectedGentlemen = () => {
    const counter = gentlemen.filter(
      (gentlemenCount) => gentlemenCount.selected === true
    ).length;
    let counterOfGentlemen = `${counter} gentlemen pointing at you`;
    return counterOfGentlemen;
  };

  return (
    <section className="controls">
      <p className="info">{checkForSelectedGentlemen()}</p>
      <Button />
    </section>
  );
};

export default Info;

import GentlemanStructure from "./types";

interface GentlemenProps {
  gentlemens: GentlemanStructure;
}

const Gentlemen = ({
  gentlemens: { name, picture, profession, status, twitter, alternativeText },
}: GentlemenProps): JSX.Element => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={`${name} pointing at you`}
        />
        <span className="gentleman__initial">{name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">{`Profession: ${profession}`}</span>
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{`Status: ${status}`}</span>{" "}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{`Twitter: ${twitter}`}</span>
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentlemen;

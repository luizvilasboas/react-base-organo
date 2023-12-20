import { AiFillCloseSquare, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./index.css";

const Colaborator = (props) => {
  return (
    <div className="colaborator">
      <AiFillCloseSquare
        id="delete-button"
        color="#FFF"
        size={25}
        onClick={() => props.onDelete(props.id)}
      />
      <div
        className="heading"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img src={props.image} alt={props.name} />
      </div>
      <div className="colaborator-footer">
        <h4>{props.name}</h4>
        <h5>{props.job}</h5>
        <div className="favorite">
          { props.favorite ? <AiFillHeart color="#FF0000" size={25} onClick={() => props.onFavorite(props.id)} /> : <AiOutlineHeart size={25} onClick={() => props.onFavorite(props.id)} /> }
        </div>
      </div>
    </div>
  );
};

export default Colaborator;

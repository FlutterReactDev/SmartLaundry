import IncreaseIcon from "./Increase.svg";
import DecreaseIcon from "./Decrease.svg";
import './ItemModalCounter.css'
function ItemModalCounter() {
  return (
    <div className="ModalCounter">
      <button>
        <img src={IncreaseIcon} alt="icon"/>
      </button>
      <div className="ModalCount">00</div>
      <button>
        <img src={DecreaseIcon} alt="icon"/>
      </button>
    </div>
  );
}

export default ItemModalCounter;

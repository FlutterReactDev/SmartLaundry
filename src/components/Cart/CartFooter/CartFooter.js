import { Row } from "react-bootstrap";
import CartCounter from "./CartCounter/CartCounter";
import "./CartFooter.css";
import ClockIcon from "./clock.svg";
import ArrowUpIcon from "./arrowUp.svg";
function CartFooter() {
  return (
    <Row className="CartFooter">
      <div className="CartFooterItem">
        <CartCounter />
      </div>
      <div className="CartFooterSend">
        <Row>
          <button className="CartFooterBtn">Отправить</button>
        </Row>

        <button className="SendIconBtn">
          <img src={ClockIcon} alt="clock" />
        </button>
        <button className="SendIconBtn">
          <img src={ArrowUpIcon} alt="arrow" />
        </button>
      </div>
    </Row>
  );
}

export default CartFooter;

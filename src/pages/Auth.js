import { Form } from "react-bootstrap";
import "../Auth.css";
import LogoutIcon from "./logout.svg";
function Auth() {
  return (
    <div className="Auth">
      <div className="AuthForm">
        <div className="AuthFormContent">
          <div className="AuthFormTitle">Авторизация сотрудника</div>
          <Form>
            <Form.Group className="FormGroup">
              <Form.Control type="text" placeholder="+7 (000) 000-00-00" />
            </Form.Group>
            <Form.Group className="FormGroup">
              <Form.Control type="text" placeholder="Пинкод" />
            </Form.Group>
          </Form>
        </div>
        <div className="AutoFormFooter">
          <button className="AutoFormBtn AuthLoginBtn">
            Открыть рабочее место
          </button>

          <button className="AutoFormBtn AuthLogoutBtn">
            <img src={LogoutIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="AuthFooter">
        <div className="AuthFooterLogo">Smart Laundry</div>
        <div>Помощь</div>
        <div className="AuthFooterCopyright">© Smart Laundry, 2005 – 2022</div>
      </div>
    </div>
  );
}

export default Auth;

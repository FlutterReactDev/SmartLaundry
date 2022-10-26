import { Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "./Close.svg";
import PrintIcon from "./Print.svg";
import "./ItemModal.css";
import ItemModalCounter from "./ItemModalCounter/ItemModalCounter";
function ItemModal({ setItemModal, show }) {
  return (
    <Modal
      className="ItemModal"
      dialogClassName="ItemModalWidth"
      show={show}
      onHide={setItemModal}  
    >
      <div className="ItemModalHeader">
        <div className="ItemModalHeaderTitle">Рубашка</div>
        <div
          className="ItemModalHeaderClose"
          onClick={() => setItemModal(false)}
        >
          <img src={CloseIcon} alt="close" />
        </div>
      </div>
      <div className="ItemModalBody">
        <Form>
          <Form.Group className="FormGroup">
            <Form.Label>Цвет</Form.Label>
            <Form.Select>
              <option>Placeholder</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="FormGroup">
            <Form.Label>Повреждения</Form.Label>
            <Form.Select>
              <option>Placeholder</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="FormGroup">
            <Form.Label>Загрязнения</Form.Label>
            <Form.Select>
              <option>Placeholder</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="FormGroup">
            <Form.Label>Фото</Form.Label>
            <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group className="FormGroup">
            <Form.Label>Заметки</Form.Label>
            <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <div className="ItemModalBodyTitle">Количество</div>
            <ItemModalCounter />
          </Col>
          <Col>
            <div className="ItemModalBodyTitle">Распечатать штрих-код</div>
            <button className="PrintBtn">
              <img src={PrintIcon} alt="" /> На печать
            </button>
          </Col>
        </Row>
      </div>
      <div className="ItemModalFooter">
        <button>Отправить</button>
        <div className="ItemModalFooterBtn">
          <div className="ModalFooterIcon">
            <img src={PrintIcon} alt="" />
          </div>
          <div>Распечатать штрих-код</div>
        </div>
      </div>
    </Modal>
  );
}

export default ItemModal;

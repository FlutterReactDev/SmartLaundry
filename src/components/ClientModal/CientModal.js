import { Col, Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./ClientModal.css";
import CloseIcon from "./Close.svg";
function ClientModal({ show, setClientModal }) {
  return (
    <Modal
      className="ClientModal"
      dialogClassName="ClientModalWidth"
      contentClassName="ClientModalWidth"
      show={show}
      onHide={setClientModal}
    >
      <div className="ClientModalHeader">
        <div className="ClientModalHeaderTitle">Новый клиент</div>
        <div
          className="ClientModalHeaderClose"
          onClick={() => setClientModal(false)}
        >
          <img src={CloseIcon} alt="close" />
        </div>
      </div>
      <div className="ClientModalBody">
        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group className="FormGroup">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    className=""
                    type="text"
                    placeholder="Placeholder"
                  />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Эл. адрес</Form.Label>
                  <Form.Control type="email" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Заметки</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Заметки к заказу</Form.Label>
                  <Form.Control type="имя" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Инструкции водителю</Form.Label>
                  <Form.Control type="имя" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Тип платежа</Form.Label>
                  <Form.Select>
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Скидка (%)</Form.Label>
                  <Form.Control type="имя" placeholder="Placeholder" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="FormGroup">
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Город</Form.Label>
                  <Form.Control type="email" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Улица</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Номер квартиры</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Почтовый индекс</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
                <Form.Group className="FormGroup">
                  <Form.Label>Кредит</Form.Label>
                  <Form.Control type="text" placeholder="Placeholder" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      <div className="ClientModalFooter">
        <button>Отправить</button>
      </div>
    </Modal>
  );
}

export default ClientModal;

import CRUD from "../service/crud";
import React from "react";
import TBContent from "./TBContent";
import FormInput from "./FormInput";
import { Container, Row, Col } from 'reactstrap';
function Customers() {
    const [listItems, setListItems] = React.useState([]);
    const [status, setStatus] = React.useState(false);
    const [selectItem, setSelectItem] = React.useState(null);
    const notifyData = () => {
        CRUD.getAllCust().then((res) => {
            setListItems(res.data.data);
            console.log(listItems);
            setStatus(false);
        });
    };
    React.useEffect(() => {
        notifyData();
    }, [status]);

    const onSelectItem = (item) => {
        setSelectItem(item);
    }
    const onChangeStatus = (status) => {
        setStatus(status);
    }

    const [modal, setModal] = React.useState(false);

    return (
        <Container fluid={true}>
            <Row>
                <Col xs="12">
                    <TBContent setModal = {setModal} onSelectItem = {onSelectItem} items={listItems} onChangeStatus={onChangeStatus} />
                </Col>
                <Col xs="0">
                    <FormInput modal = {modal} setModal = {setModal} onSelectItem = {onSelectItem} selectItem = {selectItem} onChangeStatus={onChangeStatus} />
                </Col>
            </Row>
        </Container>
    );

}
export default Customers;
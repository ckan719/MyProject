import CRUD from "../service/crud";
import React from "react";
import TBContent from "./TBContent";
import FormInput from "./FormInput";
import { Container, Row, Col } from 'reactstrap';
function Shippers() {
    const [listItems, setListItems] = React.useState([]);
    const [status, setStatus] = React.useState(false);
    const [selectItem, setSelectItem] = React.useState(null);
    const notifyData = () => {
        CRUD.getAllShip().then((res) => {
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

    return (
        <Container fluid={true}>
            <Row>
                <Col xs="7">
                    <TBContent onSelectItem = {onSelectItem} items={listItems} onChangeStatus={onChangeStatus} />
                </Col>
                <Col xs="5">
                    <FormInput onSelectItem = {onSelectItem} selectItem = {selectItem} onChangeStatus={onChangeStatus} />
                </Col>
            </Row>
        </Container>
    );
}
export default Shippers;
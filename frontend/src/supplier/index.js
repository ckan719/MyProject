import CRUD from "../service/crud";
import React from "react";
import TBContent from "./TBContent";
import FormInput from "./FormInput";
import { Container, Row, Col } from 'reactstrap';
function Supplier() {
    const [listItems, setListItems] = React.useState([]);
    const [status, setStatus] = React.useState(false);
    const [selectItem, setSelectItem] = React.useState(null);
    const notifyData = () => {
        CRUD.getAllSup().then((res) => {
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
                <Col xs="10">
                    <TBContent onSelectItem = {onSelectItem} items={listItems} onChangeStatus={onChangeStatus} />
                </Col>
                <Col xs="2">
                    <FormInput onSelectItem = {onSelectItem} selectItem = {selectItem} onChangeStatus={onChangeStatus} />
                </Col>
            </Row>
        </Container>
    );
}
export default Supplier;
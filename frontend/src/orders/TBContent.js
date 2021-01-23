import React from 'react';
import CRUD from '../service/crud';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;

    const { setModal } = props;
    const [md, setMd] = React.useState(false);
    const togglee = () => {
        setMd(!md);
    }

    function handleClickDeleteOrder(id) {
        console.log(id);
        CRUD.delete_Order_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditOrder(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:12}}>
            <thead>
                <tr style={{fontSize:12}}>
                    <th>ID</th>
                    <th>Custommer ID</th>
                    <th>Employee ID</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Ship Date</th>
                    <th>Shipper Id</th>
                    <th>Freight</th>
                    <th>Ship Name</th>
                    <th>Ship Address</th>
                    <th>Ship City</th>
                    <th>Ship Region</th>
                    <th>Postal Code</th>
                    <th>Ship Country</th>
                    <th></th>
                </tr>
            </thead>
            <tbody style={{fontSize:12}}>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.order_id}</th>
                        <td>{item.customer_id}</td>
                        <td>{item.employee_id}</td>
                        <td>{item.order_date}</td>
                        <td>{item.required_date}</td>
                        <td>{item.shipped_date}</td>
                        <td>{item.ship_via}</td>
                        <td>{item.freight}</td>
                        <td>{item.ship_name}</td>
                        <td>{item.ship_address}</td>
                        <td>{item.ship_city}</td>
                        <td>{item.ship_region}</td>
                        <td>{item.ship_postal_code}</td>
                        <td>{item.ship_country}</td>
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button>{'  '}
                            <Button onClick={() => handleClickEditOrder(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteOrder(item.order_id)}>Xóa</Button>{' '}
                                <Button color="secondary" onClick={togglee}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
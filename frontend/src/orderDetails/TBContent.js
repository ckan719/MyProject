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

    function handleClickDeleteOde(id) {
        console.log(id);
        CRUD.delete_ode_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditOde(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:15}}>
            <thead>
                <tr>
                    <th>OrderDetails ID</th>
                    <th> Order ID</th>
                    <th> Product ID</th>
                    <th> Unit Price</th>
                    <th> Quantity</th>
                    <th> Discount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.order_details_id}</th>
                        <td>{item.order_id}</td>
                        <td>{item.product_id}</td>
                        <td>{item.unit_price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.discount}</td>
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button> {'  '}
                            <Button onClick={() => handleClickEditOde(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteOde(item.order_details_id)}>Xóa</Button>{' '}
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
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
    function handleClickDeletePro(id) {
        console.log(id);
        CRUD.delete_pro_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditPro(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:15}}>
            <thead>
                <tr>
                    <th> Product ID</th>
                    <th>Product Name</th>
                    <th>Supplier ID</th>
                    <th>Category ID </th>
                    <th>Quantity per Unit </th>
                    <th>Unit Price </th>
                    <th>Units in Stock  </th>
                    <th>Units on Order </th>
                    <th>Reorder Level </th>
                    <th>Discontinued  </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.product_id}</th>
                        <td>{item.product_name}</td>
                        <td>{item.supplier_id}</td>
                        <td>{item.category_id}</td>
                        <td>{item.quantity_per_unit}</td>
                        <td>{item.unit_price}</td>
                        <td>{item.units_in_stock}</td>
                        <td>{item.units_on_order}</td>
                        <td>{item.reorder_level}</td>
                        <td>{item.discontinued}</td>
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button> {'  '}
                            <Button onClick={() => handleClickEditPro(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeletePro(item.product_id)}>Xóa</Button>{' '}
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
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
    function handleClickDeleteShip(id) {
        console.log(id);
        CRUD.delete_Ship_by_id(id).then((res) => {
            toast("Xóa thành công !");
            onChangeStatus(true);
            setMd(false);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditShip(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{ fontSize: 15 }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope='row' >{item.shipper_id}</th>
                        <td>{item.company_name}</td>
                        <td>{item.phone}</td>
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button>{'  '}
                            <Button onClick={() => handleClickEditShip(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteShip(item.shipper_id)}>Xóa</Button>{' '}
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
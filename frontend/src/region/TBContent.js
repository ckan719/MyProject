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

    function handleClickDeleteReg(id) {
        CRUD.delete_reg_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }

    function handleClickEditReg(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{ fontSize: 15 }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Region Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope="row" >{item.region_id}</th>
                        <td>{item.region_description}</td>
                        <td style={{ 'width': '10%' }} >
                            <Button onClick={togglee}>Del</Button>{'  '}
                            <Button onClick={() => handleClickEditReg(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteReg(item.region_id)}>Xóa</Button>{' '}
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
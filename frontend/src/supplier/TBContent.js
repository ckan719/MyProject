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
    function handleClickDeleteSup(id) {
        console.log(id);
        CRUD.delete_sup_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditSup(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:15}}>
            <thead style={{fontSize:11}}>
                <tr>
                    <th>Supplier ID </th>
                    <th> Company Name </th>
                    <th> Contact Name </th>
                    <th> Contact Title</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code </th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Fax</th>
                    <th>Homepage</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.supplier_id}</th>
                        <td>{item.company_name}</td>
                        <td>{item.contact_name}</td>
                        <td>{item.contact_title}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.region}</td>
                        <td>{item.postal_code}</td>
                        <td>{item.country}</td>
                        <td>{item.phone}</td>
                        <td>{item.fax}</td>
                        <td>{item.homepage}</td>
                      
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button>{'  '}
                            <Button onClick={() => handleClickEditSup(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteSup(item.supplier_id)}>Xóa</Button>{' '}
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
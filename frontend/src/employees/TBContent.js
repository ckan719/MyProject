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
    function handleClickDeleteEmp(id) {
        console.log(id);
        CRUD.delete_emp_by_id(id).then((res) => {
            toast("Xóa thành công !");
            setMd(false);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
            setMd(false);
        });
    }
    function handleClickEditEmp(item) {
        setModal(true);
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:15}}>
            <thead>
                <tr style={{fontSize:15}}>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Title</th>
                    <th>Title Of Courtesy</th>
                    <th>Birth Day</th>
                    <th>Hire Day</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Home Phone</th>
                    <th>Extension</th>
                    <th>Photo</th>
                    <th>Notes</th>
                    <th>Photo Path</th>
                    <th></th>
                </tr>
            </thead>
            <tbody style={{fontSize:15}}>
                {items.map((item, index) => (
                    
                    <tr key={index} >
                        <th scope='row' >{item.employee_id}</th>
                        <td>{item.last_name}</td>
                        <td>{item.first_name}</td>
                        <td>{item.title}</td>
                        <td>{item.title_of_courtesy}</td>
                        <td>{item.birth_date}</td>
                        <td>{item.hire_date}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.region}</td>
                        <td>{item.postal_code}</td>
                        <td>{item.country}</td>
                        <td>{item.home_phone}</td>
                        <td>{item.extension}</td>
                        <td>{item.photo}</td>
                        <td>{item.notes}</td>
                        <td>{item.photo_path}</td>
                        <td style={{ 'width': '10%' }}>
                            <Button onClick={togglee}>Del</Button> {'  '}
                            <Button onClick={() => handleClickEditEmp(item)}>Edit</Button>
                        </td>
                        <Modal isOpen={md} toggle={togglee}>
                            <ModalHeader toggle={togglee}>Modal title</ModalHeader>
                            <ModalBody>
                                Bạn có chắc chắn muốn xóa ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => handleClickDeleteEmp(item.employee_id)}>Xóa</Button>{' '}
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
import React, { useEffect } from 'react';
import CRUD from '../service/crud';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function FormInput(props) {
    var { onChangeStatus } = props;
    const { onSelectItem } = props;
    const { selectItem } = props;
    const [status, setStatus] = React.useState(false);
    const [postData, setPostData] = React.useState({
        shipper_id: "",
        company_name: "",
        phone: ""
    });

    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);

    const df = {
        shipper_id: "",
        company_name: "",
        phone: ""
    }
    function onChangeData(e) {
        e.preventDefault();
        var name = e.target.name;
        var data = { ...postData, }
        data[name] = e.target.value;
        setPostData(data);
    }

    function handleOnClickOK(e) {
        e.preventDefault();
        console.log(postData);
        if (selectItem === null) {
            CRUD.insertShip(postData).then((res) => {
                if (res.data.message === "Insert Success!") {
                    toast('Thêm thành công !');
                    onChangeStatus(true);
                    setPostData(df);
                    setStatus(true);
                    setModal(false);
                } else {
                    toast('Thêm thất bại !');
                }

            }).catch((err) => {
                toast(err);
setModal(false);
                setModal(false);
            });
        } else {
            CRUD.updateShip(postData).then(res => {
                if (res.data.message === "Update Success !") {
                    toast('Cập nhập thành công !');
                    onChangeStatus(true);
                    onSelectItem(null);
                    setPostData(df);
                    setStatus(true);
                    setModal(false);
                } else {
                    toast('Cập nhập thất bại !');
                    setModal(false);
                }

            });

        }
    }

    const notifyData = () => {
        setStatus(false);
        if (selectItem === null) {

        } else {
            setPostData(selectItem);
        }
    }


    useEffect(() => {
        notifyData();
    }, [status, selectItem])

    return (
        <div style={{'position' : 'relative'}}>
            <button className = 'btnADD' onClick = {toggle} >📝</button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Form</ModalHeader>
                <ModalBody>
                <Form>
                        <FormGroup>
                            <Input id="id" type="text" value={postData?.shipper_id} placeholder="ID" name="shipper_id" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="company_name" value={postData?.company_name} placeholder="Company Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.phone} name="phone" placeholder="Phone" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleOnClickOK}>OK</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default FormInput;
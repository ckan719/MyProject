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
        region_id: "",
        region_description: "",
    });

    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);

    const df = {
        region_id: "",
        region_description: "",
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
            CRUD.insertReg(postData).then((res) => {
                if (res.data.message === "Insert Success!") {
                    toast('Thêm thành công !');
                    setModal(false);
                    onChangeStatus(true);
                    setPostData(df);
                    setStatus(true);


                } else {
                    toast('Thêm thất bại !');
                    setModal(false);
                }

            }).catch((err) => {
                toast(err);
                setModal(false);
            });
        } else {
            CRUD.updateReg(postData).then(res => {

                if (res.data.message === "Update Success !") {
                    toast('Cập nhập thành công !');
                    setModal(false);
                    onChangeStatus(true);
                    onSelectItem(null);
                    setPostData(df);
                    setStatus(true);

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
        <div style={{ 'position': 'relative' }}>
            <button className='btnADD' onClick={toggle} >📝</button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input type="text" id='id' value={postData?.region_id} name="region_id" placeholder="Region ID" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.region_description} name="region_description" placeholder="Region Description" />
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
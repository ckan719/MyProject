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
        customer_id: "",
        company_name: "",
        contact_name: "",
        contact_title: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        phone: "",
        fax: "",
    });
    function onChangeData(e) {
        e.preventDefault();
        var name = e.target.name;
        var data = { ...postData, }
        data[name] = e.target.value;
        setPostData(data);
    }
    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);

    const df = {
        customer_id: "",
        company_name: "",
        contact_name: "",
        contact_title: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        phone: "",
        fax: "",
    }

    function handleOnClickOK(e) {
        e.preventDefault();
        console.log(postData);
        if (postData.customer_id === "" || postData.customer_id.length > 5) {
            alert("Vui lòng nhập đúng Customer ID");
            return;
        }
        if (selectItem === null) {
            CRUD.insertCust(postData).then((res) => {
                if (res.data.message === 'Insert Success!') {
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
            CRUD.updateCust(postData).then(res => {
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
                            <Input id='id' type="text" onChange={onChangeData} value={postData?.customer_id} name="customer_id" placeholder="ID" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="company_name" value={postData?.company_name} placeholder="Company Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.contact_name} name="contact_name" placeholder="Contact Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.contact_title} name="contact_title" placeholder="Contact Title" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="address" value={postData?.address} placeholder="Adress" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="city" value={postData?.city} placeholder="City" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="region" value={postData?.region} placeholder="Region" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="postal_code" value={postData?.postal_code} placeholder="Postal Code" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="country" value={postData?.country} placeholder="Country" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="phone" value={postData?.phone} placeholder="Phone" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="fax" value={postData?.fax} placeholder="Fax" />
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
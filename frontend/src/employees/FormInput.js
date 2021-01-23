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
        employee_id: "",
        last_name: "",
        first_name: "",
        title: "",
        title_of_courtesy: "",
        birth_date: "",
        hire_date: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        home_phone: "",
        extension: "",
        photo: "",
        notes: "",
        photo_path: ""
    });

    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);

    const df = {
        employee_id: "",
        last_name: "",
        first_name: "",
        title: "",
        title_of_courtesy: "",
        birth_date: "",
        hire_date: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        home_phone: "",
        extension: "",
        photo: "",
        notes: "",
        photo_path: ""
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
            CRUD.insertEmp(postData).then((res) => {
                console.log(res.data.message);
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
            CRUD.updateEmp(postData).then(res => {
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
            <button className='btnADD' onClick={toggle} >ADD</button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input id="id" type="text" value={postData?.employee_id} placeholder="ID" name="employee_id" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="last_name" value={postData?.last_name} placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.first_name} name="first_name" placeholder="Fist Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.title} name="title" placeholder="Title" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.title_of_courtesy} placeholder="Title Of Courtesy" name="title_of_courtesy" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="birth_date" value={postData?.birth_date} placeholder="Birth Day" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.hire_date} name="hire_date" placeholder="Hire Day" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.address} name="address" placeholder="Adress" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.city} placeholder="City" name="city" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="region" value={postData?.region} placeholder="Region" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.postal_code} name="postal_code" placeholder="Postal Code" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.country} name="country" placeholder="Country" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.home_phone} placeholder="Home Phone" name="home_phone" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="extension" value={postData?.extension} placeholder="Extension" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.photo} name="photo" placeholder="Photo" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.notes} name="notes" placeholder="Notes" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.photo_path} name="photo_path" placeholder="Photo Path" />
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
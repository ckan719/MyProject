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
    const [dataCustomer, setDataCustomer] = React.useState([]);
    const [dataEmployees, setDataEmployees] = React.useState([]);
    const [dataShiper, setDataShiper] = React.useState([]);
    const [postData, setPostData] = React.useState({
        order_id: "",
        customer_id: "",
        employee_id: "",
        order_date: "",
        required_date: "",
        shipped_date: "",
        ship_via: "",
        freight: "",
        ship_name: "",
        ship_address: "",
        ship_city: "",
        ship_region: "",
        ship_postal_code: "",
        ship_country: ""
    });
    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);
    const df = {
        order_id: "",
        customer_id: "",
        employee_id: "",
        order_date: "",
        required_date: "",
        shipped_date: "",
        ship_via: "",
        freight: "",
        ship_name: "",
        ship_address: "",
        ship_city: "",
        ship_region: "",
        ship_postal_code: "",
        ship_country: ""
    }
    function onChangeData(e) {
        e.preventDefault();
        var name = e.target.name;
        var data = { ...postData, }
        console.log(e.target.value);
        data[name] = e.target.value;
        setPostData(data);
    }

    function handleOnClickOK(e) {
        e.preventDefault();
        console.log(postData);
        if (selectItem === null) {
            CRUD.insertOrder(postData).then((res) => {
                console.log(res.data.message);
                if (res.data.message == "Insert Success!") {
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
            CRUD.updateOrder(postData).then(res => {
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
        // get Customer
        CRUD.getAllCust().then(res => {
            setDataCustomer(res.data.data);
        });
        // get Employees
        CRUD.getAllEmp().then(res => {
            setDataEmployees(res.data.data);
        });
        // get Shiper
        CRUD.getAllShip().then(res => {
            setDataShiper(res.data.data);
        });


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
                            <Input id="id" type="text" value={postData?.order_id} placeholder="ID" name="order_id" />
                        </FormGroup>
                        <FormGroup>

                            <Input type="select" onChange={onChangeData} name="customer_id" >
                                <option>Customer ID</option>
                                {
                                    dataCustomer.map(item => (
                                        <option>{item.customer_id}</option>
                                    ))
                                }
                            </Input>

                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="employee_id" >
                                <option>Employees ID</option>
                                {
                                    dataEmployees.map(item => (
                                        <option>{item.employee_id}</option>
                                    ))
                                }
                            </Input>

                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="order_date" value={postData?.order_date} placeholder="Order Date" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.required_date} name="required_date" placeholder="Required Date" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="shipped_date" value={postData?.shipped_date} placeholder="Ship Date" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="ship_via" >
                                <option>Shipper ID</option>
                                {
                                    dataShiper.map(item => (
                                        <option>{item.shipper_id}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="freight" value={postData?.freight} placeholder="Freight" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.ship_name} name="ship_name" placeholder="Ship Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="ship_address" value={postData?.ship_address} placeholder="Ship Address" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.ship_city} name="ship_city" placeholder="Ship City" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="ship_region" value={postData?.ship_region} placeholder="Ship Region" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.ship_postal_code} name="ship_postal_code" placeholder="Postal Code" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.ship_country} name="ship_country" placeholder="Ship Country" />
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
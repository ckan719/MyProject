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
    const [dataorder, setDataOrder] = React.useState([]);
    const [dataproducts, setDataProducts] = React.useState([]);
    const [postData, setPostData] = React.useState({
        order_details_id: "",
        order_id: "",
        product_id: "",
        unit_price: "",
        quantity: "",
        discount: ""
    });
    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);
    const df = {
        order_details_id: "",
        order_id: "",
        product_id: "",
        unit_price: "",
        quantity: "",
        discount: ""
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
            CRUD.insertOde(postData).then((res) => {
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
            CRUD.updateOde(postData).then(res => {
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
        // get Order
        CRUD.getAllOrder().then(res => {
            setDataOrder(res.data.data);
        });
        // get Products
        CRUD.getAllPro().then(res => {
            setDataProducts(res.data.data);
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
            <button className='btnADD' onClick={toggle} >📝</button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input id="id" type="text" value={postData?.order_details_id} placeholder="ID" name="order_details_id" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="order_id" >
                                <option>Order ID</option>
                                {
                                    dataorder.map(item => (
                                        <option>{item.order_id}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="product_id" >
                                <option>Products ID</option>
                                {
                                    dataproducts.map(item => (
                                        <option>{item.product_id}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="unit_price" value={postData?.unit_price} placeholder="Unit Price" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.quantity} name="quantity" placeholder=" Quantity" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.discount} name="discount" placeholder="Discount" />
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










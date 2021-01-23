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
    const [dataSupplier, setDataSupplier] = React.useState([]);
    const [dataCategories, setDataCategories] = React.useState([]);
    const [postData, setPostData] = React.useState({
        product_id: "",
        product_name: "",
        supplier_id: "",
        category_id: "",
        quantity_per_unit: "",
        unit_price: "",
        units_in_stock: "",
        units_on_order: "",
        reorder_level: "",
        discontinued: ""

    });
    const { modal } = props;
    const { setModal } = props;
    const toggle = () => setModal(!modal);

    const df = {
        product_id: "",
        product_name: "",
        supplier_id: "",
        category_id: "",
        quantity_per_unit: "",
        unit_price: "",
        units_in_stock: "",
        units_on_order: "",
        reorder_level: "",
        discontinued: ""
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
            CRUD.insertPro(postData).then((res) => {
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
            CRUD.updatePro(postData).then(res => {
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
        // get Categories
        CRUD.getAllCate().then(res => {
            setDataCategories(res.data.data);
        });
        // get Supplier
        CRUD.getAllSup().then(res => {
            setDataSupplier(res.data.data);
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
                            <Input id="id" type="text" value={postData?.product_id} placeholder="ID" name="product_id" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.product_name} name="product_name" placeholder="Description" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="supplier_id" >
                                <option>Supplier ID</option>
                                {
                                    dataSupplier.map(item => (
                                        <option>{item.supplier_id}</option>
                                    ))
                                }
                            </Input>

                        </FormGroup>
                        <FormGroup>
                            <Input type="select" onChange={onChangeData} name="category_id" >
                                <option>Category ID</option>
                                {
                                    dataCategories.map(item => (
                                        <option>{item.category_id}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.quantity_per_unit} name="quantity_per_unit" placeholder="quantity per unit" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.unit_price} name="unit_price" placeholder="unit price" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.units_in_stock} name="units_in_stock" placeholder="units in stock" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} name="units_on_order" value={postData?.units_on_order} placeholder="units on order" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.reorder_level} name="reorder_level" placeholder="reorder level" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onChange={onChangeData} value={postData?.discontinued} name="discontinued" placeholder="Discontinued" />
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

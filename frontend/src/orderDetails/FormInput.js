import React, { useEffect } from 'react';
import CRUD from '../service/crud';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function FormInput(props) {
    var { onChangeStatus } = props;
    const { onSelectItem } = props;
    const { selectItem } = props;
    const [status, setStatus] = React.useState(false);
    const [dataorder, setDataOrder] = React.useState([]);
    const [dataproducts, setDataProducts] = React.useState([]);
    const [postData, setPostData] = React.useState({
        order_details_id : "",
        order_id : "",
        product_id : "",
        unit_price : "",
        quantity  : "",
        discount  : ""
    });
    const df = {
        order_details_id : "",
        order_id : "",
        product_id : "",
        unit_price : "",
        quantity  : "",
        discount  : ""
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
                    alert(res.data.message);
                    onChangeStatus(true);
                    setPostData(df);
                    setStatus(true);
                } else {
                    alert("Insert Fail !");
                }
                
            }).catch((err) => {
                alert(err);
            });
        } else {
            CRUD.updateOde(postData).then(res => {
                if (res.data.message === "Update Success !") {
                    alert(res.data.message);
                    onChangeStatus(true);
                    document.getElementById('btnADD').textContent = 'Submit';
                    document.getElementById('id').readOnly = false;
                    onSelectItem(null);
                    setPostData(df);
                    setStatus(true);
                } else {
                    alert("Update Fail !");
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
            document.getElementById('btnADD').textContent = 'Edit';
            document.getElementById('id').readOnly = true;
        }
        

    }


    useEffect(() => {
        notifyData();
    }, [status, selectItem])

    return (
        <div style = {{'background-color' : '#ededed', 'padding': '5px', 'border-radius' : '5px'}}>
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
                <Button id="btnADD" name="btSubmit" value="Submit" onClick={handleOnClickOK} >Submit{""}</Button>
            </Form>
        </div>
    );
}
export default FormInput;










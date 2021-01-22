import React, { useEffect } from 'react';
import CRUD from '../service/crud';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
            CRUD.updateShip(postData).then(res => {
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
                    <Input id="id" type="text" value={postData?.shipper_id} placeholder="ID" name="shipper_id" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={onChangeData} name="company_name" value={postData?.company_name} placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={onChangeData} value={postData?.phone} name="phone" placeholder="Phone" />
                </FormGroup>
                <Button id="btnADD" name="btSubmit" value="Submit" onClick={handleOnClickOK} >Submit{""}</Button>

            </Form>
        </div>
    );
}
export default FormInput;
import React, { useEffect } from 'react';
import CRUD from '../service/crud';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function FormInput(props) {

    var { onChangeStatus } = props;
    const { onSelectItem } = props;
    const { selectItem } = props;
    const [status, setStatus] = React.useState(false);
    const [postData, setPostData] = React.useState({
        region_id: "",
        region_description: "",
    });
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
            CRUD.updateReg(postData).then(res => {
                console.log("-<" +res.data.message);
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
                    <Input type="text" id='id' value={postData?.region_id} name="region_id" placeholder="Region ID" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={onChangeData} value={postData?.region_description} name="region_description" placeholder="Region Description" />
                </FormGroup>
                <Button id="btnADD" name="btSubmit" value="Submit" onClick={handleOnClickOK} >Submit{""}</Button>

            </Form>
        </div>
    );
}
export default FormInput;
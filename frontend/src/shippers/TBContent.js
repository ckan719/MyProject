import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteShip(id) {
        console.log(id);
        CRUD.delete_Ship_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditShip(item) {
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:12}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.shipper_id}</th>
                        <td>{item.company_name}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteShip(item.shipper_id)}>Del</Button>
                        </td>
                        <td>
                            <Button onClick={() => handleClickEditShip(item)}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
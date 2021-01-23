import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteCust(id) {
        console.log(id);
        CRUD.delete_cust_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditCust(item) {
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:12}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Adress</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Fax</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <td >{item.customer_id}</td>
                        <td>{item.company_name}</td>
                        <td>{item.contact_name}</td>
                        <td>{item.contact_title}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.region}</td>
                        <td>{item.postal_code}</td>
                        <td>{item.country}</td>
                        <td>{item.phone}</td>
                        <td>{item.fax}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteCust(item.customer_id)}>Del</Button>
                        </td>
                        <td>
                        <Button onClick={() => handleClickEditCust(item)}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </Table>
    );
}
export default TBContent;
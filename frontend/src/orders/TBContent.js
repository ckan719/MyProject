import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteOrder(id) {
        console.log(id);
        CRUD.delete_Order_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditOrder(item) {
        onSelectItem(item);
    }

    return (
        <Table hover>
            <thead>
                <tr style={{fontSize:12}}>
                    <th>ID</th>
                    <th>Custommer ID</th>
                    <th>Employee ID</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Ship Date</th>
                    <th>Shipper Id</th>
                    <th>Freight</th>
                    <th>Ship Name</th>
                    <th>Ship Address</th>
                    <th>Ship City</th>
                    <th>Ship Region</th>
                    <th>Postal Code</th>
                    <th>Ship Country</th>
                </tr>
            </thead>
            <tbody style={{fontSize:12}}>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.order_id}</th>
                        <td>{item.customer_id}</td>
                        <td>{item.employee_id}</td>
                        <td>{item.order_date}</td>
                        <td>{item.required_date}</td>
                        <td>{item.shipped_date}</td>
                        <td>{item.ship_via}</td>
                        <td>{item.freight}</td>
                        <td>{item.ship_name}</td>
                        <td>{item.ship_address}</td>
                        <td>{item.ship_city}</td>
                        <td>{item.ship_region}</td>
                        <td>{item.ship_postal_code}</td>
                        <td>{item.ship_country}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteOrder(item.order_id)}>♻</Button>
                        </td>
                        <td>
                            <Button onClick={() => handleClickEditOrder(item)}>📃</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteOde(id) {
        console.log(id);
        CRUD.delete_ode_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditOde(item) {
        onSelectItem(item);
    }

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>OrderDetails ID</th>
                    <th> Order ID</th>
                    <th> Product ID</th>
                    <th> Unit Price</th>
                    <th> Quantity</th>
                    <th> Discount</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.order_details_id}</th>
                        <td>{item.order_id}</td>
                        <td>{item.product_id}</td>
                        <td>{item.unit_price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.discount}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteOde(item.order_details_id)}>♻</Button> {'  '}
                            <Button onClick={() => handleClickEditOde(item)}>📃</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
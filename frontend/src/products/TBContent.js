import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeletePro(id) {
        console.log(id);
        CRUD.delete_pro_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditPro(item) {
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:12}}>
            <thead>
                <tr>
                    <th> Product ID</th>
                    <th>Product Name</th>
                    <th>Supplier ID</th>
                    <th>Category ID </th>
                    <th>Quantity per Unit </th>
                    <th>Unit Price </th>
                    <th>Units in Stock  </th>
                    <th>Units on Order </th>
                    <th>Reorder Level </th>
                    <th>Discontinued  </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.product_id}</th>
                        <td>{item.product_name}</td>
                        <td>{item.supplier_id}</td>
                        <td>{item.category_id}</td>
                        <td>{item.quantity_per_unit}</td>
                        <td>{item.unit_price}</td>
                        <td>{item.units_in_stock}</td>
                        <td>{item.units_on_order}</td>
                        <td>{item.reorder_level}</td>
                        <td>{item.discontinued}</td>
                        <td>
                            <Button onClick={() => handleClickDeletePro(item.product_id)}>Del</Button> {'  '}
                        </td>
                        <td>
                            <Button onClick={() => handleClickEditPro(item)}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
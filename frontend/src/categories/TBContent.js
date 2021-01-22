import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteCate(id) {
        console.log(id);
        CRUD.delete_cate_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditCate(item) {
        onSelectItem(item);
    }

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope = 'row' >{item.category_id}</th>
                        <td>{item.category_name}</td>
                        <td>{item.description}</td>
                        <td>{item.picture}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteCate(item.category_id)}>♻</Button>
                        </td>
                        <td>
                            <Button onClick={() => handleClickEditCate(item)}>📃</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
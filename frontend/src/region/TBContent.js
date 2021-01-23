import React from 'react';
import CRUD from '../service/crud';
import {Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteReg(id) {
        CRUD.delete_reg_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditReg(item) {
        onSelectItem(item);
    }

    return (
        <Table hover style={{fontSize:12}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Region Description</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} >
                        <th scope="row" >{item.region_id}</th>
                        <td>{item.region_description}</td>

                        <td>
                            <Button onClick={() => handleClickDeleteReg(item.region_id)}>Del</Button>{'  '}
                            <Button onClick={() => handleClickEditReg(item)}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </Table>
    );
}
export default TBContent;
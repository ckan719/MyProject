import React from 'react';
import CRUD from '../service/crud';
import { Button, Table } from "reactstrap";
function TBContent(props) {
    var { onChangeStatus } = props;
    const { items } = props;
    var { onSelectItem } = props;
    function handleClickDeleteEmp(id) {
        console.log(id);
        CRUD.delete_emp_by_id(id).then((res) => {
            alert(res.data.message);
            onChangeStatus(true);
        }).catch(err => {
            console.log(err);
        });
    }
    function handleClickEditEmp(item) {
        onSelectItem(item);
    }

    return (
        <Table hover>
            <thead>
                <tr style={{fontSize:10}}>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Title</th>
                    <th>Title Of Courtesy</th>
                    <th>Birth Day</th>
                    <th>Hire Day</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Home Phone</th>
                    <th>Extension</th>
                    <th>Photo</th>
                    <th>Notes</th>
                    <th>Photo Path</th>
                </tr>
            </thead>
            <tbody style={{fontSize:13}}>
                {items.map((item, index) => (
                    
                    <tr key={index} >
                        <th scope='row' >{item.employee_id}</th>
                        <td>{item.last_name}</td>
                        <td>{item.first_name}</td>
                        <td>{item.title}</td>
                        <td>{item.title_of_courtesy}</td>
                        <td>{item.birth_date}</td>
                        <td>{item.hire_date}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.region}</td>
                        <td>{item.postal_code}</td>
                        <td>{item.country}</td>
                        <td>{item.home_phone}</td>
                        <td>{item.extension}</td>
                        <td>{item.photo}</td>
                        <td>{item.notes}</td>
                        <td>{item.photo_path}</td>
                        <td>
                            <Button onClick={() => handleClickDeleteEmp(item.employee_id)}>♻</Button> 
                        </td>
                        <td>
                            <Button onClick={() => handleClickEditEmp(item)}>📃</Button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </Table>
    );
}
export default TBContent;
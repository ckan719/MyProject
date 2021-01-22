import HttpRequest from "./http-common";

const getAllCate = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_categories");
}

const insertCate = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_categories", data);
}

const delete_cate_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_categories/${data}`);
}

const updateCate = (data) => {
    return HttpRequest.put("http://localhost:8080/update_categories", data);
}

const getAllCust = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_customers");
}

const insertCust = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_customers", data);
}

const delete_cust_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_customers/${data}`);
}

const updateCust = (data) => {
    return HttpRequest.put("http://localhost:8080/update_customers", data);
}

const getAllReg = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_region");
}

const insertReg = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_region", data);
}

const delete_reg_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_region/${data}`);
}

const updateReg = (data) => {
    return HttpRequest.put("http://localhost:8080/update_region", data);
}

const getAllEmp = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_employees");
}

const insertEmp = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_employees", data);
}

const delete_emp_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_employees/${data}`);
}

const updateEmp = (data) => {
    return HttpRequest.put("http://localhost:8080/update_employees", data);
}

const getAllShip = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_shippers");
}

const insertShip  = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_shippers", data);
}

const delete_Ship_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_shippers/${data}`);
}

const updateShip  = (data) => {
    return HttpRequest.put("http://localhost:8080/update_shippers", data);
}
const getAllOrder = async () =>{
    return await HttpRequest.get("http://localhost:8080/user/all_orders");
}

const insertOrder  = (data) => {
    return HttpRequest.post("http://localhost:8080/insert_orders", data);
}

const delete_Order_by_id = (data) => {
    return HttpRequest.delete(`http://localhost:8080/delete_orders/${data}`);
}

const updateOrder  = (data) => {
    return HttpRequest.put("http://localhost:8080/update_orders", data);
}

       //    OderDetails //
       const getAllOde = async () =>{
        return await HttpRequest.get("http://localhost:8080/user/all_order_details");
    }
    
    const insertOde = (data) => {
        return HttpRequest.post("http://localhost:8080/insert_order_details", data);
    }
    
    const delete_ode_by_id = (data) => {
        return HttpRequest.delete(`http://localhost:8080/delete_order_details/${data}`);
    }
    
    const updateOde = (data) => {
        return HttpRequest.put("http://localhost:8080/update_order_details", data);
    }
    
            //    Product //
    
    const getAllPro = async () =>{
        return await HttpRequest.get("http://localhost:8080/user/all_products");
    }
    
    const insertPro = (data) => {
        return HttpRequest.post("http://localhost:8080/insert_products", data);
    }
    
    const delete_pro_by_id = (data) => {
        return HttpRequest.delete(`http://localhost:8080/delete_products/${data}`);
    }
    
    const updatePro = (data) => {
        return HttpRequest.put("http://localhost:8080/update_products", data);
    }
    
                // Supplier //
    
    const getAllSup = async () =>{
        return await HttpRequest.get("http://localhost:8080/user/all_suppliers");
    }
    
    const insertSup = (data) => {
        return HttpRequest.post("http://localhost:8080/insert_suppliers", data);
    }
    
    const delete_sup_by_id = (data) => {
        return HttpRequest.delete(`http://localhost:8080/delete_suppliers/${data}`);
    }
    
    const updateSup = (data) => {
        return HttpRequest.put("http://localhost:8080/update_suppliers", data);
    }
                

export default { getAllCate , insertCate, delete_cate_by_id, updateCate,
                 getAllCust, insertCust, delete_cust_by_id, updateCust,
                 getAllReg, insertReg, delete_reg_by_id, updateReg,
                 getAllEmp, insertEmp, delete_emp_by_id, updateEmp,
                 getAllShip, insertShip, delete_Ship_by_id, updateShip,
                 getAllOrder, insertOrder, delete_Order_by_id, updateOrder,
                 getAllOde, insertOde, delete_ode_by_id, updateOde, 
                 getAllPro, insertPro, delete_pro_by_id, updatePro,
                 getAllSup, insertSup, delete_sup_by_id, updateSup
}
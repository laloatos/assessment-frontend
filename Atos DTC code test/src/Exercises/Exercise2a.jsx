import React,{useState,useEffect} from 'react'
import { joinUsersCompanies } from '../Functions/Functions';
function Exercise2a(){
    //
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        initialite();
    },[]);
    const initialite = async ()=>{
        let dataCompanies = await joinUsersCompanies();
        let companiesFiltered = [];
        dataCompanies.filter(company => company.status === "active").forEach
            (company => {
                company.employees.forEach(employee => {
                    if (employee.status === "inactive") {
                        companiesFiltered.push(employee.name);
                    }
                })
            });

        setEmployees(companiesFiltered);
    }
    return (
        
        <>
            <h3>Inactive user names from active companies</h3>
            <ul className="list-group">
                
                {employees.map(employee => (
                    <li className="list-group-item" key={employee}>{employee}</li>
                ))} 
              
            </ul>
        </>
        
    )
}
export default Exercise2a;
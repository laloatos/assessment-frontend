import React,{useState,useEffect} from 'react'
import {joinUsersCompanies } from '../Functions/Functions';
function Exercise2b(){

    const [companies,setCompanies] = useState([]);
    useEffect(()=>{
        initialite();
    },[]);
    const initialite = async ()=>{
        let dataCompanies = await joinUsersCompanies();
        let companiesFiltered = [];
        dataCompanies.forEach
            (company => {
                let amountMales=0;
                let amountFemales=0;
                company.employees.forEach(employee => {
                    if (employee.gender === "male") {
                        amountMales+=Number(employee.salary)
                    }else{
                        amountFemales+=Number(employee.salary)
                    }
                })
                companiesFiltered.push({
                    name:company.name,
                    amountMales:amountMales,
                    amountFemales:amountFemales
                });
            });
        setCompanies(companiesFiltered);
    }

    return (
        
        <>
            <h3>Companies salary cost grouped by gender</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Coompany</th>
                        <th>Amount males</th>
                        <th>Amount Females</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {companies.map((company,index)=>(
                        <tr key={index}>
                            <td>{company.name}</td>
                            <td>{company.amountMales}</td>
                            <td>{company.amountFemales}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
        
    )
}
export default Exercise2b;
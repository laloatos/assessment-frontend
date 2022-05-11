import React,{useState,useEffect} from 'react'
import { joinUsersCompanies } from '../Functions/Functions';
function Exercise2c(){

    const [companies,setCompanies] = useState([]);
    useEffect(()=>{
        initialite();
    },[]);
    const initialite = async ()=>{
        let dataCompanies = await joinUsersCompanies();
        let companiesFiltered = [];
        dataCompanies.forEach
            (company => {
                let amount=0;
                company.employees.forEach(employee => {
                    amount += Number(employee.salary);
                })
                companiesFiltered.push({
                    name:company.name,
                    amount:amount
                });
            });
        companiesFiltered.sort((a,b)=>b.amount- a.amount);
        console.log(companiesFiltered);
        setCompanies(companiesFiltered);
    }

    return (
        
        <>
            <h3>Companies name sorted by total salary cost.</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Total Salaries</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {companies.map((company,index)=>(
                        <tr key={index}>
                            <td>{company.name}</td>
                            <td>{company.amount}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
        
    )
}
export default Exercise2c;
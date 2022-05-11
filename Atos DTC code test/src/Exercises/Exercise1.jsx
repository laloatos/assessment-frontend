import React,{useState,useEffect} from 'react';
import {getCompanies,getUsers} from '../Functions/Functions'

function Exercise1(){
    const [companies,setCompanies] = useState([]);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        initialite();
    },[]);
    const initialite  = async() =>{
        let dataUsers = await getUsers();  
        let dataCompanies =await getCompanies(); 
        setUsers(dataUsers);
        setCompanies(dataCompanies);
    }


    return(
        <>
            <h3>Companies with employees</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Employees</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr key={company.id} >
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>
                                <table >
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Status</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.filter(user => company.employees.includes(user.id)).map(user => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.gender}</td>
                                                <td>{user.status}</td>
                                                <td>{user.salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>

                            </td>
                            <td>{company.status}</td>
                        </tr>

                    ))}
            </tbody>
        </table>
    </>
    )
}
export default Exercise1;
import Axios from "axios";
import {useEffect, useState } from "react";

function Table(){
   const [data, setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status === 200){
               console.log(res.data.users);
               setData(res.data.users.slice(0,4))
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);


    const ListNames = () =>{
            return( 
                <div className="bg-light">
                    <h1>Dummy Data</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Profile Pic</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Gender</th>
                                <th>E-mail</th>
                                <th>Username</th>
                                <th>Domain</th>
                                <th>IP</th>
                                <th>University</th>
                            </tr>
                        </thead>
                        <tbody>
                                {data.map((val) => ( 
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td style={{width:"50px"}}><img className="img-fluid" src={val.image}/></td>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.email}</td>
                                    <td>{val.username}</td>
                                    <td>{val.domain}</td>
                                    <td>{val.ip}</td>
                                    <td>{val.university}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            );
        
    }
    return(
        <div>
            {ListNames()}
        </div>
    )
}

export default Table;
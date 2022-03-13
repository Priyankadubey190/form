import { useState, useEffect } from "react"
import axios from "axios"


export const Empdata = () => {

    const [empdata, setempData] = useState([])


    const getData = () => {
        axios.get("http://localhost:3001/users").then((res) => {

            let userData = res.data
            setempData([...userData])
        })
    }
    useEffect(() => {
        getData()
    }, [])

    

    return <div className="showdata">
       <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Marital Status</th>
            </tr>
          </thead>

          <tbody>
            {empdata.map((e) => (
              <tr>
                <td>{e.empname}</td>
                <td>{e.empage}</td>
                <td>{e.empaddress}</td>
                <td>{e.empdepart}</td>
                <td>{e.empsalary}</td>
                <td>{e.marital}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
}
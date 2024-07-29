import React from 'react'
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const Grid = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(()=>{fetch("/GetStories/")
        .then(response=>{return response.json()})
        .then(responseJson=>{setRowData(responseJson)})
    },[])

    return (
        <div className='container'>
            <h1>Stories</h1>
            <div className='row'>
                <div className='col-sm-12'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>by</th>
                                <th>descendants</th>
                                <th>id</th>
                                <th>score</th>
                                <th>time</th>
                                <th>title</th>
                                <th>type</th>
                                <th>url</th>
                            </tr>
                        </thead>
                        <tbody>
{
    rowData.map((item)=>(<tr>
        <td>
            {item.by}
        </td>
        <td>
            {item.descendants}
        </td>
        <td>
            {item.id}
        </td>
        <td>
            {item.score}
        </td>
        <td>
            {item.time}
        </td>
        <td>
            {item.title}
        </td>
        <td>
            {item.type}
        </td>
        <td>
            {item.url}
        </td>
        </tr>))
}   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       )  
   }
      
   export default Grid
import React, { useEffect, useState } from 'react';
import BarChart from '../../components/BarChart';
import Lines from '../../components/Lines';
import './Dashboard.css';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Dashboard = () => {

  const GetBudgetExecutionURL = process.env.REACT_APP_WS_URL + process.env.REACT_APP_WS_GET_BUDGET_EXECUTION;
  const [budgetExecution, setBudgetExecution] = useState([]);
  
  useEffect(() => {
    axios.get(
      GetBudgetExecutionURL,
      { 
        params: {
          projectId: "CIMA",
        } 
      },
      { 
        headers: {
          /* "Authorization": `Token ${token}`, */
          /* "Content-type": "multipart/form-data", */
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log("Todo OK");
        console.log(response.data);
        // setpreSignedUrl(response.data.presigned_url);
        // uploadFile(response.data.presigned_url, fileExecuted);
        setBudgetExecution(response.data);
        // fillFileRequirementsObject(response.data);
        // setLoadingRequirements(false)
        // if (response.data[0].ALLOW_UPLOAD === 'Y'){
        //   setShowSendRequirementsButton(true)
        // }
      }
    })
    .catch((error, response) => {
      console.log(error);
      console.log(response);
      // setGetRequirementsError(true)
      // setLoadingRequirements(false)
    })
  }, []);

  return (
    <div className=' flex flex-col justify-center w-max shadow-md rounded-md p-6 bg-white '>
      <h1 className='pb-4 text-2xl font-bold'>Dashboard</h1>
      <div className='dahsboard__content-table'>
        <Table size='small' aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{background:'gray', color:'white', fontSize:'18px', fontWeight:'500',border:'1px solid #000'}} align='center'>Cuenta Contable</TableCell>
              <TableCell style={{background:'gray', color:'white', fontSize:'18px', fontWeight:'500', border:'1px solid #000'}} align='center'>Valor Presupuestado</TableCell>
{/*               <TableCell style={{background:'gray', color:'white', fontSize:'18px', fontWeight:'500',  border:'1px solid #fff'}} align='center'>Valor Ejecutado</TableCell>
              <TableCell style={{background:'gray', color:'white', fontSize:'18px', fontWeight:'500',  border:'1px solid #fff'}} align='center'>% de Cumplimiento</TableCell> */}
              <TableCell style={{background:'gray', color:'white', fontSize:'18px', fontWeight:'500',  border:'1px solid #000'}} align='center'>Tipo de Cuenta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {budgetExecution.map((row)=>(
            <TableRow key={row.id}>
              <TableCell  style={{border:'1px solid #000'}} align='center'>{row.accounting_account}</TableCell>
              <TableCell style={{border:'1px solid #000'}} align='center'>{`$${row.budgeted_value}`}</TableCell>
{/*               <TableCell style={{border:'1px solid #000'}} align="center">{`$${row.executed_value}`}</TableCell>
              <TableCell style={{border:'1px solid #000'}}  align='center'>{row.compliance_percentage * 100}</TableCell> */}
              <TableCell style={{border:'1px solid #000'}} align='center'>{row.type === "income" ? "ingresos" : (row.type === "expense" ? "gastos" : "")}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex mt-6 p-6'>
        <div className='dahsboard__content-chart' style={{ height: '400px' }}>
          <BarChart />
        </div>
        <div className='dahsboard__content-lines' style={{ height: '400px' }}>
          <Lines />
        </div>
      </div>

    </div>
  );
};


export default Dashboard;

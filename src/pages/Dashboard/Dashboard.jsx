import React, { useEffect, useState } from 'react';
import BarChart from '../../components/BarChart';
import Lines from '../../components/Lines';
import './Dashboard.css'; // Include your Tailwind CSS here
import axios from 'axios';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, Box, Collapse, TextField, Select } from '@mui/material';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  const GetBudgetExecutionURL = process.env.REACT_APP_WS_URL + process.env.REACT_APP_WS_GET_BUDGET_EXECUTION;
  const GetProjectID = 'https://1cwks3tav5.execute-api.us-east-1.amazonaws.com/alex/projects'
  const [budgetExecution, setBudgetExecution] = useState([]);
  const [projectsID, setprojectsID] = useState([]);
  const [openRows, setOpenRows] = useState([]);
  const [projectSelected, setProjectSelected] = useState('');

  useEffect(() => {
    // Check if projectSelected is not an empty string before making the API call
    if (projectSelected !== '') {
      axios
        .get(GetBudgetExecutionURL, {
          params: {
            projectId: projectSelected,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log('Todo OK');
            setBudgetExecution(response.data);
            setOpenRows(Array(response.data.length).fill(false));
          }
        })
        .catch((error, response) => {
          console.log(error);
          console.log(response);
        });
    }
  }, [projectSelected]);


  useEffect(() => {
    axios(GetProjectID, {
    })
    .then((response)=>{
      if (response.status === 200) {
        console.log(response.data)
        setprojectsID(response.data)
      }
    })
    .catch((error,response)=>{
      console.log(error);
      console.log(response);
    })

  },[]);

  const handleRowToggle = (index) => {
    setOpenRows((prevOpenRows) => {
      const newOpenRows = [...prevOpenRows];
      newOpenRows[index] = !newOpenRows[index];
      return newOpenRows;
    });
  };

  const handleProject = (event) => {
    const selectedProjectCode = event.target.value;
    setProjectSelected(selectedProjectCode);
    console.log("Selected Project:", selectedProjectCode);
  };

  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <div className='dashboard-content'>
        <div className='dashboard-content-table'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr className='border border-b-[#fafafa]'>
                <th className='px-4 py-2 '>
                <select
                    className='p-2 border rounded-md'
                    value={projectSelected}
                    onChange={handleProject}
                  >
                    {projectsID.map((project, index) => (
                      <option key={project.id} value={project.project_code}>
                        {project.project_code}
                      </option>
                    ))}
                  </select>
                </th>
                <th className='px-4 py-2 '>Cuenta Contable</th>
                <th className='px-4 py-2 '>Valor Presupuestado</th>
                <th className='px-4 py-2 '>Tipo de Cuenta</th>
              </tr>
            </thead>
            <tbody>
              {budgetExecution.map((row, index) => (
                <React.Fragment key={row.id}>
                  <tr className='border border-b-[#fafafa]'>
                    <td className='px-4 py-2 text-center '>
                      <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => handleRowToggle(index)}
                      >
{/*                         {openRows[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
 */}                  <IoIosArrowDown className={` ${openRows[index] && "rotate-180"} duration-150 `}
        />
      
                    </IconButton>
                    </td>
                    <td className='px-4 py-2 text-center'>{row.category_name}</td>
                    <td className='px-4 py-2 text-center	'>{`$${row.budgeted_value}`}</td>
                    <td className='px-4 py-2 text-center	'>{row.type === "income_category" ? "Ingresos" : (row.type === "expense_category" ? "Gastos" : "")}</td>
                  </tr>

                  <tr className='bg-[#f8fafc]'>
                    <td className='px-4' colSpan={4}>
                      <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                        <Box className='m-4'>
                          <Typography variant="h7" gutterBottom component="div">
                            Detalles
                          </Typography>
                          <table className='min-w-full border border-sky-500'>
                            <thead className='border-solid border border-sky-500'>
                              <tr>
                                <th className='px-4 py-2 text-center'>SubCuenta</th>
                                <th className='px-4 py-2 text-center'>Subvalor</th>
                                <th className='px-4 py-2 text-center'>Valor Ejecutado</th>
                              </tr>
                            </thead>
                            <tbody>
                              {row.accounts.map((account) => (
                                <tr key={account.id}>
                                  <td className='px-4 py-2 text-center'>{account.accounting_account}</td>
                                  <td className='px-4 py-2 text-center'>{account.budgeted_value}</td>
                                  <td className='px-4 py-2 text-center'>{account.executed_value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Box>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className='dashboard-content-charts'>
          <div className='dashboard-content-chart' style={{ height: '400px' }}>
            <BarChart />
          </div>
          <div className='dashboard-content-lines' style={{ height: '400px' }}>
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

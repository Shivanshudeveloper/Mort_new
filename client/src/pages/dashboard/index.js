import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { createElement, useEffect, useState } from "react";
import { GetDataAction, Postdata } from "../../Actions/PostAction";
import UserActionsGrid from "./UserActionsGrid";
import { useMemo } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableXml from "./Table";
const RenderProgress = (props) => {
  const { value } = props;

  return <CircularProgress variant="determinate" value={value} />;
};

RenderProgress.propTypes = {
  value: PropTypes.instanceOf(Number),
};

const style = {
  position: "absolute",
  top: "50%",
  overflow: "auto",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  gap: "20px",
  flexWrap: "wrap",
  bgcolor: "background.paper",
  border: "2px solid #CC8899",
  boxShadow: 24,
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor: "white",
  p: 4,
};

const Overview = () => {
  const [rowid, setrowid] = useState(null);
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 70, editable: true },
      { field: "name", headerName: "Applicant", width: 100, editable: true },
      { field: "coe", headerName: "COE", width: 110, editable: true },
      { field: "amount", headerName: "Amount", width: 100, editable: true },
      { field: "status", headerName: "Status", width: 100, editable: true },
      { field: "purpose", headerName: "Purpose", width: 100, editable: true },
      {
        field: "progress",
        headerName: "Progress",
        width: 120,
        renderCell: RenderProgress,
        editable: true,
      },
      {
        field: "milestone",
        headerName: "Milestone",
        width: 120,
        editable: true,
      },
      {
        field: "notifications",
        headerName: "Notifications",
        width: 120,
        editable: true,
      },
      { field: "rate", headerName: "Rate", width: 100, editable: true },
      {
        field: "loanOfficer",
        headerName: "Loan Officer",
        width: 100,
        editable: true,
      },
      {
        field: "processor",
        headerName: "Processor",
        width: 100,
        editable: true,
      },
      {
        field: "underwriter",
        headerName: "Underwriter",
        width: 100,
        editable: true,
      },
      {
        width: 150,
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <UserActionsGrid {...{ params, rowid, setrowid }} />
        ),
      },
    ],
    [rowid]
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialdata = {
    name: "",
    coe: "",
    amount: "",
    status: "",
    purpose: "",
    progress: "",
    milestone: "",
    notifications: "",
    rate: "",
    loanOfficer: "",
    processor: "",
    underwriter: "",
  };
  const [datashow, setdata] = useState({
    name: "",
    coe: "",
    amount: "",
    status: "",
    purpose: "",
    progress: "",
    milestone: "",
    notifications: "",
    rate: "",
    loanOfficer: "",
    processor: "",
    underwriter: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setdata({ ...datashow, [e.target.name]: e.target.value });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    dispatch(Postdata(datashow));
    setdata(initialdata);
    setTimeout(async () => {
      dispatch(GetDataAction());
    }, 1000);
    handleClose();
  };
  // const [newrows, setnewrows] = useState();
  const newrows = useSelector((state) => state.postreducer.posts);
  // setnewrows(data);
  console.log(newrows);
  useEffect(() => {
    async function GetData() {
      dispatch(GetDataAction());
    }
    GetData();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Head>
      <Container>
        {/* <Grid
          height="300px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ maxWidth: 1200, overflow: "auto" }}
        > */}
        {/* <Grid item padding="16px" margin="16px">
            <img src="" width="240px" height="100px" />
          </Grid>
          <Grid item padding="16px" margin="16px">
            <img src="" width="200px" height="100px" />
          </Grid>
          <Grid item padding="16px" margin="16px">
            <img src="" width="200px" height="100px" />
          </Grid>
          <Grid item padding="16px" margin="16px">
            <img src="" width="200px" height="100px" />
          </Grid>
          <Grid item padding="16px" margin="16px">
            <img src="" width="200px" height="100px" />
          </Grid>
          <Grid item padding="16px" margin="16px">
            <img src="" width="200px" height="100px" />
          </Grid> */}
        {/* </Grid> */}
        <Typography
          marginTop="40px"
          marginBottom="40px"
          variant="h2"
          color="primary"
          align="center"
        >
          Dashboard
        </Typography>
        <Box>
          <TableXml />
          <div style={{ height: 400, width: "100%" }}>
            <div className="formbox">
              <div>
                <Button onClick={handleOpen}>Add data</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      type="text"
                      onChange={handleChange}
                      value={datashow.name}
                      name="name"
                    />
                    <TextField
                      id="outlined-basic"
                      type="date"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.coe}
                      name="coe"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.amount}
                      name="amount"
                      type="number"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Status"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.status}
                      name="status"
                      type="text"
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.purpose}
                      name="purpose"
                      label="Purpose"
                      type="text"
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.progress}
                      name="progress"
                      label="Progress"
                      type="number"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Milestone"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.milestone}
                      name="milestone"
                      type="text"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Notifications"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.notifications}
                      name="notifications"
                      type="text"
                    />

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.rate}
                      name="rate"
                      label="Rate"
                      type="number"
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.loanOfficer}
                      name="loanOfficer"
                      label="LoanOfficer"
                      type="text"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Processor"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.processor}
                      name="processor"
                      type="text"
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      value={datashow.underwriter}
                      name="underwriter"
                      label="UnderWriter"
                      type="text"
                    />
                    <Button onClick={formSubmit}>Add</Button>
                  </Box>
                </Modal>
              </div>
            </div>
            {newrows && (
              <DataGrid
                columns={columns}
                rows={newrows}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={5}
                onCellEditCommit={(params) => setrowid(params.id)}
              />
            )}
          </div>

          <Typography
            align="center"
            variant="h2"
            color="primary"
            margin="48px 0"
          >
            Application Details
          </Typography>

          <Grid container justifyContent="space-between">
            <Grid flex="0.8" style={{ maxHeight: 200, overflow: "auto" }}>
              <List>
                {newrows &&
                  newrows.map((row) => (
                    // <Typography borderBottom='1px solid' padding='4px' marginBottom='12px'>
                    //   {detail.info}
                    // </Typography>
                    <ListItem>
                      <ListItemButton>
                        <Typography>
                          {row.name}: {row.status} <br />
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
              </List>
            </Grid>

            {/* style={{border: '1px solid green'}} */}
            <Grid item flex="1">
              <Card style={{ padding: "12px", margin: "12px" }}>
                <Typography variant="h6" marginBottom="16px">
                  {/* Milestone Name: Open */}
                  <Grid flex="0.8" style={{ maxHeight: 200, overflow: "auto" }}>
                    <List>
                      {newrows &&
                        newrows.map((row) => (
                          // <Typography borderBottom='1px solid' padding='4px' marginBottom='12px'>
                          //   {detail.info}
                          // </Typography>
                          <ListItem>
                            <ListItemButton
                              style={{
                                height: "8rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                              }}
                            >
                              <Typography style={{ fontWeight: "bold" }}>
                                Milestone: {row.milestone} <br />
                              </Typography>

                              <Typography style={{ fontWeight: "bold" }}>
                                Actual Completion: {row.createdAt}
                              </Typography>
                              <Typography style={{ fontWeight: "bold" }}>
                                Last Modification By:{row.updatedAt}
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        ))}
                    </List>
                  </Grid>
                </Typography>
                {/* <Typography variant="h6" marginBottom="16px">
                  Actual Completion: 6/15/2012 12:00:00 AM
                </Typography>
                <Typography variant="h6" marginBottom="16px">
                  Last Modification: 6/15/2012 12:00:00 AM
                </Typography>
                <Typography variant="h6" marginBottom="32px">
                  Last Modification By:
                </Typography> */}
              </Card>
            </Grid>

            <Grid item flex="0.8">
              {/* <Typography variant="h5" marginBottom="12px" padding="12px">
                9/20/2012 12:37 From: Pat McLare to Bryce McLaren
              </Typography> */}
              <List style={{ maxHeight: 200, overflow: "auto" }}>
                {newrows &&
                  newrows.map((row) => (
                    // <Typography borderBottom='1px solid' padding='4px' marginBottom='12px' >
                    //   {notif.chat}
                    // </Typography>
                    <ListItem>
                      <ListItemButton
                        style={{
                          height: "5rem",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>
                          {row.name}: {row.purpose} <br />
                        </Typography>
                        <Typography>{row.createdAt}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

//npm run build
//npm run export
//out

export default Overview;

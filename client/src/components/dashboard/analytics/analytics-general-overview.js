import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { GetPostRoute } from "../../../api/Getpostapi";
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right";
import { ChevronDown as ChevronDownIcon } from "../../../icons/chevron-down";
import { ChevronUp as ChevronUpIcon } from "../../../icons/chevron-up";
import { Chart } from "../../chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
const LineChart = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const chartSeries = [{ data: [0, 60, 30, 60, 0, 30, 10, 30, 0] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={120}
    />
  );
};

const BarChart = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const chartSeries = [{ data: [10, 20, 30, 40, 50, 60, 5] }];

  return (
    <Chart options={chartOptions} series={chartSeries} type="bar" width={120} />
  );
};

export const AnalyticsGeneralOverview = () => {
  const [rows2, setrows] = useState();
  const [applicants, setapplicants] = useState(0);
  const [csvdata, setcsvdata] = useState([]);
  useEffect(() => {
    async function GetData() {
      const newrows = await GetPostRoute();
      console.log(newrows);
      setrows(newrows);
      newrows && setcsvdata(newrows.data);
      setapplicants(newrows.data.length);
    }
    GetData();
  }, []);

  const columns = [
    { field: "name", headerName: "Applicant", width: 100 },
    { field: "coe", headerName: "COE", width: 110 },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "purpose", headerName: "Purpose", width: 100 },
    {
      field: "progress",
      headerName: "Progress",
      width: 120,
    },
    {
      field: "milestone",
      headerName: "Milestone",
      width: 120,
    },
    {
      field: "notifications",
      headerName: "Notifications",
      width: 120,
    },
    { field: "rate", headerName: "Rate", width: 100 },
    {
      field: "loanOfficer",
      headerName: "Loan Officer",
      width: 100,
    },
    {
      field: "processor",
      headerName: "Processor",
      width: 100,
    },
    {
      field: "underwriter",
      headerName: "Underwriter",
      width: 100,
    },
  ];

  function createData(
    name,
    coe,
    amount,
    status,
    purpose,
    progress,
    milestone,
    notifications,
    rate,
    loanOfficer,
    processor,
    underwriter
  ) {
    return {
      name,
      coe,
      amount,
      status,
      purpose,
      progress,
      milestone,
      notifications,
      rate,
      loanOfficer,
      processor,
      underwriter,
    };
  }
  const name2 = [];
  rows2 &&
    rows2.data.map((item) => {
      name2.push(item.name);
    });
  const coe2 = [];
  rows2 &&
    rows2.data.map((item) => {
      coe2.push(item.coe);
    });
  const amount2 = [];
  rows2 &&
    rows2.data.map((item) => {
      amount2.push(item.amount);
    });
  const status2 = [];
  rows2 &&
    rows2.data.map((item) => {
      status2.push(item.status);
    });
  const purpose2 = [];
  rows2 &&
    rows2.data.map((item) => {
      purpose2.push(item.name);
    });
  const progress2 = [];
  rows2 &&
    rows2.data.map((item) => {
      progress2.push(item.progress);
    });
  const milestone2 = [];
  rows2 &&
    rows2.data.map((item) => {
      milestone2.push(item.milestone);
    });
  const notification2 = [];
  rows2 &&
    rows2.data.map((item) => {
      notification2.push(item.notifications);
    });
  const rate2 = [];
  rows2 &&
    rows2.data.map((item) => {
      rate2.push(item.rate);
    });
  const loanOfficer2 = [];
  rows2 &&
    rows2.data.map((item) => {
      loanOfficer2.push(item.loanOfficer);
    });
  const Processor2 = [];
  rows2 &&
    rows2.data.map((item) => {
      Processor2.push(item.processor);
    });
  const underwriter2 = [];
  rows2 &&
    rows2.data.map((item) => {
      underwriter2.push(item.underwriter);
    });

  console.log(name2);
  const rows = [
    createData("name", ...name2),
    createData("coe", ...coe2),
    createData("Amount", ...amount2),
    createData("Status", ...status2),
    createData("Purpose", ...purpose2),
    createData("Progress", ...progress2),
    createData("Milestone", ...milestone2),
    createData("Notification", ...notification2),
    createData("Rate", ...rate2),
    createData("loanOfficer", ...loanOfficer2),
    createData("Processor", ...Processor2),
    createData("Underwriter", ...underwriter2),
  ];

  const data = rows2;
  return (
    <>
      <Grid container spacing={4} style={{ marginBottom: "2rem" }}>
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: 2,
              }}
            >
              <div>
                <Typography color="textSecondary" variant="body2">
                  Applicants
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5">
                  {applicants}
                </Typography>
              </div>
              <LineChart />
            </Box>
            <Divider />
            <CardActions>
              <Button endIcon={<ArrowRightIcon fontSize="small" />}>
                See all visits
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: 2,
              }}
            >
              <div>
                <Typography color="textSecondary" variant="body2">
                  Spent
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5">
                  $41.2K
                </Typography>
              </div>
              <LineChart />
            </Box>
            <Divider />
            <CardActions
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.success.main, 0.08),
                  color: "success.main",
                  height: 36,
                  width: 36,
                }}
              >
                <ChevronUpIcon fontSize="small" />
              </Avatar>
              <Typography
                color="textSecondary"
                sx={{ ml: 1 }}
                variant="caption"
              >
                12% more then last month
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: 2,
              }}
            >
              <div>
                <Typography color="textSecondary" variant="body2">
                  Engagements
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5">
                  36,6K
                </Typography>
              </div>
              <LineChart />
            </Box>
            <Divider />
            <CardActions
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.error.main, 0.08),
                  color: "error.main",
                  height: 36,
                  width: 36,
                }}
              >
                <ChevronDownIcon fontSize="small" />
              </Avatar>
              <Typography
                color="textSecondary"
                sx={{ ml: 1 }}
                variant="caption"
              >
                30% less then last month
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: 2,
              }}
            >
              <div>
                <Typography color="textSecondary" variant="body2">
                  Conversions
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5">
                  131,3K
                </Typography>
              </div>
              <BarChart />
            </Box>
            <Divider />
            <CardActions
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.success.main, 0.08),
                  color: "success.main",
                  height: 36,
                  width: 36,
                }}
              >
                <ChevronUpIcon fontSize="small" />
              </Avatar>
              <Typography
                color="textSecondary"
                sx={{ ml: 1 }}
                variant="caption"
              >
                12% more then last month
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      /> */}
      <CSVLink data={csvdata}>Download Xls file</CSVLink>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((item) => {
                return <TableCell align="right">{item.field}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2 &&
              rows2.data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.coe}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.purpose}</TableCell>
                  <TableCell align="right">{row.progress}</TableCell>
                  <TableCell align="right">{row.milestone}</TableCell>
                  <TableCell align="right">{row.notifications}</TableCell>
                  <TableCell align="right">{row.rate}</TableCell>
                  <TableCell align="right">{row.loanOfficer}</TableCell>
                  <TableCell align="right">{row.processor}</TableCell>
                  <TableCell align="right">{row.underwriter}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <table hidden className="table-to-xls">
        <tr>
          {columns.map((item) => {
            return <th>{item.field}</th>;
          })}
        </tr>
        {rows2 &&
          rows2.data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.coe}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{item.purpose}</td>
                <td>{item.progress}</td>
                <td>{item.milestone}</td>
                <td>{item.notifications}</td>
                <td>{item.rate}</td>
                <td>{item.loanOfficer}</td>
                <td>{item.processor}</td>
                <td>{item.underwriter}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

import { useState } from "react";
import numeral from "numeral";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../../icons/information-circle-outlined";
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const sortCountries = (countries, order) =>
  countries.sort((a, b) => {
    if (order === "asc") {
      return a.visits < b.visits ? -1 : 1;
    }

    return a.visits > b.visits ? -1 : 1;
  });

const countries = [
  {
    flag: "/static/icons/ny.png",
    name: "New York",
    seo: 0,
    visits: 0,
  },
  {
    flag: "/static/icons/oh.png",
    name: "Ohio",
    seo: 0,
    visits: 0,
  },
  {
    flag: "/static/icons/mo.png",
    name: "Missouri",
    seo: 0,
    visits: 0,
  },
  {
    flag: "/static/icons/fl.png",
    name: "Florida",
    seo: 0,
    visits: 0,
  },
  // {
  //   flag: '/static/icons/de_flag.svg',
  //   name: 'Germany',
  //   seo: 45,
  //   visits: 2932
  // },
  // {
  //   flag: '/static/icons/es_flag.svg',
  //   name: 'Spain',
  //   seo: 56,
  //   visits: 200
  // }
];

export const AnalyticsVisitsByCountry = (props) => {
  const [order, setOrder] = useState("desc");

  const handleSort = () => {
    setOrder((prevOrder) => {
      if (prevOrder === "asc") {
        return "desc";
      }

      return "asc";
    });
  };

  const sortedCountries = sortCountries(countries, order);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [state, setState] = useState("");
  const [value, setValue] = useState(0);
  const [seo, setSeo] = useState(0);

  const handleSubmit = () => {
    countries.push({
      flag: URL.createObjectURL(selectedImage),
      name: state,
      seo: seo,
      visits: value,
    });

    handleClose();
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Keywords by country"
        action={
          <>
            <Tooltip title="Refresh rate is 24h" style={{ marginRight: "8px" }}>
              <InformationCircleOutlinedIcon sx={{ color: "action.active" }} />
            </Tooltip>
            <Tooltip
              title="Add State"
              style={{ cursor: "pointer" }}
              onClick={handleClickOpen}
            >
              <AddCircleOutlineIcon sx={{ color: "action.active" }} />
            </Tooltip>
          </>
        }
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add state or region
          </DialogContentText> */}
          <Typography>Upload Flag</Typography>
          <input
            type="file"
            onChange={(event) => {
              // console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <TextField
            value={state}
            onChange={(e) => setState(e.target.value)}
            // autoFocus
            margin="dense"
            id="name"
            label="State"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            // autoFocus
            margin="dense"
            id="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            value={seo}
            onChange={(e) => setSeo(e.target.value)}
            // autoFocus
            margin="dense"
            id="seo"
            label="SEO"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>State or Region</TableCell>
            <TableCell sortDirection={order}>
              <TableSortLabel active direction={order} onClick={handleSort}>
                Value
              </TableSortLabel>
            </TableCell>
            <TableCell>SEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCountries.map((country) => (
            <TableRow
              key={country.name}
              sx={{
                "&:last-child td": {
                  border: 0,
                },
              }}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      height: 16,
                      width: 16,
                      "& img": {
                        height: 16,
                        width: 16,
                      },
                    }}
                  >
                    <img alt={country.name} src={country.flag} />
                  </Box>
                  <Typography sx={{ ml: 1 }} variant="subtitle2">
                    {country.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{numeral(country.visits).format("0,0")}</TableCell>
              <TableCell>{country.seo}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <CardActions>
        <Button endIcon={<ArrowRightIcon fontSize="small" />}>See more</Button>
      </CardActions>
    </Card>
  );
};

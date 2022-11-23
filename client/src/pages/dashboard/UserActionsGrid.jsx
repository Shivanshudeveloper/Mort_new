import { Box, CircularProgress, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { EditPostRoute } from "../../api/Editpostapi";
import { DeletePostRoute } from "../../api/Deletepostroute";
import { useDispatch } from "react-redux";
import { GetDataAction } from "../../Actions/PostAction";

const UserActionsGrid = ({ params, rowid, setrowid }) => {
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setloading(true);
    const { _id, ...other } = params.row;
    // console.log(params.row);

    const result = await EditPostRoute(_id, other);
    setloading(false);
    setTimeout(() => {
      dispatch(GetDataAction());
    }, 50);
  };
  const handleDelete = async () => {
    setloading(true);
    const { _id } = params.row;
    // console.log(params.row);

    const result = await DeletePostRoute(_id);
    setloading(false);
    setTimeout(() => {
      dispatch(GetDataAction());
    }, 100);
  };
  return (
    <div>
      <Box
        sx={{
          m: 1,
          position: "relative",
          display: "flex",
          width: "8rem",
          alignItems: "center",
          justifyContent: "space-around",
          height: "3rem",
        }}
      >
        {success ? (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              "&:hover": { bgcolor: green[700] },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
            }}
            disabled={params.id !== rowid || loading}
            onClick={handleSubmit}
          >
            <Save />
          </Fab>
        )}
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
        <div
          style={{
            padding: "5px",
            backgroundColor: "red",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        >
          Delete
        </div>
      </Box>
    </div>
  );
};

export default UserActionsGrid;

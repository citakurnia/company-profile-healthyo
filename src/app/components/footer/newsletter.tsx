import { Button, Input } from "@mui/material";
import { ReactNode } from "react";

export default function Newsletter(): ReactNode {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 items-start">
      <div>Subscribe to our newsletter:</div>
      <div className="flex flex-row mt-2 space-x-3 md:mt-0 items-start">
        <Input
          placeholder="Email"
          size="small"
          sx={{
            width: "150px",
            "& .MuiInputBase-input": {
              height: "18px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "10px",
            },
          }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            height: "24px",
            backgroundColor: "#4fbcf2",
            color: "#FFFFFF",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "#30ace9",
            },
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

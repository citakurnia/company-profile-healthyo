import { Button, Input } from "@mui/material";

export default function Newsletter() {
  return (
    <>
      <div className="md:mr-4">Subscribe to our newsletter:</div>
      <div className="flex flex-row mt-2 space-x-3 md:mt-0">
        <Input
          placeholder="Email"
          size="small"
          sx={{
            width: "150px", // Custom width
            "& .MuiInputBase-input": {
              height: "18px", // Custom height
              fontSize: "14px", // Custom font size
            },
            "& .MuiInputLabel-root": {
              fontSize: "10px", // Custom label font size
            },
          }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            height: "24px", // Custom height
            backgroundColor: "#4fbcf2", // Custom background color
            color: "#FFFFFF", // Custom text color
            fontSize: "12px", // Custom font size
            "&:hover": {
              backgroundColor: "#30ace9", // Custom background color on hover
            },
          }}
        >
          SUBMIT
        </Button>
      </div>
    </>
  );
}

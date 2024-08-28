import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { SmileIcon } from "lucide-react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00a6ca",
  },
  "& .MuiRating-iconHover": {
    color: "#00a6ca",
  },
});

function SmileyRatingComp() {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Typography>What is your opinion of this page?</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        icon={<SmileIcon fontSize="inherit" />}
        emptyIcon={<SmileIcon fontSize="inherit" />}
      />
    </div>
  );
}

export default SmileyRatingComp;

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Edit, SmileIcon, Trash } from "lucide-react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00a6ca",
  },
  "& .MuiRating-iconHover": {
    color: "#00a6ca",
  },
});

interface SmileyRatingCompProps {
  onDelete: () => void;
}

function SmileyRatingComp({ onDelete }: SmileyRatingCompProps) {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Typography>What is your opinion of this page?</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        icon={<SmileIcon fontSize="inherit" />}
        emptyIcon={<SmileIcon fontSize="inherit" />}
      />
      <div className="flex flex-row justify-end items-center gap-3 text-gray-400">
        <p className="h-6">
          <Edit />
        </p>
        <p>
          <Trash onClick={onDelete} />
        </p>
      </div>
    </div>
  );
}

export default SmileyRatingComp;

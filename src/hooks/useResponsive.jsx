import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useResponsive = (query, start, end) => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(end));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }
};

export default useResponsive;

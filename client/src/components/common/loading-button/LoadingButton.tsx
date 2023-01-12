import { ComponentProps, FC } from "react";
import { Button, CircularProgress } from "@mui/material";

interface LoadingButtonProps extends ComponentProps<typeof Button> {
  isLoading: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = ({ isLoading, children }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;

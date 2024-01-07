import React, { useEffect, type FC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {
  type AlertColor,
  type AlertProps,
} from '@mui/material/Alert';

interface ErrorSnackbarProps extends AlertProps {
  message: string
  type?: AlertColor | undefined
}

export const AlertMessage: FC<ErrorSnackbarProps> = ({ message, type }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(message !== '');
  }, [message]);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ): void => {
    if (reason === 'clickaway' || reason === 'timeout') {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} {...props} />;
    },
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={message}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

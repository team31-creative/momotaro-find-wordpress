"use client";
import React, { createContext, useContext, useMemo } from "react";
import KBSnackbar, { KBSnackbarProps, KBSnackbarActionButton } from "../components/externalApp/KBSnackbar";

interface MJSnackbarOptions extends Omit<KBSnackbarProps, "open" | "actionButton"> {
    actionButton?: KBSnackbarActionButton | "dismiss";
}

type SnackbarContextActions = {
  showSnackbar: (options: MJSnackbarOptions) => void;
  showErrorSnackbar: (options: MJSnackbarOptions) => void;
  closeSnackbar: () => void;
};

const KBSnackbarContext = createContext({} as SnackbarContextActions);

interface SnackbarContextProviderProps {
  children: React.ReactNode;
}

const KBSnackbarProvider: React.FC<SnackbarContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [snackbarProps, setSnackbarProps] = React.useState<MJSnackbarOptions>({});
  const [snackbarKey, setSnackbarKey] = React.useState(Date.now());
  const showNewSnackbar = () => {
    setSnackbarKey(Date.now());
  };

  const showSnackbar = (options: MJSnackbarOptions) => {
    // open after previous item close
    // TODO: Update an alternative instead of using setTimeout
    const orderOpenTime = setTimeout(() => {
      setIsError(false);
      setSnackbarProps(options);
      setIsOpen(true);
      clearTimeout(orderOpenTime);
      showNewSnackbar();
    });
  };

  const showErrorSnackbar = (options: MJSnackbarOptions) => {
    // open after previous item close
    // TODO: Update an alternative instead of using setTimeout
    const orderOpenTime = setTimeout(() => {
      setIsError(true);
      setSnackbarProps(options);
      setIsOpen(true);
      clearTimeout(orderOpenTime);
      showNewSnackbar();
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderShowButton = useMemo<KBSnackbarActionButton | undefined>(() => {
    if (snackbarProps.actionButton === "dismiss") {
      return { text: "Close", onClick: handleClose };
    }
    return snackbarProps.actionButton;
  }, [snackbarProps.actionButton]);

  return (
    <KBSnackbarContext.Provider value={{ showSnackbar, showErrorSnackbar, closeSnackbar: handleClose }}>
      <KBSnackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color={isError ? "error" : "primary"}
        {...snackbarProps}
        open={isOpen}
        onClose={handleClose}
        actionButton={renderShowButton}
        snackbarKey={snackbarKey}
      />
      {children}
    </KBSnackbarContext.Provider>
  );
};

const useKBSnackbar = (): SnackbarContextActions => {
  const context = useContext(KBSnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }

  return context;
};

export { KBSnackbarProvider, useKBSnackbar };
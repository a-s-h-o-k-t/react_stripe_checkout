import { Box, Container } from "@mui/material";
import { memo, useState } from "react";
import { MuiButton, MuiTextInput } from "../../components";
import { useTheme } from "@mui/material/styles";
import { useFormEdit } from "../../hooks/useFormEdit";

const Dashboard = () => {
  const theme = useTheme();
  const [isError, setIsError] = useState(false);

  const initialValues = {
    tipAmount: "",
  };

  const edit = useFormEdit(initialValues);
  const RequiredFields = ["tipAmount"];

  const onClickPay = () => {};

  return (
    <Container maxWidth={"xs"}>
      <Box
        style={{
          padding: theme.spacingTheme.padding.lg,
          display: "flex",
          flexDirection: "column",
          rowGap: 40,
          height: "100%",
          alignItems: "center",
        }}
      >
        <MuiTextInput
          value={Number(edit.getValue("tipAmount")).toLocaleString("en-IN")}
          onChange={(event) => {
            edit.update({
              tipAmount: event.target.value.replace(/[^0-9]/g, ""),
            });
          }}
          error={isError && !edit.allFilled("tipAmount")}
          inputHeight={35}
        />
        <MuiButton
          title="pay"
          sx={{
            fontSize: 12,
            fontWeight: 700,
            borderRadius: "8px",
            width: "100%",
            height: "30px",
            color: "white",
            backgroundColor: "orange",
          }}
          onClick={onClickPay}
        />
      </Box>
    </Container>
  );
};

export default memo(Dashboard);

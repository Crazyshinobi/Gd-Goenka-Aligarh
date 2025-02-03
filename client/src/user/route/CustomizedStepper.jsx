import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PersonIcon from '@mui/icons-material/Person';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import VerifiedIcon from '@mui/icons-material/Verified';
import PropTypes from "prop-types";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(95deg, rgb(0, 200, 83) 0%, rgb(0, 150, 100) 50%, rgb(0, 100, 0) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(95deg, rgb(0, 200, 83) 0%, rgb(0, 150, 100) 50%, rgb(0, 100, 0) 100%)",
  }),
}))

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <SchoolIcon />,
    5: <FamilyRestroomIcon />,
    6: <PersonIcon />,
    7: <DoneAllIcon />,
    8: <VerifiedIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default function CustomizedStepper({ activeStep, steps, completedSteps, onStepClick }) {
  const theme = useTheme();

  return (
    <div className="flex items-center justify-end h-auto mt-20 mr-24 py-2">
      <Stack
        sx={{
          width: "70%",
          maxWidth: "100%",
          [theme.breakpoints.down("md")]: {
            display: "none",  
          },
          [theme.breakpoints.up("md")]: {
            display: "block", 
          }
        }}
        spacing={4}
      >
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={index} completed={completedSteps[index]}>
              <StepButton
                onClick={() => onStepClick(index)}
                disabled={!completedSteps[index] && index > activeStep}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </div>
  );
}

CustomizedStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onStepClick: PropTypes.func.isRequired,
};

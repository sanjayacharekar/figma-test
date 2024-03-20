import Image from "next/image";
import styles from "./page.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import PrintIcon from "@mui/icons-material/Print";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
export default function Home() {
  return (
    <Container
      fixed
      maxWidth="lg"
      sx={{ display: "flex", borderRadius: 4, bgcolor: "#cfe8fc" }}
    >
      {/* //side nav */}
      <Box sx={{ backgroundColor: "gray", width:250 }}>
        <Box boxSizing={2}>test</Box>
        <Box>test</Box>
      </Box>
      {/* main div  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          height: "100vh",
        }}
      >
        {/* main 1st div  */}
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Box padding={4}>
            {/* profile pic */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                <Typography color={"black"} paddingX={2}>
                  4907 - 000019
                </Typography>
                <Typography color={"black"}>
                  HOTEL/TECH WORK SQUAD GFR
                </Typography>
              </Box>
              {/* button code */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-end",
                }}
              >
                <Button variant="contained" color="info">
                  <DirectionsBoatIcon /> Lorem ipsum
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            {/* profile pic */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography color={"black"} paddingX={2}>
                    Date Requested
                  </Typography>
                  <Typography color={"black"} paddingX={2}>
                    10 Jul 2019
                  </Typography>
                </Box>
                <Box>
                  <Typography color={"black"} paddingX={2}>
                    Type
                  </Typography>
                  <Typography color={"black"} paddingX={2}>
                    Services
                  </Typography>
                </Box>
                <Box>
                  <Typography color={"black"} paddingX={2}>
                    Account Code
                  </Typography>
                  <Typography color={"black"} paddingX={2}>
                    58300042 - HM PAX ACCOMODATION (LABOUR)
                  </Typography>
                </Box>
              </Box>
              {/* button code */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-end",
                }}
              >
                <Link
                  component="button"
                  variant="body2"
                  // onClick={() => {
                  //   console.info("I'm a button.");
                  // }}
                >
                  Order Summary
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  // onClick={() => {
                  //   console.info("I'm a button.");
                  // }}
                >
                  Order Progress
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* main 1st div  ends*/}
        {/* main 2nd div  ends*/}

        <Box>
          <Stack spacing={2} direction="row">
            <>
              <SaveAsIcon />
              <Typography color={"black"} paddingX={1}>
                Edit Order Details
              </Typography>
            </>
            <>
              <PrintIcon />
              <Typography color={"black"} paddingX={1}>
                Print Order Details
              </Typography>
            </>
            <>
              <FileOpenIcon />
              <Typography color={"black"} paddingX={1}>
                Change Delivery Status
              </Typography>
            </>
            <>
              <ReceiptLongIcon />
              <Typography color={"black"} paddingX={1}>
                Reports
              </Typography>
            </>
            <>
              <TouchAppIcon />
              <Typography color={"black"} paddingX={1}>
                Actions
              </Typography>
            </>
          </Stack>
        </Box>
        {/* tabs start */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={0} aria-label="basic tabs example">
            <Tab label="Summary" />
            <Tab label="Order Lines" />
            <Tab label="Suppliers" />
            <Tab label="Analysis" />
            <Tab label="Freight Details" />
            <Tab label="Delivery" />
            <Tab label="Invoice" />
            <Tab label="Memos" />
            <Tab label="Notes & Attachments" />
            <Tab label="Budgets" />
          </Tabs>
        </Box>
        {/* tabs ends */}

        {/* component div start`` */}
        <Box padding={2} sx={{ bgcolor: "white" }}>
          <Stack direction="row" spacing={2}>
            <Typography color={"black"} variant="subtitle2">
              COMPONENTS
            </Typography>
            <Avatar sx={{ width: 30, height: 25 }}>
              {" "}
              <Typography color={"black"} variant="subtitle2">
                0
              </Typography>
            </Avatar>
          </Stack>
          <Typography
            color={"gray"}
            variant="subtitle2"
            sx={{ fontStyle: "italic" }}
          >
            No items found
          </Typography>
        </Box>
        {/* component div end`` */}
        {/* Authorize  div start`` */}
        <Box padding={2} sx={{ bgcolor: "white" }}>
          <Stack direction="row" spacing={2}>
            <Typography color={"black"} variant="subtitle2">
              AUTHORIZED SUPPLIER
            </Typography>
            <Box>
              <Chip label="Ref:PRJ0001963SRIN" />
            </Box>
          </Stack>
          <Stack spacing={2} direction="row">
            <Box>
              <Typography color={"gray"} variant="body2">
                Date Authorized
              </Typography>

              <Typography color={"black"} variant="body2">
                12 Jul 2019
              </Typography>
            </Box>
            <Box>
              <Typography color={"gray"} variant="body2">
                Authorized By
              </Typography>

              <Typography color={"black"} variant="body2">
                Jim Darren
              </Typography>
            </Box>
            <Box>
              <Typography color={"gray"} variant="body2">
                Invoice Chased Date
              </Typography>

              <Typography color={"black"} variant="body2">
                -
              </Typography>
            </Box>
            <Box>
              <Typography color={"gray"} variant="body2">
                PO Chased Date
              </Typography>

              <Typography color={"black"} variant="body2">
                -
              </Typography>
            </Box>
            <Box>
              <Typography color={"gray"} variant="body2">
                PO Confirmed Date
              </Typography>

              <Typography color={"black"} variant="body2">
                -
              </Typography>
            </Box>
            <Box>
              <Typography color={"gray"} variant="body2">
                PO Ref No.
              </Typography>

              <Typography color={"black"} variant="body2">
                -
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography component="legend" color={"blue"} variant="body2">
              Repairs (Riding Squards / Manpower)
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Box>
          <Box>
            <Stack spacing={2} direction="row">
              <LocationOnIcon color="success" />
              <Typography color={"green"} variant="subtitle2">
                1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <LocalPhoneIcon color="success" />
              <Typography color={"green"} variant="subtitle2">
                +44 (0) 141 305 1300
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <LocationOnIcon color="success" />
              <Typography color={"green"} variant="subtitle2">
                +44 (0) 141 305 1300
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <EmailIcon color="success" />
              <Typography color={"green"} variant="subtitle2">
                repairs@services.com
              </Typography>
            </Stack>
          </Box>
        </Box>
        {/* Authorize  div ends`` */}
      </Box>
    </Container>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardCover from "@mui/joy/CardCover";
import { Title } from "react-admin";
import styles from "./styles.css";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import firebase from "firebase/compat/app";

export default () => {
  if (firebase.auth().currentUser) {
    var displayName = firebase.auth().currentUser.displayName;
  } else {
    var displayName = "";
  }

  return (
    <>
      <CardMedia
        component="img"
        sx={{
          mt: 3,
          mb: 1,
          alignSelf: "center",
          width: "242.5px",
          height: "109px",
          borderRadius: "0.5rem",
          boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
        image="https://user-images.githubusercontent.com/71520844/215219185-eee15959-3110-42c1-b758-9fed3109a5c0.png"
        alt="Campus Queries Logo"
      />
      <Card
        sx={{
          mt: 3,
          ml: 1,
          width: "100%",
          alignSelf: "center",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontWeight: 400, fontSize: "1.5rem" }}
            color="text.primary"
            gutterBottom
          >
            {/*  display only if its there */}
            Hello {displayName ? <b>{displayName}!</b> : <b>Guest!</b>}
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "1.2rem" }}
            color="text.primary"
            gutterBottom
          >
            Welcome to {""}
            <b>Campus Queries</b>
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Streamlining the Lost and Found and Complaints Process on College
            Campus
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="#/problems"
            size="medium"
            variant="contained"
            boxShadow="1"
            color="primary"
            sx={{ ml: 1, mr: 1, mb: 2 }}
          >
            Post Queries
          </Button>
        </CardActions>
      </Card>
      {/* <Card sx={{ mt: 3, ml: 1, mr: 1, mb: 0, boxShadow: 2, borderRadius: 1 }}>
      <CardActions>
        <Button
          href="/#/Users"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Users
        </Button>
        <Button
          href="/#/Cooks"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Cooks
        </Button>
        <Button
          href="/#/Blogs"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Blogs
        </Button>
      </CardActions>
    </Card> */}
    </>
  );
};

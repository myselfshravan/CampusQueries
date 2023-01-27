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

export default () => (
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
        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
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
        // width: {
        //   xs: 300, // theme.breakpoints.up('xs')
        //   sm: 400, // theme.breakpoints.up('sm')
        //   md: 500, // theme.breakpoints.up('md')
        //   lg: 600, // theme.breakpoints.up('lg')
        //   xl: 700, // theme.breakpoints.up('xl')
        // },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: 500, fontSize: "1.5rem" }}
          color="text.primary"
          gutterBottom
        >
          Welcome to <br></br>
          <b>Campus Queries</b>
        </Typography>
        <Typography sx={{ mt: 2 }} color="text.secondary">
          Streamlining the Lost and Found and Complaints Process on College
          Campus
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="#/posts"
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

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { usePermissions } from "react-admin";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { CardActionArea, CardActions } from "@mui/material";

const MyPage = () => {
  return (
    <Card sx={{ mt: 2, mb: 2 }}>
      <CardMedia
        component="img"
        width="425px"
        aspect-ratio="auto 425 / 193"
        height="193px"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lost_main_title.svg/1200px-Lost_main_title.svg.png"
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          A Simple Blog about Campus Queries
        </Typography>
        <Typography variant="body2" color="text.secondary">
          -- By Team Insomnia
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          <p>
            College campuses can be a maze for students, especially when it
            comes to reporting lost items or filing complaints. The process is
            often slow and inefficient, with lost items remaining unclaimed for
            long periods of time and complaints falling on deaf ears. This is
            where our 24-hour hackathon project, "
            <strong>Campus Queries</strong>" comes in.
          </p>
          <p>
            Our goal was to develop a platform that streamlines the process of
            reporting lost items and filing complaints on college campuses. The
            platform, "<strong>Campus Queries</strong>" allows students to
            quickly and easily report lost items, search for found items, and
            receive notifications when a match is made. Additionally, it
            provides an option for students to file complaints regarding any
            issues on campus.
          </p>
          <p>
            One of the standout features of "Campus Queries" is its integrated
            messaging system. This allows students to contact the person who
            found their item, facilitating the return process. Additionally,
            students can upload a photo of the lost item, making it easier for
            the person who found it to identify. The platform also includes a
            map feature that shows the location where the item was last seen or
            found.
          </p>
          <p>
            "<strong>Campus Queries</strong>" also allows students to mark an
            item as found and report it to the system. Additionally, students
            have the option to set up notifications for specific items they are
            looking for. The platform also includes a feature that allows users
            to view a history of items they have reported lost or found.
          </p>
          <p>
            For the administrator, "<strong>Campus Queries</strong>" includes a
            feature that allows them to verify lost and found items before they
            are posted on the platform. In addition, it allows to report lost
            items to the campus security and local police.
          </p>
          <p>
            Overall, "<strong>Campus Queries</strong>" is a one-stop solution
            for students to report lost items, file complaints, and receive
            assistance on college campuses. We believe that this platform will
            significantly improve the process of reporting and recovering lost
            items on college campuses, as well as providing a platform for
            students to report issues and complaints.
          </p>
          <p>Thanks to Chat GPT for generating this Blog</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          disabled
          href="#"
          sx={{}}
          size="small"
          color="primary"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default MyPage;

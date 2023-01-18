import React from "react";
import styled from "styled-components";
import Shimla from "../../assets/images/Shimla.webp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { width } from "@mui/system";

function DestinationCard() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={Shimla}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shimla
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lush Green Surroundings, Weather, and Victorian Architecture
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Explore</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={Shimla}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kullu & Manali
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Adventure sports, snow point
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Explore</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={Shimla}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dharamshala
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tibetan Culture, Tem ple, Handicraft
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Explore</Button>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}

export default DestinationCard;

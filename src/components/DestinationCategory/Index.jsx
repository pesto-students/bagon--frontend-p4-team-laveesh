import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Index({ item }) {
  return (
    <div>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={item.img} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              align="center"
            >
              {item.destinationCategory}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

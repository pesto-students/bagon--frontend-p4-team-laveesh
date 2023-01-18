import React from "react";
import Index from "../DestinationCategory/Index.jsx";
import categories from "../../utils/Data.js";
import Stack from "@mui/material/Stack";

function CategoriesCards() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        {categories.map((item) => (
          <Index item={item} key={item.id} />
        ))}
      </Stack>
    </div>
  );
}

export default CategoriesCards;

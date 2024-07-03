import { Divider, Typography } from "@mui/material";
import React from "react";

export default function ContentText({ text }) {
    return (
      <>
        <Divider sx={{ background: "#ADD8E6" }} />
        <Typography sx={{ textAlign: 'center', my: 1 }}>{text}</Typography>
        <Divider sx={{ background: "#ADD8E6" }} />
      </>
    );
  }
import React from "react";

// MUI css
import { Box } from "@mui/material";

// recoil
import { useRecoilValue } from "recoil";
import { addressState } from "../recoil/addressForMint.js";

// component
import BeforeMint from "../components/BeforeMint.js";
import MintButton from "../components/MintButton.js";

export default function NFT() {
  const isReady = useRecoilValue(addressState);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isReady.isReady ? (
          <>
            <BeforeMint />
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10%" }}>
              <MintButton />
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ mb: "10%" }}>주소를 확인 해주세요.</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

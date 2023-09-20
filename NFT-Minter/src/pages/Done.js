import React from "react";

// Image
import klaytnScopeLogo from "../img/scope.png";

// MUI css
import { Box, Typography } from "@mui/material";

// Recoil
import { useRecoilValue } from "recoil";
import { addressState } from "../recoil/addressForMint";

export default function Done() {
  const { address } = useRecoilValue(addressState);

  const handleClick = () => {
    window.location.href = `https://baobab.klaytnscope.com/account/${address}?tabId=nftTransfer`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: "10px",
      }}
    >
      <Typography sx={{ margin: "0 auto" }}>
        NFT 출석 체크가 완료 되었습니다.
      </Typography>
      <Typography sx={{ margin: "0 auto" }}>
        아래 이미지를 눌러 Klaytn Scope에서 확인해주세요.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={klaytnScopeLogo}
          width="200px"
          height="auto"
          style={{ cursor: "pointer" }}
          alt="logo"
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
}

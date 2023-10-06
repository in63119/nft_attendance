import React, { useEffect } from "react";

// MUI css
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  Input,
  FormHelperText,
} from "@mui/material";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { nftMetaState } from "../recoil/nftMeta.js";

// Util
import { when } from "../utils/imgUrl.js";

export default function BeforeMint() {
  const metaData = useRecoilValue(nftMetaState);
  const nftMeta = useSetRecoilState(nftMetaState);
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const attendMessage = `${month}월 ${date}일 출석`;

  const handleName = (e) => {
    nftMeta((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  useEffect(() => {
    const dateInfo = when();

    if (dateInfo.result) {
      nftMeta((prev) => ({
        ...prev,
        description: attendMessage,
        image: dateInfo.img,
      }));
    }
  }, [attendMessage, nftMeta]);

  return (
    <Box sx={{ mb: "5%" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            아래의 정보로 NFT가 민팅됩니다.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={metaData.image}
              alt="select img"
              style={{ width: "50%", height: "auto" }}
            />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="nameInput"
            label="name : NFT 이름을 쓰세요."
            variant="standard"
            fullWidth
            onChange={handleName}
          />
          <FormControl
            disabled
            variant="standard"
            margin="dense"
            fullWidth
            sx={{ mt: "23px" }}
          >
            <Input
              id="component-disabled"
              defaultValue={`description : ${attendMessage}`}
            />
          </FormControl>
          <FormControl
            disabled
            variant="standard"
            margin="dense"
            fullWidth
            sx={{ mt: "23px" }}
          >
            <Input
              id="component-disabled"
              defaultValue="Class : 서울블록체인"
            />
          </FormControl>
          <FormControl
            disabled
            variant="standard"
            margin="dense"
            fullWidth
            sx={{ mt: "23px" }}
          >
            <Input
              id="component-disabled"
              defaultValue="Institution : 코드스테이츠"
            />
            <FormHelperText>Only use Codestates</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}

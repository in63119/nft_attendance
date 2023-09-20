import React from "react";

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
      description: attendMessage,
    }));
  };

  console.log(metaData);

  return (
    <Box sx={{ mb: "5%" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            아래의 정보로 NFT가 민팅됩니다.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://in-nft.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%8E%E1%85%A6%E1%86%A8_%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%B3.png"
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

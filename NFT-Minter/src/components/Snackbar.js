import React, { useEffect, useCallback } from "react";

// MUI css
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";

// recoil
import { useRecoilValue } from "recoil";
import { tabSelectState } from "../recoil/tabSelect.js";
import { guideState } from "../recoil/guide.js";

export default function Snackbar() {
  const { enqueueSnackbar } = useSnackbar();
  const tabSelect = useRecoilValue(tabSelectState);
  const guide = useRecoilValue(guideState);

  const showSnackbar = useCallback(
    (message) => {
      if (message === "Main") {
        enqueueSnackbar("출석 체크할 주소를 넣어주세요.");
      } else if (message === "Json") {
        enqueueSnackbar("NFT를 만들 이미지 또는 사진을 넣어주세요.");
      } else if (message === "NFT") {
        enqueueSnackbar("민팅할 NFT의 정보를 써주세요.");
      } else {
        enqueueSnackbar(message);
      }
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    showSnackbar(tabSelect.tabSelect);
  }, [tabSelect.tabSelect, showSnackbar]);

  useEffect(() => {
    if (guide.message.length > 0) {
      showSnackbar(guide.message);
    }
  }, [guide.message, showSnackbar]);

  return <Box></Box>;
}

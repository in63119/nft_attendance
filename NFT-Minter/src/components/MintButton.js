import React from "react";
import { useNavigate } from "react-router-dom";

// MUI css
import { Box, Button } from "@mui/material";

// api
import { jsonToPinata } from "../APIs/pinataCall.js";

// recoil
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { nftMetaState } from "../recoil/nftMeta.js";
import { addressState } from "../recoil/addressForMint.js";
import { loadingState } from "../recoil/loading.js";
import { tabSelectState } from "../recoil/tabSelect.js";
import { guideState } from "../recoil/guide.js";
import { successState } from "../recoil/success.js";

// contract Mint
// web3
// import { minting, sendSignTx } from "../utils/web3.js";
// caver
import { minting, sendSignTx } from "../utils/caver.js";

export default function MintButton() {
  const nftMetaData = useRecoilValue(nftMetaState);
  const toAddress = useRecoilValue(addressState);
  const isLoading = useSetRecoilState(loadingState);
  const setGuide = useSetRecoilState(guideState);
  const setSuccess = useSetRecoilState(successState);
  const navigate = useNavigate();

  // state reset
  const resetNftMeta = useResetRecoilState(nftMetaState);
  const resetAddress = useResetRecoilState(addressState);
  const resetTabSelect = useResetRecoilState(tabSelectState);
  const resetGuide = useResetRecoilState(guideState);

  const reset = () => {
    resetNftMeta();
    resetAddress();
    resetTabSelect();
    resetGuide();
    window.location.replace("/");
  };

  const handleMinting = async () => {
    isLoading({ isLoading: true });

    const tokenURI = await jsonToPinata(nftMetaData);
    console.log("tokenUri : ", tokenURI);

    if (tokenURI) {
      setGuide({ message: "민팅을 시작합니다." });
      const result = await minting(tokenURI, toAddress.address);

      if (result.hash) {
        setGuide({ message: "블록체인에 NFT를 기록합니다." });
        setGuide({
          message: "사용자의 지갑으로 NFT를 전송합니다.",
        });
        sendSignTx(result.tx);
        setGuide({
          message: "전송이 완료되었습니다. Klaytn Scope에서 확인해주세요.",
        });
        setSuccess({ isSuccess: true });
        navigate("/done");
        isLoading({ isLoading: false });
      } else {
        isLoading({ isLoading: false });
        reset();
      }
    } else {
      isLoading({ isLoading: false });
      reset();
    }
  };

  return (
    <Box>
      <Button onClick={handleMinting} variant="contained">
        민팅하기
      </Button>
    </Box>
  );
}

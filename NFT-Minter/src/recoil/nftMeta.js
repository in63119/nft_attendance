import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const nftMetaState = atom({
  key: "nftMetaData",
  default: {
    name: "",
    description: "",
    image:
      "https://in-nft.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%8E%E1%85%A6%E1%86%A8_%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%B3.png",
    attributes: [
      { trait_type: "Class", value: "서울블록체인" },
      { trait_type: "Institution", value: "코드스테이츠" },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});

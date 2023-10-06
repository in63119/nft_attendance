import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const nftMetaState = atom({
  key: "nftMetaData",
  default: {
    name: "",
    description: "",
    image: "",
    attributes: [
      { trait_type: "Class", value: "서울블록체인" },
      { trait_type: "Institution", value: "코드스테이츠" },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});

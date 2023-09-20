import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const addressState = atom({
  key: "address",
  default: {
    address: "",
    isReady: false,
  },
  effects_UNSTABLE: [persistAtom],
});

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const fileNumState = atom({
  key: "fileNumber",
  default: {
    count: 1,
  },
  effects_UNSTABLE: [persistAtom],
});

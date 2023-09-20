import { atom, selector } from "recoil";

export const attributesState = atom({
  key: "attributes",
  default: [{ trait_type: "", value: "" }],
});

export const attributeSelector = selector({
  key: "attribute",
  get: ({ get }) => {
    const attributes = get(attributesState);
    return attributes;
  },
  set: ({ set }, newValue) => {
    let result = [];

    result.push({ trait_type: "Class", value: "서울블록체인" });

    result.push({ trait_type: "Institution", value: "코드스테이츠" });

    set(attributesState, result);
  },
});

import { atom } from "recoil";

export const modalState = atom({
    key: "search.modalState",
    default: {
      open: false,
      title: "",
      body: {},
    },
  });
  
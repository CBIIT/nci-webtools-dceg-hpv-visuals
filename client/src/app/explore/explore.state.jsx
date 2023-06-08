import { atom } from "recoil";

export const exploreState = atom({
    key: "explore.exploreState",
    default: {
        _id: 0,
        _image: "/images/sample-image.jpg",
        ageEnroll: "18",
        cervResult: "0.8",
        colImpression: "12",
        dob: "1/1/2005",
        eTreatEval: "Good",
        hpvResult: "0.7",
        qcColpoBiopsy: "0.1",
        qcCyto: "0.23"
    },

});
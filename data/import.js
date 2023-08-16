const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

(async function main() {

    const filePath = "./Ground_Truth/ALTS_images_covariate_data_formatted_20230726.xlsx"
    var results = xlsx.parse(filePath);

    const metadata = results[0].data.slice(1).map((e, index) => {

        var groundTruth;

        switch(e[1]){
            case "CANCER":
                groundTruth = "Cancer"
                break;
            case "GRAY/HPV+":
                groundTruth = "HPV+"
                break;
            case "NORMAL":
                groundTruth = "Normal"
                break;
            case "PRE-CANCER":
                groundTruth = "Pre-Cancer"
        }

        const imagePath = "/images/" + groundTruth + "/" + e[0]

        return({
            _id: index,
            _image: imagePath,
            imageId: e[0].split(".")[0],
            detailedGroundTruth: e[2],
            ageEnroll: e[3],
            cervResult: e[5],
            colImpression: e[6],
            hpvResult: e[7],
            qcColpoBiopsy: e[8],
            qcCyto: e[9]
        })
    })

    fs.writeFileSync("./hpv-data.json", JSON.stringify(metadata, null, 4))

})();
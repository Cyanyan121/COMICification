(function (imageproc) {
  "use strict";

  /* Comic palette colour list */
  var palette = [
    [254, 251, 198],
    [255, 247, 149],
    [255, 240, 1],
    [189, 223, 198],
    [120, 201, 195],
    [0, 166, 192],
    [190, 219, 152],
    [128, 197, 152],
    [0, 163, 154],
    [251, 194, 174],
    [244, 148, 150],
    [234, 31, 112],
    [253, 193, 133],
    [246, 146, 120],
    [235, 38, 91],
    [184, 229, 250],
    [109, 207, 246],
    [0, 173, 239],
    [249, 200, 221],
    [244, 149, 189],
    [233, 3, 137],
    [183, 179, 216],
    [122, 162, 213],
    [0, 140, 209],
    [184, 137, 189],
    [132, 127, 185],
    [0, 111, 182],
    [183, 42, 138],
    [143, 50, 141],
    [56, 58, 141],
    [187, 176, 174],
    [132, 160, 172],
    [0, 137, 169],
    [188, 135, 151],
    [139, 126, 152],
    [1, 110, 151],
    [198, 216, 54],
    [138, 192, 68],
    [0, 160, 84],
    [190, 175, 136],
    [135, 159, 137],
    [0, 137, 139],
    [189, 136, 120],
    [140, 126, 123],
    [0, 110, 125],
    [255, 189, 33],
    [247, 145, 44],
    [236, 42, 50],
    [186, 45, 114],
    [144, 52, 115],
    [59, 59, 121],
    [194, 171, 57],
    [142, 156, 68],
    [0, 135, 79],
    [189, 50, 55],
    [147, 56, 62],
    [61, 60, 65],
    [188, 48, 93],
    [145, 54, 97],
    [61, 60, 102],
    [191, 134, 57],
    [145, 125, 66],
    [0, 108, 72],
    [0, 0, 0],
    [255, 255, 255],
  ];

  /*
   * Convert the colours in the input data to comic colours
   */
  imageproc.useComicPalette = function (inputData, outputData, saturation) {
    for (var i = 0; i < inputData.data.length; i += 4) {
      var temp1 = imageproc.fromRGBToHSL(
        inputData.data[i],
        inputData.data[i + 1],
        inputData.data[i + 2]
      );
      var H = temp1["h"];
      var S = temp1["s"];
      var L = temp1["l"];
      S = S * saturation;
      if (S >= 1) S = 1;
      var temp2 = imageproc.fromHSLToRGB(H, S, L);
      inputData.data[i] = temp2["r"];
      inputData.data[i + 1] = temp2["g"];
      inputData.data[i + 2] = temp2["b"];
    }
    for (var i = 0; i < inputData.data.length; i += 4) {
      var mindistance = 9999;
      var index = 0;
      for (var j = 0; j < palette.length; j++) {
        var distance = Math.sqrt(
          Math.pow(inputData.data[i] - palette[j][0], 2) +
            Math.pow(inputData.data[i + 1] - palette[j][1], 2) +
            Math.pow(inputData.data[i + 2] - palette[j][2], 2)
        );
        if (distance < mindistance) {
          mindistance = distance;
          index = j;
        }
      }
      inputData.data[i] = palette[index][0];
      inputData.data[i + 1] = palette[index][1];
      inputData.data[i + 2] = palette[index][2];
      outputData.data[i] = inputData.data[i];
      outputData.data[i + 1] = inputData.data[i + 1];
      outputData.data[i + 2] = inputData.data[i + 2];
    }
  };
})((window.imageproc = window.imageproc || {}));

const calculatePoint = ({ i, intervalSize, colorRangeInfo }) => {
  const { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
  return useEndAsStart ? colorEnd - i * intervalSize : colorStart + i * intervalSize;
};

const interpolateColors = ({ dataLength, colorScale, colorRangeInfo }) => {
  const { colorStart, colorEnd } = colorRangeInfo;
  const colorRange = colorEnd - colorStart;
  const intervalSize = colorRange / dataLength;
  let i;
  let colorPoint;
  const colorArray = [];

  for (i = 0; i < dataLength; i += 1) {
    colorPoint = calculatePoint({ i, intervalSize, colorRangeInfo });
    colorArray.push(colorScale(colorPoint));
  }

  return colorArray;
};

export default interpolateColors;

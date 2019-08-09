import "@babel/polyfill";
import dataContainer from "./data";
import solution from "./solution";
import test from "./test";

for (const data of dataContainer) {
  const solRes = solution(data);
  const testRes = test(data);

  if (solRes !== testRes) {
    const temp = {
      "data": data,
      "solutionRes": solRes,
      "testRes": testRes
    };
    console.log(temp);
  }
}
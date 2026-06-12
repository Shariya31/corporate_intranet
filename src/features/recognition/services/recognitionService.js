import { recognitionData } from "../../../shared/mock-data/recognitionData";

export const getRecognitionData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(recognitionData);
    }, 600);
  });

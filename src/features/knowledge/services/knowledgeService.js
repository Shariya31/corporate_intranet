import { knowledgeData } from "../../../shared/mock-data/knowledgeData";

export const getKnowledgeData =
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          knowledgeData
        );
      }, 700);
    });
import {
  analyzeFrequencies,
  printFrequencies,
} from "oot-bingo-generator/build/analysis/frequencyAnalysis";
import { getBingoList } from "oot-bingo-lists";

const frequencies = analyzeFrequencies(1000, getBingoList("v9.3"), "normal");
printFrequencies(frequencies);

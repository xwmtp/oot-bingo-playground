import { analyzeFrequencies, printChangeLog } from "oot-bingo-tools";
import { getBingoList } from "oot-bingo-lists";

async function main() {
  const frequencyResult = await analyzeFrequencies(getBingoList("v10.4"), 1000, "normal");
  console.log(`Average iterations: ${frequencyResult.meta.iterations.average}`);

  printChangeLog(getBingoList("v10.3.2").normal, getBingoList("v10.4").normal);
}

main().then();

import { chromium } from "playwright";
import "dotenv/config";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { svar } from "./svar-2024.js";

const rl = readline.createInterface({ input, output });
rl.on("close", () => process.exit(0));

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  if (process.env.NRK_USERNAME && process.env.NRK_PASSWORD) {
    await page.goto("https://www.nrk.no/");
    await page.getByRole("link", { name: "Logg på", exact: true }).click();
    await page.locator("#btnStartLogin").click();
    await page.fill("#loginUsername", process.env.NRK_USERNAME);
    await page.fill("#loginPassword", process.env.NRK_PASSWORD);
    await page.locator("#login-button").click();
    await page.waitForURL("https://www.nrk.no/");
  }

  await page.goto(
    "https://www.nrk.no/trondelag/xl/paskelabyrinten-2024_-test-deg-i-geografi-spill-med-nrks-paske-quiz-1.13969203"
  );

  await page.getByText("Start spillet").click();
  const previousQuestions = [];
  while (previousQuestions.length < 8) {
    const q = await page.locator("p.question-text").last().textContent();
    if (q === previousQuestions[previousQuestions.length - 1]) {
      continue;
    }
    const a = svar[q];
    console.table({ q, a });
    await page.getByText(new RegExp("^" + a + "$")).click();
    previousQuestions.push(q);
  }
  await rl.question("\n\nPress any key to exit...");
  rl.close();
})();

// src/index.js
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

try {
  // Read input.txt
  const data = fs.readFileSync(inputPath, "utf-8");

  // Split into lines and sum numbers
  const total = data
    .trim()
    .split("\n")
    .reduce((sum, line) => {
      const parts = line.trim().split(" ");
      const num = Number(parts[1]);
      return sum + num;
    }, 0);

  // Write result to output.txt
  fs.writeFileSync(outputPath, String(total), "utf-8");

  console.log(`✅ Total sum written to output.txt: ${total}`);
} catch (err) {
  console.error("❌ Error:", err.message);
}

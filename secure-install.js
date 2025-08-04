import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const npmrcPath = path.join(__dirname, ".npmrc");

// Generate .npmrc with token
const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/
@awesome.me:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=${process.env.FONTAWESOME_PACKAGE_TOKEN}
`;

try {
  // Write the .npmrc file
  fs.writeFileSync(npmrcPath, npmrcContent);
  console.log(".npmrc file generated successfully with environment variables");

  // Get the package name from command line arguments
  const packageName = process.argv[2];
  if (!packageName) {
    throw new Error("Please provide a package name to install");
  }

  console.log(`Installing package: ${packageName}`);

  // Run npm install
  execSync(`npm install ${packageName}`, { stdio: "inherit" });

  console.log("Package installed successfully!");
} catch (error) {
  console.error("Error during installation:", error.message);
  process.exit(1);
} finally {
  // Clean up: always remove the generated .npmrc file
  if (fs.existsSync(npmrcPath)) {
    fs.unlinkSync(npmrcPath);
    console.log("Cleaned up .npmrc file");
  }
}

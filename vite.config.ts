import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";

let https: { key: Buffer; cert: Buffer } | undefined = undefined;

try {
  https = {
    key: fs.readFileSync("C:\\Windows\\geminata.key"),
    cert: fs.readFileSync("C:\\Windows\\geminata.crt")
  };
} catch (error) {
  console.warn("Failed to load HTTPS certificates");
  console.warn(error);
  https = undefined;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https
  }
});

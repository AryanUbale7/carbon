import dotenv from "dotenv";
import { initBigQuerySchema } from "../src/services/bigqueryService";

dotenv.config();

async function run() {
  console.log("Running BigQuery Schema Migration...");
  await initBigQuerySchema();
  console.log("BigQuery migration completed successfully.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});

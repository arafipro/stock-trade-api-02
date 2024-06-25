import { z } from "zod";

export const codeRule =
  "([1][3-9ACDF-HJ-NPR-UW-Y][0-9][0-9ACDF-HJ-NPR-UW-Y]|[2-9][0-9ACDF-HJ-NPR-UW-Y][0-9][0-9ACDF-HJ-NPR-UW-Y])";

const codeRegex = new RegExp(codeRule);

export const stockSchema = z.object({
  code: z.string().regex(codeRegex),
  stockName: z.string().trim().min(2).max(128),
  market: z.enum(["プライム", "スタンダード", "グロース"]),
});

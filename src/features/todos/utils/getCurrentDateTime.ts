import dayjs from "dayjs";
import { DateTime } from "../../types";

export const getCurrentDateTime = (): DateTime => {
  return dayjs().format("M-D-YY H:m:ss");
};

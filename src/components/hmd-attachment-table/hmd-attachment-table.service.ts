import { message } from "ant-design-vue";
import { AxiosResponse } from "axios";
import request from "@/utils/request";
import { IPaginate, IResponse } from "@/core/interface";
import { IFile } from "./hmd-attachment-table.interface";

export const fetchAttachmentList = async (): Promise<IFile[]> => {
  const result = [];
  try {
    const r: AxiosResponse<IResponse<IPaginate<IFile>>> = await request({
      method: "GET",
      url: "/api/mock-api",
    });
    const res = r.data;
    if (res.respCode !== "0000") {
      message.error(res.respDesc);
      return result;
    }
  } catch (e) {
    message.error(e.message);
  }
  return result;
};

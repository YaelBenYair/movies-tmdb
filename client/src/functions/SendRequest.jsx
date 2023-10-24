import axios from "axios";
import { api_key } from "../urls";

export const SendRequestById = async (method, url, isId, numId) => {
  const requestUrl = isId ? `${url}/${numId}?api_key=${api_key}` : url;
  console.log(requestUrl);
  const response = await axios[method](requestUrl);
  return response;
};

export const SendRequest = async (method, url, page) => {
  const requestUrl = page ? `${url}&page=${page.toString()}` : url;
  console.log(requestUrl);
  const response = await axios[method](requestUrl);
  return response;
};

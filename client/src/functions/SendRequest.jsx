import axios from "axios";

const SendRequest = async (method, url, page) => {
  const requestUrl = page ? `${url}&page=${page.toString()}` : url;
  console.log(requestUrl);
  const response = await axios[method](requestUrl);
  return response;
};

export default SendRequest;

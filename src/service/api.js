import axios from "axios";

export function servicesGetData(url, reqData) {
  return axios
    .get(url, reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log("error", error);
    });
}

export function servicesPostData(url, reqData) {
  return axios
    .post(url, reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log("error", error);
    });
}

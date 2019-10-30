import axios from "../http";

export function getBanner () {
  return axios.get(`/banner?type=1`);
}

export function getSongList (params) {
  console.log(params)
  return axios.get(`/personalized`, { params: params }).then(res => {
    if (res.data.code === 200) {
      return res.data.result
    } else {
      return []
    }
  })
}

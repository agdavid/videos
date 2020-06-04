import axios from "axios";

const KEY = "AIzaSyCJBa7SFQyxdM3M6bkBFAT9yiQmTrUOMUk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

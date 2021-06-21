import axios from "axios";

export async function requestGetUser() {
  console.log('sda');
 return await axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users/1",
  });
}

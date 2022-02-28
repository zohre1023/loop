import http from "./httpService";

const apiEndpoint = "http://localhost:3000/team.json";

export async function getMembers(number) {
  let response = await http.get(apiEndpoint);
  if (response.status === 200) {
    return response?.data.slice(0, number);
  }
}

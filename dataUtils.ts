import axios from "axios";

export async function getTemplates() {
  return await axios.get(`/templates/all`, {});
}

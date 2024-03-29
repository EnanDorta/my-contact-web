import HttpClient from "./utils/Httpclient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post("/contacts", {
      body: contact,
    });
  }
}
/* eslint-disable-next-line */
export default new ContactsService();

import axios from "axios"
import setAuthToken from "../utils/setAuthToken"

class checklistApi {
  constructor() {
    this.endPoint = axios.create({
      baseURL: "http://18.141.178.15:8080",
    })
  }

  //   Login
  async login(data) {
    try {
      const res = await this.endPoint.post(`/login`, data)

      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  logout() {
    // Remove token from local storage
    localStorage.removeItem("jwtToken")
    // Remove authorization token
    setAuthToken(false)
  }

  //    Register
  async register(data) {
    try {
      const res = await this.endPoint.post(`/register`, data)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //    getAll checklist
  async getAllChecklist() {
    try {
      const res = await this.endPoint.get(`/checklist`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //    add checklist
  async addChecklist() {
    try {
      const res = await this.endPoint.post(`/checklist`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //    delete checklist
  async deleteChecklist(id) {
    try {
      const res = await this.endPoint.delete(`/checklist/${id}`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //   add item
  async addItem(data) {
    try {
      const res = await this.endPoint.post(`/item`, data)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //   get item by ID
  async getItem(id) {
    try {
      const res = await this.endPoint.get(`/item/${id}`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //   Update item by Id
  async updateItem(id) {
    try {
      const res = await this.endPoint.put(`/item/${id}`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //   Delete item by Id
  async deleteItem(id) {
    try {
      const res = await this.endPoint.delete(`/item/${id}`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  //   Rename item by Id
  async renameItem(id) {
    try {
      const res = await this.endPoint.put(`/item/rename/${id}`)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const ChecklistApi = new checklistApi()

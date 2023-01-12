import {Item} from "../models/Item";
import {HttpMethod} from "../models/httpMethod";
import {RequestPayload} from "../models/RequestPayload";

const URL: string = 'http://localhost:8080/api/items';
const DEFAULT_HEADERS: Record<string, string> = {'Content-Type': 'application/json'};

async function getAllItems(): Promise<Item[]> {
  return await fetch(URL, {
    headers: DEFAULT_HEADERS,
    method: HttpMethod.Get,
  })
    .then(response => response.json())
    .catch(errorMessage => console.error(errorMessage));
}

async function addItem(item: RequestPayload): Promise<Item> {
  return await fetch(URL, {
    headers: DEFAULT_HEADERS,
    method: HttpMethod.Post,
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .catch(errorMessage => console.error(errorMessage));
}

async function toggleItem(id: number): Promise<Item> {
  return await fetch(`${URL}/${id}`, {
    headers: DEFAULT_HEADERS,
    method: HttpMethod.Put
  })
    .then(response => response.json())
    .catch(errorMessage => console.error(errorMessage));
}

async function deleteItem(id: number): Promise<Item> {
  return await fetch(`${URL}/${id}`, {
    headers: DEFAULT_HEADERS,
    method: HttpMethod.Delete
  })
    .then(response => response.json())
    .catch(errorMessage => console.error(errorMessage));
}

const itemService = {
  getAll: getAllItems,
  add: addItem,
  toggle: toggleItem,
  delete: deleteItem
};

export default itemService;

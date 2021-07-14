import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _draw() {
  document.getElementById("user_money").innerText = ProxyState.user_money.toString()
  document.getElementById("vending_moeny").innerText = ProxyState.vending_money.toString()
  document.getElementById("item1_name").innerText = ProxyState.items.item1.name
  document.getElementById("item2_name").innerText = ProxyState.items.item2.name
  document.getElementById("item3_name").innerText = ProxyState.items.item3.name
  document.getElementById("item4_name").innerText = ProxyState.items.item4.name
}
export default class VendingController {
  constructor() {
    _draw()
  }

  insert_quarter() {
    vendingService.insert_quarter()
    _draw()
  }

  buyItem(itemnumber) {
    vendingService.buyItem(itemnumber)
    _draw()
  }
}
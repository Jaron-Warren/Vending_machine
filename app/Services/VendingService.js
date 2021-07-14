import { ProxyState } from "../AppState.js";


class VendingService {

  insert_quarter() {
    ProxyState.user_money -= .25
    ProxyState.vending_money += .25
  }

  buyItem(itemnumber) {
    console.log(itemnumber)
    console.log(ProxyState.items[itemnumber])
    if (!ProxyState.items[itemnumber]) {
      console.error("Item does not exsist!")
    } else if (ProxyState.vending_money >= ProxyState.items[itemnumber].cost) {
      ProxyState.vending_money -= ProxyState.items[itemnumber].cost
    } else {
      console.log("not enough money")
    }

  }
}

export const vendingService = new VendingService()
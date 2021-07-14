// import Value from "./Models/Value.js"
import { Vending_item } from "./Models/Vending_item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user_money = 10.00
  vending_money = 0.00
  items = {
    item1: new Vending_item('Chocolate bar', .50, 'semi-sweet chocolate', 200),
    item2: new Vending_item('Gummies', .25, 'Gummy fruits', 100),
    item3: new Vending_item('Potato chips', 1, 'lightly salted crisps', 300),
    item4: new Vending_item('water', 2, 'quinch your thirst', 0)
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

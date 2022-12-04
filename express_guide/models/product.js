
module.exports = class Product {
  constructor(t) {
    this.title = t
    this.products = []
  }

  save() {
    this.products.push()
  }

  static fetchAll() {
    return this.products
  }
}
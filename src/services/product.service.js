import Product from "../models/product.model.js";


export class ProductService {
  async fetchProducts() {
    const productsFound = await Product.findAll();
    return productsFound;
  }

  async addProduct({ product }) {
    const createdProduct = await Product.create(product);
    return createdProduct;
  }

  async fetchProduct({ idProduct }) {
    const productFound = await Product.findByPk(idProduct);
    return productFound;
  }

  async updateProduct({ idProduct, product }) {
    const productFound = await Product.findByPk(idProduct);
    const productSaved = productFound.set(product).save(product);
    return productSaved;
  }
}

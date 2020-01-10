export class Product {
  product_id: string;
  image: string;
  description: string;
  name: string;
  price: number | null;

  constructor(product?: Partial<Product> | null) {
    const {
      product_id = '',
      image = '',
      description = '',
      name = '',
      price = null,
    } = product || {};

    this.product_id = product_id;
    this.description = description;
    this.image = image;
    this.name = name;
    this.price = price;
  }
}

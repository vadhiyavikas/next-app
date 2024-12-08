import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

export default ({ productItems }) => {

  const Header = (item) => {
    return (
      <div>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-tag"></i>
          <span className="font-semibold">{item.category}</span>
        </div>
      </div>
    );
  };

  const Footer = (item) => {
    console.log(item, "item");
    return (
      <div className="flex align-items-center justify-content-between">
        <span className="text-2xl font-semibold">${item.price}</span>
        <Button
          icon="pi pi-shopping-cart"
          className="p-button-rounded"
        ></Button>
      </div>
    );
  };
  const ProductCard = ({ item }) => {
    return (
      <Card
        title={item.title}
        header={() => Header(item)}
        footer={() => Footer(item)}
        className="h-full"
        key={item.id}
      >
        <div className="flex flex-column align-items-center justify-content-center">
          <Image src={item.image} alt={item.title} width="250" />
        </div>
      </Card>
    );
  };
  return (
    <div className="grid">
      {productItems.map((product) => (
        <div className="md:col-6 lg:col-4" key={product.id}>
          <ProductCard item={product} />
        </div>
      ))}
    </div>
  );
};

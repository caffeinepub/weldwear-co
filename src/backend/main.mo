import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    id : Nat;
    name : Text;
    price : Float;
    description : Text;
    sizes : [Text];
    imageUrl : Text;
    amazonUrl : Text;
  };

  module Product {
    public func compareById(product1 : Product, product2 : Product) : { #less; #equal; #greater } {
      Nat.compare(product1.id, product2.id);
    };
  };

  let products = Map.fromIter<Nat, Product>([
    (
      1,
      {
        id = 1;
        name = "Welder Vintage Casual Proud Summer Funny Welding Gift Tshirt";
        price = 17.99;
        description = "The perfect novelty tee for any welder. Show your welding pride.";
        sizes = ["S", "M", "L", "XL", "2XL"];
        imageUrl = "https://images-na.ssl-images-amazon.com/images/P/B07KDCS6YJ.01._SCLZZZZZZZ_.jpg";
        amazonUrl = "https://www.amazon.com/dp/B07KDCS6YJ";
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Vintage American Flag Welder - Patriotic TIG MIG Gift T-Shirt";
        price = 18.99;
        description = "Distressed vintage American flag with bold WELDER stripes.";
        sizes = ["S", "M", "L", "XL", "2XL"];
        imageUrl = "https://images-na.ssl-images-amazon.com/images/P/B07KWTMXMG.01._SCLZZZZZZZ_.jpg";
        amazonUrl = "https://www.amazon.com/dp/B07KWTMXMG";
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Straight Outta Weld Shop Funny Welding Tshirt";
        price = 17.99;
        description = "Perfect novelty tee with cool sayings and welding theme.";
        sizes = ["S", "M", "L", "XL", "2XL"];
        imageUrl = "https://images-na.ssl-images-amazon.com/images/P/B07NFRNCZW.01._SCLZZZZZZZ_.jpg";
        amazonUrl = "https://www.amazon.com/dp/B07NFRNCZW";
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Heavy Duty Welding Gift for Welders T-Shirt";
        price = 18.99;
        description = "Professional welders tee for welders and metalworkers.";
        sizes = ["S", "M", "L", "XL", "2XL"];
        imageUrl = "https://images-na.ssl-images-amazon.com/images/P/B07TKZ5FG1.01._SCLZZZZZZZ_.jpg";
        amazonUrl = "https://www.amazon.com/dp/B07TKZ5FG1";
      },
    ),
  ].values());
  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Could not find a product item with this id.") };
      case (?product) { product };
    };
  };
  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };
};

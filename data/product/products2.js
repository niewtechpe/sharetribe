var path = require('path');
const { UUID } = require('sharetribe-flex-integration-sdk').types;
const { v4: uuidv4 } = require("uuid");

function imageParser(image) {
  return {
    largeUrl: `${image}?v=1661267554&width=2000`,
    mediumUrl: `${image}?v=1661267554&width=400`,
    smallUrl: `${image}?v=1661267554&width=150`,
  };
}



function createProduct(
  authorId,
  title,
  description,
  price,
  { collections, categories, materials, sizes, colors },
  { composition, care_instruccions },
  images
) {
  const productId = uuidv4();
  const variations = [];

  for (const size of sizes) {
    for (const color of colors) {
      const key = `${size}/${color}`;
      const variationId = uuidv4();

      const _images = images.find((x) => x.key === key)?.images;

      variations.push({
        key,
        variationId,
        sku: `SKU-${key}`,
        title: `${title} ${key}`,
        price: price + sizes.indexOf(size),
        images: _images?.map((src) => imageParser(src)) || [],
        parentId: productId,
      });
    }
  }

  const product = {
    id: new UUID(productId),
    authorId,
    title,
    state: "published",
    description,
    price: { amount: price, currency: "USD" },
    publicData: {
      parentId: "",
      collections,
      categories,
      materials,
      sizes,
      colors,
    },
    privateData: {
      composition,
      care_instruccions,
      variationAttributes: [
        { type: "size", values: sizes },
        { type: "color", values: colors },
      ],
      variations: variations.map((v) => ({
        key: v.key,
        variationId: v.variationId,
      })),
      images: variations[0].images,
    },
  };

  return [
    product,
    ...variations.map((x) => ({
      id: new UUID(x.variationId),
      authorId,
      title: x.title,
      state: "published",
      description,
      price: { amount: x.price, currency: "USD" },
      publicData: {
        parentId: x.parentId,
      },
      privateData: {
        images: x.images,
      },
    })),
  ];
}
const products = [
    ...createProduct(
        "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        "BROOKLYN",
        "Brooklyn, our neo-trainer with a futuristic silhouette and eco-conscious design elements",
        100,
        {
          categories: ["100106", "100100", "100000"],
          materials: ["101", "102"],
          collections: ["101"],
          sizes: ["9", "9.5"],
          colors: ["red", "blue"],
        },
        {
          care_instruccions: "care instruccions",
          composition: "100% rayon",
        },
        [
          {
            key: "9/red",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg",
            ],
          },
          {
            key: "9.5/red",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg",
            ],
          },
        ]
      ),
      ...createProduct(
        "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        "LONDOM",
        "LONDON, our neo-trainer with a futuristic silhouette and eco-conscious design elements",
        250,
        {
          categories: ["100106", "100100", "100000"],
          materials: ["101", "102"],
          collections: ["101"],
          sizes: ["9", "9.5"],
          colors: ["white", "blue","pink","gray"],
        },
        {
          care_instruccions: "care instruccions",
          composition: "100% rayon",
        },
        [
          {
            key: "9/white",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-SIDE-WHITECAPPUCINO-min.jpg",
              
            ],
          },
          {
            key: "9/blue",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9/pink",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9/gray",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9.5/white",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9.5/blue",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9.5/pink",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
          {
            key: "9.5/gray",
            images: [
              "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LONDON-TOP-WHITECAPPUCINO-min.jpg",
            ],
          },
        ]
      ),
    
  ];
  
  module.exports = products
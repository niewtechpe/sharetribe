var path = require('path');
const { UUID } = require('sharetribe-flex-integration-sdk').types;

function getFullPath(imagePath) {
    return (path.join(__dirname, imagePath)).replace(/\\/g, '/');
}

module.exports = [
    // {
    //     id: new UUID("6365a90d-a69a-405a-8f40-eb217cd7a558"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Brooklyn", // product name
    //     state: "published", // no se que es :(
    //     description: "Brooklyn, our neo-trainer with a futuristic silhouette and eco-conscious design elements", // description del producto
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5", "7"],
    //         colors: ["white", "gray", "pink"],
    //         parentId: "none",
    //         slug:"sneakers-brooklyn",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "6/white", id: "6365a90e-be5b-4938-aedf-95f9b571382d" },
    //             { key: "6/gray", id: "6365a90e-848f-43ba-85e0-68d8a49bbfbd" },
    //             { key: "6/pink", id: "6365a90e-b380-474d-9392-c010f822970c" },
    //             { key: "6.5/white", id: "6365a90f-d67e-4aed-8af2-ee692ef015cb" },
    //             { key: "6.5/gray", id: "6365a90f-57d9-4be4-ae6d-cfaae3579fc1" },
    //             { key: "6.5/pink", id: "6365a910-6f83-475e-92b4-9d0dd6e62959" },
    //             { key: "7/white", id: "6365a910-850c-4a89-924e-a06a4650c8a3" },
    //             { key: "7/gray", id: "6365a911-0c94-48fa-9ab3-69ca6335e0bd" },
    //             { key: "7/pink", id: "6365a911-a513-411b-988e-ed7a5120b1c8" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365a90e-be5b-4938-aedf-95f9b571382d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 310, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,            
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",            
    //     },
    // },
    // {
    //     id: new UUID("6365a90e-848f-43ba-85e0-68d8a49bbfbd"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 320, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a90e-b380-474d-9392-c010f822970c"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 330, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",

    //     },
    // },
    // {
    //     id: new UUID("6365a90f-d67e-4aed-8af2-ee692ef015cb"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 340, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a90f-57d9-4be4-ae6d-cfaae3579fc1"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 350, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a910-6f83-475e-92b4-9d0dd6e62959"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 6.5/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 360, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a910-850c-4a89-924e-a06a4650c8a3"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 370, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a911-0c94-48fa-9ab3-69ca6335e0bd"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 7/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 380, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365a911-a513-411b-988e-ed7a5120b1c8"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Brooklyn 7/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 390, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b5-1171-400a-9f90-a73ca7a58007"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Phoenix", // product name
    //     state: "published", // no se que es :(
    //     description: "Phoenix, the courtside sneaker designed to take you from the sidewalk to the street with effortless cool.", // description del producto
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5"],
    //         colors: ["green", "white", "gray", "red"],
    //         parentId: "none",
    //         slug: "sneakers-phoenix",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "6/green", id: "6365c8b5-d0aa-43d2-8194-9ea04da8e7d4" },
    //             { key: "6/white", id: "6365c8b6-f95c-421e-97b8-ffa9a4f076a9" },
    //             { key: "6/gray", id: "6365c8b6-b678-46e9-b184-be326fff3008" },
    //             { key: "6/red", id: "6365c8b7-6700-4c0b-b263-6d91e8c230e4" },
    //             { key: "6.5/green", id: "6365c8b7-0fc8-4e42-a2a6-8d370e8674c4" },
    //             { key: "6.5/white", id: "6365c8b8-c6b2-4422-8de1-5133050ea1a2" },
    //             { key: "6.5/gray", id: "6365c8b8-803c-46df-8b68-00a3bbea1d73" },
    //             { key: "6.5/red", id: "6365c8b9-2ab6-45fe-82e6-0a29a2902357" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365c8b5-d0aa-43d2-8194-9ea04da8e7d4"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 475, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b6-f95c-421e-97b8-ffa9a4f076a9"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 450, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b6-b678-46e9-b184-be326fff3008"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 425, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b7-6700-4c0b-b263-6d91e8c230e4"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 400, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b7-0fc8-4e42-a2a6-8d370e8674c4"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=16607757433&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660775743&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b8-c6b2-4422-8de1-5133050ea1a2"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 350, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007", 
    //     },
    // },
    // {
    //     id: new UUID("6365c8b8-803c-46df-8b68-00a3bbea1d73"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 325, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660851643&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660851643&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365c8b9-2ab6-45fe-82e6-0a29a2902357"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Phoenix 6.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365c8b5-1171-400a-9f90-a73ca7a58007",
    //     },
    // },
    // {
    //     id: new UUID("6365d015-ba6a-47c5-9d9b-15f7113e594f"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Lisbon", // product name
    //     state: "published", // no se que es :(
    //     description: "Elevated and sporty, the Lisbon is your classic hightop.", // description del producto
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5", "7", "7.5", "8"],
    //         colors: ["white"],
    //         parentId: "none",
    //         slug: "sneakers-lisbon", 
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "6/white", id: "6365d016-ae8c-419a-b3bc-e5b3cf68bfdf" },
    //             { key: "6.5/white", id: "6365d016-5c49-45e5-b52b-02e10b60856c" },
    //             { key: "7/white", id: "6365d017-a45c-4e37-b62c-90eaf79b4862" },
    //             { key: "7.5/white", id: "6365d017-428e-4520-b825-44f035435b85" },
    //             { key: "8/white", id: "6365d017-2800-44e0-91ca-76aebbc4fd0b" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365d016-ae8c-419a-b3bc-e5b3cf68bfdf"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Lisbon 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365d015-ba6a-47c5-9d9b-15f7113e594f",
    //     },
    // },
    // {
    //     id: new UUID("6365d016-5c49-45e5-b52b-02e10b60856c"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Lisbon 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 550, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365d015-ba6a-47c5-9d9b-15f7113e594f",
    //     },
    // },
    // {
    //     id: new UUID("6365d017-a45c-4e37-b62c-90eaf79b4862"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Lisbon 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 600, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365d015-ba6a-47c5-9d9b-15f7113e594f",
    //     },
    // },
    // {
    //     id: new UUID("6365d017-428e-4520-b825-44f035435b85"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Lisbon 7.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 650, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365d015-ba6a-47c5-9d9b-15f7113e594f",
    //     },
    // },
    // {
    //     id: new UUID("6365d017-2800-44e0-91ca-76aebbc4fd0b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Lisbon 8/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 700, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SIDE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-TOP-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-BACK-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-OUTSOLE-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-SOFT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LISBON-ONFOOT-WHITECAP-min.jpg?v=1659628327&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "6365d015-ba6a-47c5-9d9b-15f7113e594f",
    //     },
    // },
    // {
    //     id: new UUID("63695cbf-0bb7-4215-9de0-ab76079ff151"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Tokyo", // product name
    //     state: "published", // no se que es :(
    //     description: "Tokyo is your understated travel companion. Retro styling that is elevated for the modern muse on the go.", // description del producto
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "7"],
    //         colors: ["red", "yellow", "orange", "black"],
    //         parentId: "none",
    //         slug: "sneakers-tokyo",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "6/red", id: "63695cbf-3155-4b1f-a83a-f6b0da875d48" },
    //             { key: "6/yellow", id: "63695cc0-593b-4ce1-86f4-d252c0c6ca1d" },
    //             { key: "6/orange", id: "63695cc0-87cc-45c4-8b06-6f924de6f1dc" },
    //             { key: "6/black", id: "63695cc1-777e-4e1a-af46-331b8d62c68e" },
    //             { key: "7/red", id: "63695cc1-4059-4027-82b1-c8c1222fae0d" },
    //             { key: "7/yellow", id: "63695cc2-df40-4957-a2a0-bfd9e87ce229" },
    //             { key: "7/orange", id: "63695cc2-0455-45b1-9b09-be0e51b2b79a" },
    //             { key: "7/black", id: "63695cc2-2b71-4a5c-a4ba-caaa03ec50b8" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63695cbf-3155-4b1f-a83a-f6b0da875d48"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 6/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc0-593b-4ce1-86f4-d252c0c6ca1d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 6/yellow", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc0-87cc-45c4-8b06-6f924de6f1dc"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 6/orange", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc1-777e-4e1a-af46-331b8d62c68e"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 6/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc1-4059-4027-82b1-c8c1222fae0d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 7/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-RETRORED-min.jpg?v=1660711179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-RETRORED-min.jpg?v=1661276815&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-RETRORED-min_499ffabc-b92f-4ddb-9547-0fed47862900.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-RETRORED-min.jpg?v=1661276832&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-RETRORED-ONFOOT-min.jpg?v=1661276832&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc2-df40-4957-a2a0-bfd9e87ce229"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 7/yellow", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-WHITE_GREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-WHITEGREEN-min.jpg?v=1661353558&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/ONFOOT-WHITE_GREEN-min.jpg?v=1661353558&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc2-0455-45b1-9b09-be0e51b2b79a"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 7/orange", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-CITRUSORANGE-min_eb9b68ac-250f-41e7-b3ed-3b556e3ab0b3.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-CITRUSORANGE-min_991fb3fa-6cb6-41c9-8edd-935f0eec0668.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/Oncept-Tokyo-Packable-Citrus_ecc1a721-60a2-47e5-8f83-14f39c18e9df.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFTNESS-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-CITRUSORANGE-min.jpg?v=1661268246&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("63695cc2-2b71-4a5c-a4ba-caaa03ec50b8"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Tokyo 7/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SIDE-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-TOP-BLACK-min_7167bc63-603e-4d32-8a52-6c474651dc6f.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-BACK-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-OUTSOLE-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-SOFT-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/TOKYO-ONFOOT-BLACK-min.jpg?v=1661276900&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63695cbf-0bb7-4215-9de0-ab76079ff151",
    //     },
    // },
    // {
    //     id: new UUID("636962a8-8d91-4455-b6a7-245ca0ad2aa7"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Laguna", // product name
    //     state: "published", // no se que es :(
    //     description: "Easy as 1-2-3 … the Laguna on-the-go sneaker is an essential wardrobe piece with ease to slip on. No hassle, no fuss, just great style!", // description del producto
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["8", "10"],
    //         colors: ["brown", "pink", "gray"],
    //         parentId: "none",
    //         slug: "sneakers-laguna",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "8/brown", id: "636962a9-2d23-4309-b080-987d8fe70c71" },
    //             { key: "8/pink", id: "636962a9-9f76-4db1-89a9-8ea9a577585d" },
    //             { key: "8/gray", id: "636962aa-206c-41c4-ac7d-17d0f726ef6c" },
    //             { key: "10/brown", id: "636962aa-cc25-4217-8b27-f925dbbbacac" },
    //             { key: "10/pink", id: "636962ab-ae62-4898-8262-97eaaed8f722" },
    //             { key: "10/gray", id: "63696383-927e-4def-b9b6-9e96858cee4b" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("636962a9-2d23-4309-b080-987d8fe70c71"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 8/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("636962a9-9f76-4db1-89a9-8ea9a577585d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 8/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("636962aa-206c-41c4-ac7d-17d0f726ef6c"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 8/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 350, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("636962aa-cc25-4217-8b27-f925dbbbacac"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 10/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LATTE.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LATTE-min.jpg?v=1661535393&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("636962ab-ae62-4898-8262-97eaaed8f722"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 10/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-LILAC-min.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-LILACMULTI.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-ONFOOT-LILAC-min.jpg?v=1662475797&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("63696383-927e-4def-b9b6-9e96858cee4b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Laguna 10/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 350, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SIDE-MOONSTONE-min.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-CLOSEUP-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-OUTSOLE-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUNA-SOFTNESS-MOONSTONE.jpg?v=1662475797&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/LAGUANA-ONFOOT-MOONSTONE-min.jpg?v=1662475797&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "636962a8-8d91-4455-b6a7-245ca0ad2aa7",
    //     },
    // },
    // {
    //     id: new UUID("63696af2-dd63-4ad8-a42e-c5497676df92"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Boston", // product name
    //     state: "published", // no se que es :(
    //     description: "Boston, our geo-hiker for all-terrains and all-seasons.", // description del producto
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    //         colors: ["brown", "white"],
    //         parentId: "none",
    //         slug: "sneakers-boston",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 20,
    //         variations: [
    //             { key: "6/brown", id: "63696af2-a428-4334-ac9a-d200e5286195" },
    //             { key: "6/white", id: "63696af3-587d-44be-864b-9eebfef4425b" },
    //             { key: "6.5/brown", id: "63696af3-9b90-431e-8106-d76f2e83164d" },
    //             { key: "6.5/white", id: "63696af4-c608-4712-bfa1-712c3da8cbdc" },
    //             { key: "7/brown", id: "63696af4-2905-4960-9cd0-c8186e5b7a74" },
    //             { key: "7/white", id: "63696af4-59f0-4ce0-8188-baf0122c625e" },
    //             { key: "7.5/brown", id: "63696af5-89fb-45d0-8cce-0ed543ed2f44" },
    //             { key: "7.5/white", id: "63696af5-df10-47d9-8cb2-b542434facbc" },
    //             { key: "8/brown", id: "63696af6-193c-467b-95e4-11c381f39036" },
    //             { key: "8/white", id: "63696af6-38a8-48af-9603-9bcfda8b0604" },
    //             { key: "8.5/brown", id: "63696af7-32dc-45cd-bdca-54b354e60b45" },
    //             { key: "8.5/white", id: "63696af7-31ff-4a3f-b58d-ccba54688b53" },
    //             { key: "9/brown", id: "63696af7-4a4a-4ff9-a1b8-7cac76868700" },
    //             { key: "9/white", id: "63696af8-9c42-4b61-936a-0847201effff" },
    //             { key: "9.5/brown", id: "63696af8-aee4-4fd9-8f7d-f61837db54e0" },
    //             { key: "9.5/white", id: "63696af9-b054-4376-acbd-337b36a36545" },
    //             { key: "10/brown", id: "63696af9-6e9a-4de1-a7cf-2c079a502f35" },
    //             { key: "10/white", id: "63696af9-1394-43c6-85db-c059cae684ed" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63696af2-a428-4334-ac9a-d200e5286195"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 6/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af3-587d-44be-864b-9eebfef4425b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 400, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af3-9b90-431e-8106-d76f2e83164d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 6.5/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 450, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af4-c608-4712-bfa1-712c3da8cbdc"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 425, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af4-2905-4960-9cd0-c8186e5b7a74"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 7/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af4-59f0-4ce0-8188-baf0122c625e"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 525, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af5-89fb-45d0-8cce-0ed543ed2f44"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 7.5/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 545, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af5-df10-47d9-8cb2-b542434facbc"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 7.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 315, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af6-193c-467b-95e4-11c381f39036"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 8/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 415, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af6-38a8-48af-9603-9bcfda8b0604"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 8/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 550, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af7-32dc-45cd-bdca-54b354e60b45"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 8.5/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 465, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af7-31ff-4a3f-b58d-ccba54688b53"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 8.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 355, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af7-4a4a-4ff9-a1b8-7cac76868700"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 9/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 255, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af8-9c42-4b61-936a-0847201effff"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 9/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 345, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af8-aee4-4fd9-8f7d-f61837db54e0"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 9.5/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af9-b054-4376-acbd-337b36a36545"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 9.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 575, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af9-6e9a-4de1-a7cf-2c079a502f35"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 10/brown", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 425, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-THUNDERMOUNTAIN-min.jpg?v=1660705961&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-THUNDERMOUNTAIN-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63696af9-1394-43c6-85db-c059cae684ed"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Boston 10/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SIDE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-TOP-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-BACK-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-OUTSOLE-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-SOFT-WHITEMULTI-min.jpg?v=1660852179&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BOSTON-WHITEMULTI-ONFOOT-min.jpg?v=1660852179&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63696af2-dd63-4ad8-a42e-c5497676df92",
    //     },
    // },
    // {
    //     id: new UUID("63697565-cb10-4220-a78e-a4b5ef737c79"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "Monaco", // product name
    //     state: "published", // no se que es :(
    //     description: "Monaco is the most coveted dress sandal of the season.", // description del producto
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "7", "8"],
    //         colors: ["black", "pink", "white", "green"],
    //         parentId: "none",
    //         slug: "sneakers-monaco",            
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: ["size", "color"],
    //         stock: 10,
    //         variations: [
    //             { key: "6/black", id: "63697566-2bd4-4604-8089-de61c458fbca" },
    //             { key: "6/pink", id: "63697566-2dcf-4ea3-83d9-35948e441eb4" },
    //             { key: "6/white", id: "63697567-1d49-45fc-a180-9f60afe1b0fb" },
    //             { key: "6/green", id: "63697567-8ced-4916-b865-59859d50ee6b" },
    //             { key: "7/black", id: "63697568-90b5-4d52-a31d-ef84799e9fa1" },
    //             { key: "7/pink", id: "63697568-2533-478f-a6dc-3071d72a5c7d" },
    //             { key: "7/white", id: "63697568-b8de-4e18-a194-7f0d3591ce25" },
    //             { key: "7/green", id: "63697569-147f-4dc3-bf3c-2d48a559ef1f" },
    //             { key: "8/black", id: "63697569-acc8-431b-aa6c-311faffab5e6" },
    //             { key: "8/pink", id: "6369756a-59cc-40d1-9323-bb0f4af744ab" },
    //             { key: "8/white", id: "6369756a-dc75-48ee-9cd3-d96fdbbda3f6" },
    //             { key: "8/green", id: "6369756a-5c68-4285-a245-3d8e57df6121" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63697566-2bd4-4604-8089-de61c458fbca"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 6/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697566-2dcf-4ea3-83d9-35948e441eb4"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 6/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697567-1d49-45fc-a180-9f60afe1b0fb"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 325, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697567-8ced-4916-b865-59859d50ee6b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 6/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 345, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697568-90b5-4d52-a31d-ef84799e9fa1"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 7/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 250, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697568-2533-478f-a6dc-3071d72a5c7d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 7/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 450, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697568-b8de-4e18-a194-7f0d3591ce25"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 475, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697569-147f-4dc3-bf3c-2d48a559ef1f"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 7/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 550, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63697569-acc8-431b-aa6c-311faffab5e6"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 8/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 600, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-BLACK.jpg?v=1660885137&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-BLACK-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("6369756a-59cc-40d1-9323-bb0f4af744ab"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 8/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 625, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-PRISMPINK.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-PINKPRISM-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("6369756a-dc75-48ee-9cd3-d96fdbbda3f6"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 8/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 650, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-WHITECLOUD.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-WHITECLOUD-min.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("6369756a-5c68-4285-a245-3d8e57df6121"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "Monaco 8/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 700, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 10,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SIDE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-TOP-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-BACK-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-OUTSOLE-JADE.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-ONFOOT-JADE-min.jpg?v=1661534259&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/MONACO-SOFTNESS-JADE.jpg?v=1661534259&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63697565-cb10-4220-a78e-a4b5ef737c79",
    //     },
    // },
    // {
    //     id: new UUID("63767603-4abe-4ed9-9ada-16c5966b74cd"), // product id sharetribe
    //     authorId: "634f3052-4eed-409c-9233-8506bbcf4550", // store id
    //     title: "Rose Bustier", // product name
    //     state: "published", // no se que es :(
    //     description: "A new way to do the essential LDB: With a mini length, spaghetti straps, asymmetric draping and the most flattering fit, she's for the nights you really want to stun.", // description del producto
    //     price: { amount: 595, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["102"],
    //         categories: ["100104", "100100", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "2"],
    //         colors: ["black"],
    //         parentId: "none",
    //         slug: "dress-bustier",            
    //     },
    //     privateData: {
    //         composition: "100% CLOTH", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying.",
    //         variationAttributes: ["size", "color"],
    //         stock: 30,
    //         variations: [
    //             { key: "6/black", id: "63767603-8bba-48cb-b403-72d12a78bd38" },
    //             { key: "2/black", id: "63767604-b858-46bb-badd-41a493f8a7a3" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=150",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63767603-8bba-48cb-b403-72d12a78bd38"),
    //     authorId: "634f3052-4eed-409c-9233-8506bbcf4550",
    //     title: "Rose Bustier 6/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 580, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63767603-4abe-4ed9-9ada-16c5966b74cd",
    //     },
    // },
    // {
    //     id: new UUID("63767604-b858-46bb-badd-41a493f8a7a3"),
    //     authorId: "634f3052-4eed-409c-9233-8506bbcf4550",
    //     title: "Rose Bustier 2/black", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 595, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         stock: 20,
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_2.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_1.webp?v=1665259375&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres_3.webp?v=1665259374&width=150",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=400",
    //                 smallUrl: "https://cdn.shopify.com/s/files/1/0865/3386/products/alice-olivia-BLACK-Alice-Olivia-Rose-Bustier-Mini-Dres.webp?v=1665259373&width=150",
    //             },
    //         ],
    //     },
    //     publicData: {
    //         parentId: "63767603-4abe-4ed9-9ada-16c5966b74cd",
    //     },
    // },
    {
        id: new UUID("63767c8c-58bc-4052-b0fc-9088b11649b0"), // product id sharetribe
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22", // store id
        title: "Halter Cadena", // product name
        state: "published", // no se que es :(
        description: "Vestido confeccionado con tejido en mezcla de lino. Cuello halter con aplicación de eslabones efecto carey y lazo en espalda.", // description del producto
        price: { amount: 150, currency: "USD" }, // es el precio de la priemra variación encotnrada
        publicData: {
            collections: ["102"],
            categories: ["100104", "100100", "100000"],
            materials: ["101", "102"],
            sizes: ["XS","S","M","L","XL"],
            colors: ["brown"],
            parentId: "none",
            slug: "dress-halter",            
        },
        privateData: {
            composition: "100% CLOTH", // es el material del producto
            care_instruccions:
                "Este producto talla más pequeño de lo habitual.",
            variationAttributes: ["size", "color"],
            stock: 30,
            variations: [
                { key: "XS/brown", id: "63767c8c-4265-4e4a-bf1d-cc749bff23c1" },
                { key: "S/brown", id: "63767c8c-13fa-443f-9673-24ac00ea17d3" },
                { key: "M/brown", id: "63767c8d-1f5e-43e9-9adc-1352430e3910" },
                { key: "L/brown", id: "63767c8d-a6b0-4d1f-bae2-b9d7beb736d3" },
                { key: "XL/brown", id: "63767c8e-3999-4ee9-8c1f-e198d3973df4" },
            ],
            // de la primera variación del producto
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },
            ],
        },
    },
    {
        id: new UUID("xx"),
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22",
        title: "Halter Cadena XS/brown", // product name parent + variation name
        state: "published",
        price: { amount: 160, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            stock: 20,
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },                
            ],
        },
        publicData: {
            parentId: "63767c8c-58bc-4052-b0fc-9088b11649b0",
        },
    },
    {
        id: new UUID("xx"),
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22",
        title: "Halter Cadena S/brown", // product name parent + variation name
        state: "published",
        price: { amount: 170, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            stock: 20,
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },
            ],
        },
        publicData: {
            parentId: "63767c8c-58bc-4052-b0fc-9088b11649b0",
        },
    },
    {
        id: new UUID("xx"),
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22",
        title: "Halter Cadena M/brown", // product name parent + variation name
        state: "published",
        price: { amount: 180, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            stock: 20,
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },
            ],
        },
        publicData: {
            parentId: "63767c8c-58bc-4052-b0fc-9088b11649b0",
        },
    },
    {
        id: new UUID("xx"),
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22",
        title: "Halter Cadena L/brown", // product name parent + variation name
        state: "published",
        price: { amount: 200, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            stock: 20,
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },
            ],
        },
        publicData: {
            parentId: "63767c8c-58bc-4052-b0fc-9088b11649b0",
        },
    },
    {
        id: new UUID("xx"),
        authorId: "634f3052-4caa-4389-82a5-d8009e2f7d22",
        title: "Halter Cadena XL/brown", // product name parent + variation name
        state: "published",
        price: { amount: 190, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            stock: 20,
            images: [
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/1360/4387068700_1_1_1.jpg?ts=1667822629104",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_1_1.jpg?ts=1667822574524",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    mediumUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                    smallUrl: "https://static.zara.net/photos///2022/S/0/1/p/4387/068/700/503/w/563/4387068700_2_3_1.jpg?ts=1667822573426",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_1_1.jpg?ts=1652716671448",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_2_1.jpg?ts=1652716656284",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_3_1.jpg?ts=1652716680412",
                },
                {
                    largeUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    mediumUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                    smallUrl: "https://static.zara.net/photos///2022/V/0/1/p/4387/068/700/2/w/563/4387068700_6_4_1.jpg?ts=1652716672114",
                },
            ],
        },
        publicData: {
            parentId: "63767c8c-58bc-4052-b0fc-9088b11649b0",
        },
    }, 
]
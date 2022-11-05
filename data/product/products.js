var path = require('path');
const { UUID } = require('sharetribe-flex-integration-sdk').types;

function getFullPath(imagePath) {
    return (path.join(__dirname, imagePath)).replace(/\\/g, '/');
}

module.exports = [
    // {
    //     id: new UUID("6365a90d-a69a-405a-8f40-eb217cd7a558"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "BROOKLYN", // product name
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
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: [
    //             { type: "size", values: ["6", "6.5", "7"] },
    //             { type: "color", values: ["white", "gray", "pink"] },
    //         ],
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
    //     title: "BROOKLYN 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //         parentId: "6365a90d-a69a-405a-8f40-eb217cd7a558",
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
    //         parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
    //     },
    // },
    // {
    //     id: new UUID("6365a90e-848f-43ba-85e0-68d8a49bbfbd"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "BROOKLYN 6/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 6/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 6.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 6.5/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 7/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "BROOKLYN 7/pink", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX", // product name
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
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: [
    //             { type: "size", values: ["6", "6.5"] },
    //             { type: "color", values: ["green", "white", "gray", "red"] },
    //         ],
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
    //     title: "PHOENIX 6/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "PHOENIX 6.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "LISBON", // product name
    //     state: "published", // no se que es :(
    //     description: "Elevated and sporty, the LISBON is your classic hightop.", // description del producto
    //     price: { amount: 375, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5", "7", "7.5", "8"],
    //         colors: ["white"],
    //         parentId: "none",
    //     },
    //     privateData: {
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: [
    //             { type: "size", values: ["6", "6.5", "7", "7.5", "8"] },
    //             { type: "color", values: ["white"] },
    //         ],
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
    //     title: "LISBON 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "LISBON 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "LISBON 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "LISBON 7.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    //     title: "LISBON 8/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
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
    // }
]
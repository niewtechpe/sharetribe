var path = require('path');
const { UUID } = require('sharetribe-flex-integration-sdk').types;

function getFullPath(imagePath) {
    return (path.join(__dirname, imagePath)).replace(/\\/g, '/');
}

module.exports = [
    {
        id: new UUID("63656890-5fd7-479f-af87-e80aeac1ccda"), // product id sharetribe
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
        title: "BROOKLYN", // product name
        state: "published", // no se que es :(
        description: "Brooklyn, our neo-trainer with a futuristic silhouette and eco-conscious design elements", // description del producto
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        publicData: {
            collections: ["101"],
            categories: ["100106", "100100", "100000"],
            materials: ["101", "102"],
            sizes: ["6", "6.5", "7"],
            colors: ["white", "gray", "pink"],
            parentId: "none",
        },
        privateData: {            
            composition: "100% RAYON", // es el material del producto
            care_instruccions:
                "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
            variationAttributes: [
                { type: "size", values: ["6", "6.5", "7"] },
                { type: "color", values: ["white", "gray", "pink"] },
            ],
            variations: [
                { key: "6/white", id: "63656891-825a-4207-9983-6cbb95b2739d" },
                { key: "6/gray", id: "63656891-8bf6-4e38-bc54-3fd29eb30386" },
                { key: "6/pink", id: "63656892-37bd-44df-a892-11b31b864015" },
                { key: "6.5/white", id: "63656893-2328-4bb3-9f7e-c1938fa559d2" },
                { key: "6.5/gray", id: "63656893-e64c-4c23-bf1b-fa7c86c96181" },
                { key: "6.5/pink", id: "63656893-f79a-4f43-9e94-826a1943bd69" },
                { key: "7/white", id: "63656894-6ed3-4c9f-a8af-26bd6696f779" },
                { key: "7/gray", id: "63656894-5d7e-497b-9ae6-61642d7a2506" },
                { key: "7/pink", id: "63656895-6d21-4107-ac85-3751e7ff1a4c" },
            ],
            // de la primera variación del producto
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656891-825a-4207-9983-6cbb95b2739d"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6/white", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
        },
        publicData: {
         //   parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656891-8bf6-4e38-bc54-3fd29eb30386"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6/gray", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656892-37bd-44df-a892-11b31b864015"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6/pink", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656893-2328-4bb3-9f7e-c1938fa559d2"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6.5/white", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656893-e64c-4c23-bf1b-fa7c86c96181"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6.5/gray", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656893-f79a-4f43-9e94-826a1943bd69"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 6.5/pink", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656894-6ed3-4c9f-a8af-26bd6696f779"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 7/white", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITECLOUD-min.jpg?v=1661267554&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITECLOUD-ONFOOT-min.jpg?v=1661267554&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656894-5d7e-497b-9ae6-61642d7a2506"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 7/gray", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULIT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-STORMGREYMULTI-min.jpg?v=1660852062&width=150",

                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-STORMGREYMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1661267554&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-STORMGREYMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    {
        id: new UUID("63656895-6d21-4107-ac85-3751e7ff1a4c"),
        authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
        title: "BROOKLYN 7/pink", // product name parent + variation name
        state: "published",
        price: { amount: 300, currency: "USD" }, // es el precio de la priemra variación encotnrada
        privateData: {
            product_code: "sku_301790",
        },
        publicData: {
            parentId: "63656890-5fd7-479f-af87-e80aeac1ccda",
            images: [
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SIDE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-TOP-WHITEMULTI.jpg?v=1660708253&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660708253&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-BACK-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852047&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-OUTSOLE-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-SOFT-WHITEMULTI-min.jpg?v=1660852062&width=150",
                },
                {
                    largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=2000",
                    mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=400",
                    smallUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/BROOKLYN-WHITEMULTI-ONFOOT-min.jpg?v=1660852062&width=150",
                },
            ],
        },
    },
    // {
    //     id: new UUID("xxx"), // product id sharetribe
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3", // store id
    //     title: "PHOENIX", // product name
    //     state: "published", // no se que es :(
    //     description: "Phoenix, the courtside sneaker designed to take you from the sidewalk to the street with effortless cool.", // description del producto
    //     price: { amount: 275, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     publicData: {
    //         collections: ["101"],
    //         categories: ["100211", "100200", "100000"],
    //         materials: ["101", "102"],
    //         sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    //         colors: ["green", "white", "gray"],
    //         parentId: "none",
    //     },
    //     privateData: {            
    //         composition: "100% RAYON", // es el material del producto
    //         care_instruccions:
    //             "Machine wash separately, do not bleach, do not tumble dry, line drying, iron at low heat, dry clean with any solvent except trichloroethylene",
    //         variationAttributes: [
    //             { type: "size", values: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"] },
    //             { type: "color", values: ["green", "white", "gray", "red"] },
    //         ],
    //         variations: [
    //             { key: "6/green", id: "xxx" },
    //             { key: "6/white", id: "xxx" },
    //             { key: "6/gray", id: "xxx" },
    //             { key: "6/red", id: "xxx" },
    //             { key: "6.5/green", id: "xxx" },
    //             { key: "6.5/white", id: "xxx" },
    //             { key: "6.5/gray", id: "xxx" },
    //             { key: "6.5/red", id: "xxx" },
    //             { key: "7/green", id: "xxx" },
    //             { key: "7/white", id: "xxx" },
    //             { key: "7/gray", id: "xxx" },
    //             { key: "7/red", id: "xxx" },
    //             { key: "7.5/green", id: "xxx" },
    //             { key: "7.5/white", id: "xxx" },
    //             { key: "7.5/gray", id: "xxx" },
    //             { key: "7.5/red", id: "xxx" },
    //             { key: "8/green", id: "xxx" },
    //             { key: "8/white", id: "xxx" },
    //             { key: "8/gray", id: "xxx" },
    //             { key: "8/red", id: "xxx" },
    //             { key: "8.5/green", id: "xxx" },
    //             { key: "8.5/white", id: "xxx" },
    //             { key: "8.5/gray", id: "xxx" },
    //             { key: "8.5/red", id: "xxx" },
    //             { key: "9/green", id: "xxx" },
    //             { key: "9/white", id: "xxx" },
    //             { key: "9/gray", id: "xxx" },
    //             { key: "9/red", id: "xxx" },
    //             { key: "9.5/green", id: "xxx" },
    //             { key: "9.5/white", id: "xxx" },
    //             { key: "9.5/gray", id: "xxx" },
    //             { key: "9.5/red", id: "xxx" },
    //             { key: "10/green", id: "xxx" },
    //             { key: "10/white", id: "xxx" },
    //             { key: "10/gray", id: "xxx" },
    //             { key: "10/red", id: "xxx" },
    //         ],
    //         // de la primera variación del producto
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63649d48-46a0-4888-8bf9-05ad44b98b58"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9",
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63649d48-5c43-4dc1-b6df-edfe45286f50"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63649d48-26db-4320-8110-33442d7b15c1"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9",
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63649d49-381c-47ed-a2e4-12dac19e25dc"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9",
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360a-b776-4527-bf61-bbdb8bfeba48"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360b-d6d6-4551-8778-eb1c9581cfae"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360b-775c-45c9-99df-f17e0d5fdfc5"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360b-5c61-4c0b-b8f5-3512990f5f47"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 6.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360c-bc0d-49a0-958d-19298129f80b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360c-d4a2-4994-ac13-b10fa11f8d5b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360d-6237-4a61-a65f-d0327d89dc27"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360d-6c2e-40fb-bb8b-1c37034140e8"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360e-aa6f-408d-9eee-6e8fcfd22959"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360e-6305-4876-afa9-eb59a98dc97d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360e-7a5e-4961-b6f0-d5a0b475529b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360f-47fc-4398-a927-f12017df897a"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 7.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("6365360f-de6a-4476-a666-55d960dbba7d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63653610-a52b-499d-9ae8-9797ac8c198d"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63653610-39cb-42c0-978d-b6770e057e8b"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("63653610-35b1-4037-b169-19195cfb3fbe"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 8.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9.5/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9.5/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9.5/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 9.5/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 10/green", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-FIELDGREENS-min.jpg?v=1660775743&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-OAK-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-FIELDGREENS-min.jpg?v=1660775743",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-GREENFIELDS-ONFOOT-min.jpg?v=1660851643",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 10/white", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", // 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-WHITECLOUD-min.jpg?v=1661267338&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-WHITECLOUD-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-WHITECLOUD-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 10/gray", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-ANTRACITE-min.jpg?v=1660851643&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-ANTHRACITE-min.jpg?v=1660851643",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-ANTHRACITE-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-ANTRACITE-ONFOOT-min.jpg?v=1660954227",
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: new UUID("xxx"),
    //     authorId: "634f3052-f08c-4b0d-a248-0fb85d8e54a3",
    //     title: "PHOENIX 10/red", // product name parent + variation name
    //     state: "published",
    //     price: { amount: 500, currency: "USD" }, // es el precio de la priemra variación encotnrada
    //     privateData: {
    //         product_code: "sku_301790",
    //     },
    //     publicData: {
    //         parentId: "63649d47-eb38-41f4-b373-a94d38a6efe9", 
    //         images: [
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SIDE-RETRORED-min.jpg?v=1660954227&width=2000",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-TOP-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-BACK-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-OUTSOLE-RETRORED-min.jpg?v=1660954227",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-SOFT-RETRORED_1_-min.jpg?v=1661267338",
    //             },
    //             {
    //                 largeUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //                 mediumUrl: "https://cdn.shopify.com/s/files/1/0507/5989/3197/products/PHOENIX-RETRORED-ONFOOT-min.jpg?v=1661267338",
    //             },
    //         ],
    //     },
    // },
]
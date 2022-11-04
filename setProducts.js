const sharetribeIntegrationSdk = require('sharetribe-flex-integration-sdk');
const products = require("./data/product/products");
const { UUID } = require('sharetribe-flex-integration-sdk').types;

const integrationSdk = sharetribeIntegrationSdk.createInstance({
    clientId: '94856be8-5bf1-440f-9263-f72cde121af4',
    clientSecret: 'f05c6e5f0f2b9ad17c90756686641f0f11bd073a'
});

async function existProduct(productId) {
    try {
        const data = await integrationSdk.listings.show({ id: productId });
        console.log(data);
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

async function updateProduct(product) {
    try {
        const response = await integrationSdk.listings.update(product);
        console.log(response);
    } catch (error) {
        console.error("Product not upload");
        console.log(error);
    }
}

async function createProduct(product) {
    try {
        const response = await integrationSdk.listings.create(product);
        console.log(response);
    } catch (error) {
        console.error("Product not created");
        console.log(error);
    }
}

async function addImages(product) {
    // avoid upload images !!!!!!!!!!!
    let avoidImageUpload = false;

 //   console.log(`\n2. Adding images: ${product.title} (${product.imagesToUpload.length} in total)`);
    const images = [];

    if (!avoidImageUpload) {
        if (product.imagesToUpload) {
            for (const image of product.imagesToUpload) {
                console.log(`Updating image: ${image}`);
                const data = await uploadImage(image);

                if (data) {
                    console.log(`Updated image with id: ${data}`);
                    images.push(new UUID(data));
                }
            }
        }
    }

    product.images = images;
    delete product.imagesToUpload;
    return product;
}

async function uploadImage(pathImage) {
    try {
        const response = await integrationSdk.images.upload({ image: pathImage });
        return response.data.data.id.uuid;
    } catch (error) {
        console.error("Image not upload");
        // console.error(error);
        return null;
    }
}

//Main function
//=======================================================================
async function main() {
    console.log("INIT CREATE/UPDATE PRODUCT");
    console.log("============================================");

    for (let product of products) {
        // validate if product exist on sharetribe
        console.log(`\n1. Validate product in sharetribe: ${product.title}`);
        const existProductSharetribe = await existProduct(product.id);

        //Add images to product 
        product = await addImages(product);

        if (existProductSharetribe) {
            // Delete authorId and state in product to avoid 400 on update
            delete product.authorId;
            delete product.state;
            console.log(`\n3. Updating product: ${product.title}`);
            await updateProduct(product);
        } else {
            // Delete id in product to avoid 400 on create
            delete product.id;
            console.log(`\n3. Creating product: ${product.title}`);
            await createProduct(product);
        }
    }
}

main();
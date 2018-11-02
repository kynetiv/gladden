const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const axios = require('axios');

const BASE_API_URI =
    'http://localhost:3000/';

const auth = {
        username: process.env.GLADDEN_API_USER || 'admin',
        password: process.env.GLADDEN_API_PASS || 'supersecret1'
    };

// image collections ?id slugs
const galleries = [
    'newborn'
];

exports.sourceNodes = async ({actions, createNodeId, store, cache}) => {

    for (const slug of galleries) {
        const {createNode, createNodeField} = actions;
        // Fetch data
        const {data} = await axios.get(
            BASE_API_URI + 'pics?id=' + slug,
            {
                auth
            }
        );

        // use for loop for async/await support
        const images = JSON.parse(data);
        for (const img of images) {
            let node;
            console.log(BASE_API_URI + img.img);
            try {
                fileNode = await createRemoteFileNode({
                    url: BASE_API_URI + img.img,
                    cache,
                    store,
                    createNode,
                    auth: {
                        htaccess_user: auth.username,
                        htaccess_pass: auth.password
                    },
                    createNodeId
                });
                await createNodeField({
                    node: fileNode,
                    name: `${slug}`,
                    value: 'true',
                });

                await createNodeField({
                    node: fileNode,
                    name: 'source',
                    value: BASE_API_URI + img.img

                })
            } catch (error) {
                console.warn('error creating node', error);
            }
        }
    }
};
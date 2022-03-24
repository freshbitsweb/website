const axios = require("axios");
exports.handler = async function (event, context) {
    try {
        const data = {
            query: `
                query GetUserArticles {
                    user(username: "freshbitsweb") {
                        publication {
                            posts(page: 0) {
                                title
                                brief
                                slug
                                coverImage
                            }
                    }
                }
            }
        `,
        };

        const config = {
            method: 'post',
            url: 'https://api.hashnode.com/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: await axios(config).then((res) => {
                    return res.data.data;
                }).catch((err) => {
                    return err;
                }),
            }),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({
                msg: err.message,
            }),
        };
    }
};
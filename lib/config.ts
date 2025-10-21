const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
        },
        databaseurl: process.env.DATABASE_URL!,
        upstash: {
            redisUrl: process.env.UPSTASH_REDIS_REST_URL!,
            redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
            qstackUrl: process.env.UPSTASH_QSTACK_URL!,
            qstackToken: process.env.UPSTASH_QSTACK_TOKEN!,
            qstackCurrentSigningKey: process.env.UPSTASH_QSTACK_CURRENT_SIGNING_KEY!,
            qstackNextSigningKey: process.env.UPSTASH_QSTACK_NEXT_SIGNING_KEY!
        },
        emailjs: {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
    }
}

export default config;
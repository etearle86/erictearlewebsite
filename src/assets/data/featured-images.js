const context = require.context('../images/featured', false, /\.(jpeg|jpg|png|webp)$/);

export const featuredImages = context.keys()
    .sort((a, b) => {
        const numA = parseInt(a.match(/(\d+)\./)?.[1]);
        const numB = parseInt(b.match(/(\d+)\./)?.[1]);
        return numA - numB;
    })
    .map((key) => context(key));
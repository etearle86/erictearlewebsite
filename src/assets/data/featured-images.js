const imageModules = import.meta.glob('../images/featured/*.{jpeg,jpg,png,webp}', { eager: true });

export const featuredImages = Object.keys(imageModules)
    .sort((a, b) => {
        const numA = parseInt(a.match(/(\d+)\./)?.[1]);
        const numB = parseInt(b.match(/(\d+)\./)?.[1]);
        return numA - numB;
    })
    .map((key) => imageModules[key].default);

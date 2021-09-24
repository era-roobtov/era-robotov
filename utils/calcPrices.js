const calcTwo = (cost) => {
    return (cost * 8) - ((cost * 8) * 0.1);
};

const calcThree = (cost) => {
    return (cost * 2 * 4) - ((cost * 2 * 4) * 0.1);
}

export {
    calcTwo,
    calcThree
}


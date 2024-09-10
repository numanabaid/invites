export const checkExpiryDate = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024-10-09');

    if (currentDate >= targetDate) {
        return true;
    }
    return false;
};

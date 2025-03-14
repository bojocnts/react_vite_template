export const isEmpty = (object: unknown) => {
    return (
        object === null ||
        object === undefined ||
        (typeof object === 'string' && object.length === 0) ||
        (Array.isArray(object) && object.length === 0) ||
        (typeof object === 'object' && object !== null && Object.keys(object).length === 0)
    );
};

export const isNotEmpty = (object: unknown) => !isEmpty(object);

export const formatBalancePHP = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
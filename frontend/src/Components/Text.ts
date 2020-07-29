export const textTruncate = (str: string, maxLength: number) =>
    str && str.length > maxLength ? `${str.substring(0, maxLength - 3)}...` : str;

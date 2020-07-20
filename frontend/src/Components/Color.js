export const getColorCodeByItem = (colors, item) => {
    const cardColor = colors.find((color) => color.colorId === item.backgroundColorId);
    return cardColor ? cardColor.code : "#D3D3D3";
};

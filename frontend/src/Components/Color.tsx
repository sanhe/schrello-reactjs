export interface ColorInterface {
    colorId: string;
    title: string;
    code: string;
    isDefault?: boolean;
}

interface GetColorByItemProps {
    colors: Array<ColorInterface>;
    item: any;
}

export const getColorCodeByItem = ({ colors, item }: GetColorByItemProps) => {
    const cardColor = colors.find((color) => color.colorId === item.backgroundColorId);
    return cardColor ? cardColor.code : "#D3D3D3";
};

export interface TextStyleType {
    color: string;
    fontWeight: number;
    fontSize: number;
}
export interface RingChartDataType {
    name: string;
    value: number;
}
export interface TitleType {
    text: string;
    left: string | number;
    top: string | number;
    textStyle: TextStyleType;
}
export interface RingChartConfigType {
    data: Array<RingChartDataType>;
    radius: [string, string];
    center: [string, string];
    color: Array<string>;
    title: Array<TitleType>;
    label: {
        show: boolean;
        position?: string;
    };
    labelLine: {
        show: boolean;
    };
    legendConfig: LegendConfigType;
}
export interface LegendConfigType {
    show: boolean;
    icon: string;
    orient: string;
    left: string;
    top: string;
    align: string;
    itemGap: number;
    itemWidth: number;
    itemHeight: number;
    textStyle: TextStyleType;
    height: number;
}

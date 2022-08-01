export interface TextStyleType {
    color: string;
    fontWeight: number;
    fontSize: number;
}
export interface BarChartDataType {
    data: Array<{
        name: string;
        value: number;
    }>;
    color: string[];
}
export interface TitleType {
    text: string;
    left: string | number;
    top: string | number;
    textStyle: TextStyleType;
}
export interface GridType {
    left: number | string;
    top: number | string;
    right: number | string;
    bottom: number | string;
}
export interface BarChartConfigType {
    data: Array<BarChartDataType>;
    gridConfig: GridType;
    legendConfig: LegendConfigType;
    xAxisConfig: any;
    yAxisConfig: any;
    aAxisLabelConfig: any;
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

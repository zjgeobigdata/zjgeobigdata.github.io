import type { LegendConfigType, RingChartConfigType, RingChartDataType, TitleType } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    class: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: ArrayConstructor;
        required: true;
    };
    config: {
        type: null;
        required: true;
    };
}, {
    props: {
        class: string;
        data: Array<RingChartDataType>;
        config: RingChartConfigType;
    };
    getLegend: (args: LegendConfigType) => {
        legend: {
            show: boolean;
            icon: string;
            orient: string;
            left: string;
            top: string;
            align: string;
            itemGap: number;
            itemWidth: number;
            itemHeight: number;
            textStyle: import("../types").TextStyleType;
            height: number;
        };
    };
    getTitle: (args: Array<TitleType>) => {
        title: TitleType[];
    };
    getSeries: (data: RingChartDataType[], config: RingChartConfigType) => {
        series: {
            name: string;
            type: string;
            radius: [string, string];
            center: [string, string];
            color: string[];
            label: {
                show: boolean;
                position?: string | undefined;
            };
            labelLine: {
                show: boolean;
            };
            data: RingChartDataType[];
        }[];
    };
    getOptions: (data: RingChartDataType[], config: RingChartConfigType) => import("vue").Ref<{
        series: {
            name: string;
            type: string;
            radius: [string, string];
            center: [string, string];
            color: string[];
            label: {
                show: boolean;
                position?: string | undefined;
            };
            labelLine: {
                show: boolean;
            };
            data: {
                name: string;
                value: number;
            }[];
        }[];
        title: {
            text: string;
            left: string | number;
            top: string | number;
            textStyle: {
                color: string;
                fontWeight: number;
                fontSize: number;
            };
        }[];
        legend: {
            show: boolean;
            icon: string;
            orient: string;
            left: string;
            top: string;
            align: string;
            itemGap: number;
            itemWidth: number;
            itemHeight: number;
            textStyle: {
                color: string;
                fontWeight: number;
                fontSize: number;
            };
            height: number;
        };
    }>;
    option: import("vue").Ref<{
        series: {
            name: string;
            type: string;
            radius: [string, string];
            center: [string, string];
            color: string[];
            label: {
                show: boolean;
                position?: string | undefined;
            };
            labelLine: {
                show: boolean;
            };
            data: {
                name: string;
                value: number;
            }[];
        }[];
        title: {
            text: string;
            left: string | number;
            top: string | number;
            textStyle: {
                color: string;
                fontWeight: number;
                fontSize: number;
            };
        }[];
        legend: {
            show: boolean;
            icon: string;
            orient: string;
            left: string;
            top: string;
            align: string;
            itemGap: number;
            itemWidth: number;
            itemHeight: number;
            textStyle: {
                color: string;
                fontWeight: number;
                fontSize: number;
            };
            height: number;
        };
    }>;
    VChart: import("vue").DefineComponent<{
        loading: BooleanConstructor;
        loadingOptions: ObjectConstructor;
        autoresize: BooleanConstructor;
        option: import("vue").PropType<import("echarts/types/dist/shared").ECBasicOption>;
        theme: {
            type: import("vue").PropType<string | object>;
        };
        initOptions: import("vue").PropType<{
            locale?: string | {
                time: {
                    month: string[];
                    monthAbbr: string[];
                    dayOfWeek: string[];
                    dayOfWeekAbbr: string[];
                };
                legend: {
                    selector: {
                        all: string;
                        inverse: string;
                    };
                };
                toolbox: {
                    brush: {
                        title: {
                            rect: string;
                            polygon: string;
                            lineX: string;
                            lineY: string;
                            keep: string;
                            clear: string;
                        };
                    };
                    dataView: {
                        title: string;
                        lang: string[];
                    };
                    dataZoom: {
                        title: {
                            zoom: string;
                            back: string;
                        };
                    };
                    magicType: {
                        title: {
                            line: string;
                            bar: string;
                            stack: string;
                            tiled: string;
                        };
                    };
                    restore: {
                        title: string;
                    };
                    saveAsImage: {
                        title: string;
                        lang: string[];
                    };
                };
                series: {
                    typeNames: {
                        pie: string;
                        bar: string;
                        line: string;
                        scatter: string;
                        effectScatter: string;
                        radar: string;
                        tree: string;
                        treemap: string;
                        boxplot: string;
                        candlestick: string;
                        k: string;
                        heatmap: string;
                        map: string;
                        parallel: string;
                        lines: string;
                        graph: string;
                        sankey: string;
                        funnel: string;
                        gauge: string;
                        pictorialBar: string;
                        themeRiver: string;
                        sunburst: string;
                    };
                };
                aria: {
                    general: {
                        withTitle: string;
                        withoutTitle: string;
                    };
                    series: {
                        single: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                        };
                        multiple: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                            separator: {
                                middle: string;
                                end: string;
                            };
                        };
                    };
                    data: {
                        allData: string;
                        partialData: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
            } | undefined;
            renderer?: "canvas" | "svg" | undefined;
            devicePixelRatio?: number | undefined;
            useDirtyRect?: boolean | undefined;
            ssr?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
        }>;
        updateOptions: import("vue").PropType<import("echarts/types/dist/shared").SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }, {
        getWidth: () => number;
        getHeight: () => number;
        getDom: () => HTMLElement;
        getOption: () => import("echarts/types/dist/shared").ECBasicOption;
        resize: (opts?: import("echarts/types/dist/shared").ResizeOpts | undefined) => void;
        dispatchAction: (payload: import("echarts/types/dist/shared").Payload, opt?: boolean | {
            silent?: boolean | undefined;
            flush?: boolean | undefined;
        } | undefined) => void;
        convertToPixel: {
            (finder: string | {
                seriesIndex?: number | false | number[] | "all" | "none" | undefined;
                seriesId?: string | number | (string | number)[] | undefined;
                seriesName?: string | number | (string | number)[] | undefined;
                geoIndex?: number | false | number[] | "all" | "none" | undefined;
                geoId?: string | number | (string | number)[] | undefined;
                geoName?: string | number | (string | number)[] | undefined;
                bmapIndex?: number | false | number[] | "all" | "none" | undefined;
                bmapId?: string | number | (string | number)[] | undefined;
                bmapName?: string | number | (string | number)[] | undefined;
                xAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                xAxisId?: string | number | (string | number)[] | undefined;
                xAxisName?: string | number | (string | number)[] | undefined;
                yAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                yAxisId?: string | number | (string | number)[] | undefined;
                yAxisName?: string | number | (string | number)[] | undefined;
                gridIndex?: number | false | number[] | "all" | "none" | undefined;
                gridId?: string | number | (string | number)[] | undefined;
                gridName?: string | number | (string | number)[] | undefined;
                dataIndex?: number | undefined;
                dataIndexInside?: number | undefined;
            }, value: string | number | Date): number;
            (finder: string | {
                seriesIndex?: number | false | number[] | "all" | "none" | undefined;
                seriesId?: string | number | (string | number)[] | undefined;
                seriesName?: string | number | (string | number)[] | undefined;
                geoIndex?: number | false | number[] | "all" | "none" | undefined;
                geoId?: string | number | (string | number)[] | undefined;
                geoName?: string | number | (string | number)[] | undefined;
                bmapIndex?: number | false | number[] | "all" | "none" | undefined;
                bmapId?: string | number | (string | number)[] | undefined;
                bmapName?: string | number | (string | number)[] | undefined;
                xAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                xAxisId?: string | number | (string | number)[] | undefined;
                xAxisName?: string | number | (string | number)[] | undefined;
                yAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                yAxisId?: string | number | (string | number)[] | undefined;
                yAxisName?: string | number | (string | number)[] | undefined;
                gridIndex?: number | false | number[] | "all" | "none" | undefined;
                gridId?: string | number | (string | number)[] | undefined;
                gridName?: string | number | (string | number)[] | undefined;
                dataIndex?: number | undefined;
                dataIndexInside?: number | undefined;
            }, value: (string | number | Date)[]): number[];
        };
        convertFromPixel: {
            (finder: string | {
                seriesIndex?: number | false | number[] | "all" | "none" | undefined;
                seriesId?: string | number | (string | number)[] | undefined;
                seriesName?: string | number | (string | number)[] | undefined;
                geoIndex?: number | false | number[] | "all" | "none" | undefined;
                geoId?: string | number | (string | number)[] | undefined;
                geoName?: string | number | (string | number)[] | undefined;
                bmapIndex?: number | false | number[] | "all" | "none" | undefined;
                bmapId?: string | number | (string | number)[] | undefined;
                bmapName?: string | number | (string | number)[] | undefined;
                xAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                xAxisId?: string | number | (string | number)[] | undefined;
                xAxisName?: string | number | (string | number)[] | undefined;
                yAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                yAxisId?: string | number | (string | number)[] | undefined;
                yAxisName?: string | number | (string | number)[] | undefined;
                gridIndex?: number | false | number[] | "all" | "none" | undefined;
                gridId?: string | number | (string | number)[] | undefined;
                gridName?: string | number | (string | number)[] | undefined;
                dataIndex?: number | undefined;
                dataIndexInside?: number | undefined;
            }, value: number): number;
            (finder: string | {
                seriesIndex?: number | false | number[] | "all" | "none" | undefined;
                seriesId?: string | number | (string | number)[] | undefined;
                seriesName?: string | number | (string | number)[] | undefined;
                geoIndex?: number | false | number[] | "all" | "none" | undefined;
                geoId?: string | number | (string | number)[] | undefined;
                geoName?: string | number | (string | number)[] | undefined;
                bmapIndex?: number | false | number[] | "all" | "none" | undefined;
                bmapId?: string | number | (string | number)[] | undefined;
                bmapName?: string | number | (string | number)[] | undefined;
                xAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                xAxisId?: string | number | (string | number)[] | undefined;
                xAxisName?: string | number | (string | number)[] | undefined;
                yAxisIndex?: number | false | number[] | "all" | "none" | undefined;
                yAxisId?: string | number | (string | number)[] | undefined;
                yAxisName?: string | number | (string | number)[] | undefined;
                gridIndex?: number | false | number[] | "all" | "none" | undefined;
                gridId?: string | number | (string | number)[] | undefined;
                gridName?: string | number | (string | number)[] | undefined;
                dataIndex?: number | undefined;
                dataIndexInside?: number | undefined;
            }, value: number[]): number[];
        };
        containPixel: (finder: string | {
            seriesIndex?: number | false | number[] | "all" | "none" | undefined;
            seriesId?: string | number | (string | number)[] | undefined;
            seriesName?: string | number | (string | number)[] | undefined;
            geoIndex?: number | false | number[] | "all" | "none" | undefined;
            geoId?: string | number | (string | number)[] | undefined;
            geoName?: string | number | (string | number)[] | undefined;
            bmapIndex?: number | false | number[] | "all" | "none" | undefined;
            bmapId?: string | number | (string | number)[] | undefined;
            bmapName?: string | number | (string | number)[] | undefined;
            xAxisIndex?: number | false | number[] | "all" | "none" | undefined;
            xAxisId?: string | number | (string | number)[] | undefined;
            xAxisName?: string | number | (string | number)[] | undefined;
            yAxisIndex?: number | false | number[] | "all" | "none" | undefined;
            yAxisId?: string | number | (string | number)[] | undefined;
            yAxisName?: string | number | (string | number)[] | undefined;
            gridIndex?: number | false | number[] | "all" | "none" | undefined;
            gridId?: string | number | (string | number)[] | undefined;
            gridName?: string | number | (string | number)[] | undefined;
            dataIndex?: number | undefined;
            dataIndexInside?: number | undefined;
        }, value: number[]) => boolean;
        getDataURL: (opts?: {
            type?: "svg" | "png" | "jpeg" | undefined;
            pixelRatio?: number | undefined;
            backgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
            excludeComponents?: string[] | undefined;
        } | undefined) => string;
        getConnectedDataURL: (opts?: {
            type?: "svg" | "png" | "jpeg" | undefined;
            pixelRatio?: number | undefined;
            backgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
            connectedBackgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
            excludeComponents?: string[] | undefined;
        } | undefined) => string;
        appendData: (params: {
            seriesIndex: number;
            data: any;
        }) => void;
        clear: () => void;
        isDisposed: () => boolean;
        dispose: () => void;
        chart: import("vue").ShallowRef<import("echarts/types/dist/shared").EChartsType | undefined>;
        root: import("vue").ShallowRef<HTMLElement | undefined>;
        setOption: (option: import("echarts/types/dist/shared").ECBasicOption, updateOptions?: import("echarts/types/dist/shared").SetOptionOpts | undefined) => void;
        nonEventAttrs: import("vue").ComputedRef<{
            [key: string]: any;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: ObjectConstructor;
        autoresize: BooleanConstructor;
        option: import("vue").PropType<import("echarts/types/dist/shared").ECBasicOption>;
        theme: {
            type: import("vue").PropType<string | object>;
        };
        initOptions: import("vue").PropType<{
            locale?: string | {
                time: {
                    month: string[];
                    monthAbbr: string[];
                    dayOfWeek: string[];
                    dayOfWeekAbbr: string[];
                };
                legend: {
                    selector: {
                        all: string;
                        inverse: string;
                    };
                };
                toolbox: {
                    brush: {
                        title: {
                            rect: string;
                            polygon: string;
                            lineX: string;
                            lineY: string;
                            keep: string;
                            clear: string;
                        };
                    };
                    dataView: {
                        title: string;
                        lang: string[];
                    };
                    dataZoom: {
                        title: {
                            zoom: string;
                            back: string;
                        };
                    };
                    magicType: {
                        title: {
                            line: string;
                            bar: string;
                            stack: string;
                            tiled: string;
                        };
                    };
                    restore: {
                        title: string;
                    };
                    saveAsImage: {
                        title: string;
                        lang: string[];
                    };
                };
                series: {
                    typeNames: {
                        pie: string;
                        bar: string;
                        line: string;
                        scatter: string;
                        effectScatter: string;
                        radar: string;
                        tree: string;
                        treemap: string;
                        boxplot: string;
                        candlestick: string;
                        k: string;
                        heatmap: string;
                        map: string;
                        parallel: string;
                        lines: string;
                        graph: string;
                        sankey: string;
                        funnel: string;
                        gauge: string;
                        pictorialBar: string;
                        themeRiver: string;
                        sunburst: string;
                    };
                };
                aria: {
                    general: {
                        withTitle: string;
                        withoutTitle: string;
                    };
                    series: {
                        single: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                        };
                        multiple: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                            separator: {
                                middle: string;
                                end: string;
                            };
                        };
                    };
                    data: {
                        allData: string;
                        partialData: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
            } | undefined;
            renderer?: "canvas" | "svg" | undefined;
            devicePixelRatio?: number | undefined;
            useDirtyRect?: boolean | undefined;
            ssr?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
        }>;
        updateOptions: import("vue").PropType<import("echarts/types/dist/shared").SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>>, {
        autoresize: boolean;
        manualUpdate: boolean;
        loading: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: ArrayConstructor;
        required: true;
    };
    config: {
        type: null;
        required: true;
    };
}>>, {}>;
export default _sfc_main;

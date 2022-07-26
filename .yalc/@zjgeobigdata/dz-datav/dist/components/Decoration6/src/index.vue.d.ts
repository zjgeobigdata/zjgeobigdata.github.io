declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    rectWidth: number;
    decoration6: import("vue").Ref<HTMLElement | null>;
    state: {
        svgWH: number[];
        svgScale: number[];
        rowNum: number;
        rowPoints: number;
        rectWidth: number;
        halfRectWidth: number;
        points: number[][];
        heights: number[];
        minHeights: number[];
        randoms: number[];
        defaultColor: string[];
        mergedColor: never[];
    };
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    afterAutoResizeMixinInit: () => void;
    calcSVGData: () => void;
    calcPointsPosition: () => void;
    calcScale: () => void;
    onResize: () => void;
    mergeColor: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    color: unknown[];
}>;
export default _sfc_main;

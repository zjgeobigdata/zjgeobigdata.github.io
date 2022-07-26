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
    dvDecoration1: import("vue").Ref<HTMLElement | null>;
    svgWH: number[];
    rowNum: import("vue").Ref<number>;
    rowPoints: import("vue").Ref<number>;
    pointSideLength: import("vue").Ref<number>;
    halfPointSideLength: import("vue").Ref<number>;
    defaultColor: string[];
    state: {
        mergedColor: never[];
        rects: never[];
        points: never[];
        svgScale: number[];
    };
    onResize: () => void;
    afterAutoResizeMixinInit: () => void;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    calcPointsPosition: () => void;
    calcRectsPosition: () => void;
    calcScale: () => void;
    calcSVGData: () => void;
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

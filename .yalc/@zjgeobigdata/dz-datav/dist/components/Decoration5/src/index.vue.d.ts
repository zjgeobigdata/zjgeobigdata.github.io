declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dur: {
        type: NumberConstructor;
        default: number;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dur: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    decoration5: import("vue").Ref<HTMLElement | null>;
    state: {
        line1Points: string;
        line2Points: string;
        line1Length: number;
        line2Length: number;
        defaultColor: string[];
        mergedColor: never[];
    };
    afterAutoResizeMixinInit: () => void;
    onResize: () => void;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    calcSVGData: () => void;
    mergeColor: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dur: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    color: unknown[];
    dur: number;
}>;
export default _sfc_main;

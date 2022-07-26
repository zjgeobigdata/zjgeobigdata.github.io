declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
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
        reverse: {
            type: BooleanConstructor;
            default: boolean;
        };
        dur: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    decoration2: import("vue").Ref<HTMLElement | null>;
    state: {
        x: number;
        y: number;
        w: number;
        h: number;
        defaultColor: string[];
        mergedColor: never[];
    };
    mergeColor: () => void;
    onResize: () => void;
    afterAutoResizeMixinInit: () => void;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    calcSVGData: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    dur: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    reverse: boolean;
    color: unknown[];
    dur: number;
}>;
export default _sfc_main;

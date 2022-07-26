declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
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
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    decoration8: import("vue").Ref<HTMLElement | null>;
    state: {
        defaultColor: string[];
        mergedColor: never[];
    };
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    xPos: (pos: number) => number;
    mergeColor: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    reverse: boolean;
    color: unknown[];
}>;
export default _sfc_main;

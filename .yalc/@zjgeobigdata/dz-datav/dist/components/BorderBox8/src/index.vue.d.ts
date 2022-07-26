declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dur: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
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
        dur: {
            type: NumberConstructor;
            default: number;
        };
        backgroundColor: {
            type: StringConstructor;
            default: string;
        };
        reverse: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    id: string;
    borderBox8: import("vue").Ref<HTMLElement | null>;
    state: {
        ref: string;
        path: string;
        gradient: string;
        mask: string;
        defaultColor: string[];
        mergedColor: never[];
    };
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    initWH: (resize?: boolean) => Promise<unknown>;
    length: import("vue").ComputedRef<number>;
    pathD: import("vue").ComputedRef<string>;
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
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    reverse: boolean;
    color: unknown[];
    backgroundColor: string;
    dur: number;
}>;
export default _sfc_main;

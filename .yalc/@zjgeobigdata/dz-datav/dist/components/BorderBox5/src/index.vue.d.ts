declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
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
        backgroundColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    borderBox5: import("vue").Ref<HTMLElement | null>;
    state: {
        defaultColor: string[];
        mergedColor: never[];
    };
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    initWH: (resize?: boolean) => Promise<unknown>;
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
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    reverse: boolean;
    color: unknown[];
    backgroundColor: string;
}>;
export default _sfc_main;

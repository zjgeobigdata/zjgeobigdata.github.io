declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
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
        backgroundColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    id: string;
    borderBox9: import("vue").Ref<HTMLElement | null>;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    initWH: (resize?: boolean) => Promise<unknown>;
    state: {
        gradientId: string;
        maskId: string;
        defaultColor: string[];
        mergedColor: never[];
    };
    mergeColor: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: ArrayConstructor;
        default: () => never[];
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: unknown[];
    backgroundColor: string;
}>;
export default _sfc_main;

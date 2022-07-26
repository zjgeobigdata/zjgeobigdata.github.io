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
    id: string;
    decoration10: import("vue").Ref<HTMLElement | null>;
    state: {
        animationId1: string;
        animationId2: string;
        animationId3: string;
        animationId4: string;
        animationId5: string;
        animationId6: string;
        animationId7: string;
        defaultColor: string[];
        mergedColor: never[];
    };
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
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

declare const _sfc_main: import("vue").DefineComponent<{}, {
    fullScreenContainer: import("vue").Ref<HTMLElement | null>;
    state: {
        allWidth: number;
        scale: number;
        datavRoot: string;
        ready: boolean;
    };
    initConfig: () => void;
    setAppScale: () => void;
    onResize: () => void;
    afterAutoResizeMixinInit: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;

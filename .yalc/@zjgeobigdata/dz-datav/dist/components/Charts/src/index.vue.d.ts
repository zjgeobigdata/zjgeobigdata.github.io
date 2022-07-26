export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace option {
            export const type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        chartsContainerRef: import("vue").Ref<null>;
        chartRef: import("vue").Ref<null>;
        chart: {};
        afterAutoResizeMixinInit: () => void;
        initChart: () => void;
        onResize: () => void;
        Charts: any;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        chartsContainerRef: import("vue").Ref<null>;
        chartRef: import("vue").Ref<null>;
        chart: {};
        afterAutoResizeMixinInit: () => void;
        initChart: () => void;
        onResize: () => void;
        Charts: any;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
    };
}

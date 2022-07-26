export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace config {
            export const type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        activeRingChart: import("vue").Ref<null>;
        state: {
            defaultConfig: {
                radius: string | number;
                activeRadius: string | number;
                data: Object[];
                lineWidth: number;
                activeTimeGap: number;
                color: string[];
                digitalFlopStyle: Object;
                digitalFlopToFixed: number;
                digitalFlopUnit: string;
                animationCurve: string;
                animationFrame: string;
                showOriginValue: boolean;
            };
            mergedConfig: null;
            chart: null;
            activeIndex: number;
            animationHandler: string;
        };
        digitalFlop: import("vue").ComputedRef<{
            content?: undefined;
            number?: undefined;
            style?: undefined;
            toFixed?: undefined;
        } | {
            content: string;
            number: any[];
            style: never;
            toFixed: never;
        }>;
        ringName: import("vue").ComputedRef<any>;
        fontSize: import("vue").ComputedRef<string>;
        init: () => void;
        initChart: () => void;
        mergeConfig: () => void;
        setRingOption: () => void;
        getRingOption: () => {
            series: any[];
            color: any;
        };
        getRealRadius: (active?: boolean) => any[];
        ringAnimation: () => void;
        Charts: any;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        DigitalFlop: {
            props: {
                config: {
                    type: ObjectConstructor;
                    default: () => void;
                };
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                props: any;
                digitalFlop: import("vue").Ref<null>;
                state: {
                    renderer: null;
                    defaultConfig: {
                        number: number[];
                        content: string;
                        toFixed: number;
                        textAlign: string;
                        rowGap: number;
                        style: Object;
                        formatter: Function | null;
                        animationCurve: string;
                        animationFrame: string;
                    };
                    mergedConfig: null;
                    graph: null;
                };
                init: () => void;
                initRender: () => void;
                mergeConfig: () => void;
                initGraph: () => void;
                getShape: () => {
                    number: any;
                    content: any;
                    toFixed: any;
                    position: number[];
                    rowGap: any;
                    formatter: any;
                };
                getStyle: () => any;
                update: () => void;
                mergeShape: (graph: any, shape: any) => void;
                CRender: any;
                deepClone: typeof deepClone;
                deepMerge: typeof deepMerge;
            };
        };
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        activeRingChart: import("vue").Ref<null>;
        state: {
            defaultConfig: {
                radius: string | number;
                activeRadius: string | number;
                data: Object[];
                lineWidth: number;
                activeTimeGap: number;
                color: string[];
                digitalFlopStyle: Object;
                digitalFlopToFixed: number;
                digitalFlopUnit: string;
                animationCurve: string;
                animationFrame: string;
                showOriginValue: boolean;
            };
            mergedConfig: null;
            chart: null;
            activeIndex: number;
            animationHandler: string;
        };
        digitalFlop: import("vue").ComputedRef<{
            content?: undefined;
            number?: undefined;
            style?: undefined;
            toFixed?: undefined;
        } | {
            content: string;
            number: any[];
            style: never;
            toFixed: never;
        }>;
        ringName: import("vue").ComputedRef<any>;
        fontSize: import("vue").ComputedRef<string>;
        init: () => void;
        initChart: () => void;
        mergeConfig: () => void;
        setRingOption: () => void;
        getRingOption: () => {
            series: any[];
            color: any;
        };
        getRealRadius: (active?: boolean) => any[];
        ringAnimation: () => void;
        Charts: any;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        DigitalFlop: {
            props: {
                config: {
                    type: ObjectConstructor;
                    default: () => void;
                };
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                props: any;
                digitalFlop: import("vue").Ref<null>;
                state: {
                    renderer: null;
                    defaultConfig: {
                        number: number[];
                        content: string;
                        toFixed: number;
                        textAlign: string;
                        rowGap: number;
                        style: Object;
                        formatter: Function | null;
                        animationCurve: string;
                        animationFrame: string;
                    };
                    mergedConfig: null;
                    graph: null;
                };
                init: () => void;
                initRender: () => void;
                mergeConfig: () => void;
                initGraph: () => void;
                getShape: () => {
                    number: any;
                    content: any;
                    toFixed: any;
                    position: number[];
                    rowGap: any;
                    formatter: any;
                };
                getStyle: () => any;
                update: () => void;
                mergeShape: (graph: any, shape: any) => void;
                CRender: any;
                deepClone: typeof deepClone;
                deepMerge: typeof deepMerge;
            };
        };
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';

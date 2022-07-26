export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace config {
            export const type: ObjectConstructor;
            function _default(): void;
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
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
    function setup(__props: any, { expose }: {
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
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';

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
        conicalColumnChart: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                data: Object[];
                img: string[];
                fontSize: number;
                imgSideLength: number;
                columnColor: string;
                textColor: string;
                showValue: boolean;
            };
            mergedConfig: null;
            column: never[];
        };
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        initData: () => void;
        calcSVGPath: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        conicalColumnChart: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                data: Object[];
                img: string[];
                fontSize: number;
                imgSideLength: number;
                columnColor: string;
                textColor: string;
                showValue: boolean;
            };
            mergedConfig: null;
            column: never[];
        };
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        initData: () => void;
        calcSVGPath: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';

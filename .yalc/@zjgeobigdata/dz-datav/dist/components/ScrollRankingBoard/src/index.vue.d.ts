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
        scrollRankingBoard: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                data: Object[];
                rowNum: number;
                waitTime: number;
                carousel: string;
                unit: string;
                sort: boolean;
                valueFormatter: Function;
            };
            mergedConfig: null;
            rowsData: never[];
            rows: never[];
            heights: never[];
            avgHeight: number;
            animationIndex: number;
            animationHandler: string;
            updater: number;
        };
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcRowsData: () => void;
        calcHeights: (onresize?: boolean) => void;
        animation: (start?: boolean) => Promise<void>;
        stopAnimation: () => void;
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
        scrollRankingBoard: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                data: Object[];
                rowNum: number;
                waitTime: number;
                carousel: string;
                unit: string;
                sort: boolean;
                valueFormatter: Function;
            };
            mergedConfig: null;
            rowsData: never[];
            rows: never[];
            heights: never[];
            avgHeight: number;
            animationIndex: number;
            animationHandler: string;
            updater: number;
        };
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcRowsData: () => void;
        calcHeights: (onresize?: boolean) => void;
        animation: (start?: boolean) => Promise<void>;
        stopAnimation: () => void;
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

export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace config {
            export const type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit: emitEvent }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        scrollBoard: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                header: string[];
                data: any[][];
                rowNum: number;
                headerBGC: string;
                oddRowBGC: string;
                evenRowBGC: string;
                waitTime: number;
                headerHeight: number;
                columnWidth: number[];
                align: string[];
                index: boolean;
                indexHeader: string;
                carousel: string;
                hoverPause: boolean;
            };
            mergedConfig: null;
            header: never[];
            rowsData: never[];
            rows: never[];
            widths: never[];
            heights: never[];
            avgHeight: number;
            aligns: never[];
            animationIndex: number;
            animationHandler: string;
            updater: number;
            needCalc: boolean;
        };
        emitEvent: any;
        handleClick: (ri: any, ci: any, row: any, ceil: any) => void;
        handleHover: (enter: any, ri: any, ci: any, row: any, ceil: any) => void;
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcHeaderData: () => void;
        calcRowsData: () => void;
        calcWidths: () => void;
        calcHeights: (onresize?: boolean) => void;
        calcAligns: () => void;
        animation: (start?: boolean) => Promise<void>;
        stopAnimation: () => void;
        updateRows: (rows: any, animationIndex: any) => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
    };
    function setup(__props: any, { expose, emit: emitEvent }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        scrollBoard: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            defaultConfig: {
                header: string[];
                data: any[][];
                rowNum: number;
                headerBGC: string;
                oddRowBGC: string;
                evenRowBGC: string;
                waitTime: number;
                headerHeight: number;
                columnWidth: number[];
                align: string[];
                index: boolean;
                indexHeader: string;
                carousel: string;
                hoverPause: boolean;
            };
            mergedConfig: null;
            header: never[];
            rowsData: never[];
            rows: never[];
            widths: never[];
            heights: never[];
            avgHeight: number;
            aligns: never[];
            animationIndex: number;
            animationHandler: string;
            updater: number;
            needCalc: boolean;
        };
        emitEvent: any;
        handleClick: (ri: any, ci: any, row: any, ceil: any) => void;
        handleHover: (enter: any, ri: any, ci: any, row: any, ceil: any) => void;
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcHeaderData: () => void;
        calcRowsData: () => void;
        calcWidths: () => void;
        calcHeights: (onresize?: boolean) => void;
        calcAligns: () => void;
        animation: (start?: boolean) => Promise<void>;
        stopAnimation: () => void;
        updateRows: (rows: any, animationIndex: any) => void;
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

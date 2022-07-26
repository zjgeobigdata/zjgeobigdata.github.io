export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace color {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace dur {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        decoration9: number;
        state: {
            polygonId: string;
            svgWH: number[];
            svgScale: number[];
            defaultColor: string[];
            mergedColor: never[];
        };
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        afterAutoResizeMixinInit: () => void;
        calcScale: () => void;
        onResize: () => void;
        mergeColor: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
        fade: typeof fade;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        decoration9: number;
        state: {
            polygonId: string;
            svgWH: number[];
            svgScale: number[];
            defaultColor: string[];
            mergedColor: never[];
        };
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        afterAutoResizeMixinInit: () => void;
        calcScale: () => void;
        onResize: () => void;
        mergeColor: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
        fade: typeof fade;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { uuid } from '../../../../dz-datav/utils';
import { fade } from "@jiaminghi/color";

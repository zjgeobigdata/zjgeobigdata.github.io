export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace color {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        decoration11: import("vue").Ref<null>;
        state: {
            defaultColor: string[];
            mergedColor: never[];
        };
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        mergeColor: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        fade: typeof fade;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        decoration11: import("vue").Ref<null>;
        state: {
            defaultColor: string[];
            mergedColor: never[];
        };
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        mergeColor: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        fade: typeof fade;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { fade } from "@jiaminghi/color";

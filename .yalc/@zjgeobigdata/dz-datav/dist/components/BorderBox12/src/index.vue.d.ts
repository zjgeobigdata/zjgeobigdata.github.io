export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace color {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace backgroundColor {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        borderBox12: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        initWH: (resize?: boolean) => Promise<unknown>;
        state: {
            filterId: string;
            defaultColor: string[];
            mergedColor: never[];
        };
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
        borderBox12: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        initWH: (resize?: boolean) => Promise<unknown>;
        state: {
            filterId: string;
            defaultColor: string[];
            mergedColor: never[];
        };
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

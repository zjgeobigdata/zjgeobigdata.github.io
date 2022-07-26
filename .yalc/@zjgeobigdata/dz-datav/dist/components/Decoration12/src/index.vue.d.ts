export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace color {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace scanDur {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace haloDur {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        decoration12: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            gId: string;
            gradientId: string;
            defaultColor: string[];
            mergedColor: never[];
            pathD: never[];
            pathColor: never[];
            circleR: never[];
            splitLinePoints: never[];
            arcD: never[];
            segment: number;
            sectorAngle: number;
            ringNum: number;
            ringWidth: number;
            showSplitLine: boolean;
        };
        x: import("vue").ComputedRef<number>;
        y: import("vue").ComputedRef<number>;
        init: () => void;
        mergeColor: () => void;
        calcPathD: () => void;
        calcPathColor: () => void;
        calcCircleR: () => void;
        calcSplitLinePoints: () => void;
        calcArcD: () => void;
        afterAutoResizeMixinInit: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        getCircleRadianPoint: typeof getCircleRadianPoint;
        uuid: typeof uuid;
        fade: typeof fade;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        decoration12: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            gId: string;
            gradientId: string;
            defaultColor: string[];
            mergedColor: never[];
            pathD: never[];
            pathColor: never[];
            circleR: never[];
            splitLinePoints: never[];
            arcD: never[];
            segment: number;
            sectorAngle: number;
            ringNum: number;
            ringWidth: number;
            showSplitLine: boolean;
        };
        x: import("vue").ComputedRef<number>;
        y: import("vue").ComputedRef<number>;
        init: () => void;
        mergeColor: () => void;
        calcPathD: () => void;
        calcPathColor: () => void;
        calcCircleR: () => void;
        calcSplitLinePoints: () => void;
        calcArcD: () => void;
        afterAutoResizeMixinInit: () => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>;
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        getCircleRadianPoint: typeof getCircleRadianPoint;
        uuid: typeof uuid;
        fade: typeof fade;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { getCircleRadianPoint } from '../../../../dz-datav/utils';
import { uuid } from '../../../../dz-datav/utils';
import { fade } from "@jiaminghi/color";

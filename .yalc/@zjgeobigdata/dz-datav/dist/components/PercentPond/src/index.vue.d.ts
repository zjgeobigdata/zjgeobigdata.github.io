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
        id: string;
        percentPond: import("vue").Ref<null>;
        state: {
            gradientId1: string;
            gradientId2: string;
            width: number;
            height: number;
            defaultConfig: {
                value: number;
                colors: string[];
                borderWidth: number;
                borderGap: number;
                lineDash: number[];
                textColor: string;
                borderRadius: number;
                localGradient: boolean;
                formatter: string;
            };
            mergedConfig: null;
        };
        rectWidth: import("vue").ComputedRef<number>;
        rectHeight: import("vue").ComputedRef<number>;
        points: import("vue").ComputedRef<string>;
        polylineWidth: import("vue").ComputedRef<number>;
        linearGradient: import("vue").ComputedRef<any>;
        polylineGradient: import("vue").ComputedRef<string>;
        gradient2XPos: import("vue").ComputedRef<string>;
        details: import("vue").ComputedRef<any>;
        init: () => Promise<void>;
        initWH: () => Promise<void>;
        mergeConfig: () => void;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        percentPond: import("vue").Ref<null>;
        state: {
            gradientId1: string;
            gradientId2: string;
            width: number;
            height: number;
            defaultConfig: {
                value: number;
                colors: string[];
                borderWidth: number;
                borderGap: number;
                lineDash: number[];
                textColor: string;
                borderRadius: number;
                localGradient: boolean;
                formatter: string;
            };
            mergedConfig: null;
        };
        rectWidth: import("vue").ComputedRef<number>;
        rectHeight: import("vue").ComputedRef<number>;
        points: import("vue").ComputedRef<string>;
        polylineWidth: import("vue").ComputedRef<number>;
        linearGradient: import("vue").ComputedRef<any>;
        polylineGradient: import("vue").ComputedRef<string>;
        gradient2XPos: import("vue").ComputedRef<string>;
        details: import("vue").ComputedRef<any>;
        init: () => Promise<void>;
        initWH: () => Promise<void>;
        mergeConfig: () => void;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { uuid } from '../../../../dz-datav/utils';

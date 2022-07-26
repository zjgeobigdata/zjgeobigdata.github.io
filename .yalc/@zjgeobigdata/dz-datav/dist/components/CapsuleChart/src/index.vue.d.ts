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
        state: {
            defaultConfig: {
                data: Object[];
                colors: string[];
                unit: string;
                showValue: boolean;
            };
            mergedConfig: null;
            capsuleLength: never[];
            capsuleValue: never[];
            labelData: never[];
            labelDataLength: never[];
        };
        calcData: () => void;
        mergeConfig: () => void;
        calcCapsuleLengthAndLabelData: () => void;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        state: {
            defaultConfig: {
                data: Object[];
                colors: string[];
                unit: string;
                showValue: boolean;
            };
            mergedConfig: null;
            capsuleLength: never[];
            capsuleValue: never[];
            labelData: never[];
            labelDataLength: never[];
        };
        calcData: () => void;
        mergeConfig: () => void;
        calcCapsuleLengthAndLabelData: () => void;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';

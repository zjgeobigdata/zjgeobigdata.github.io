export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        export const config: ObjectConstructor;
        function _default(): {};
        export { _default as default };
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        waterPondLevel: import("vue").Ref<null>;
        state: {
            gradientId: string;
            defaultConfig: {
                data: number[];
                shape: string;
                waveNum: number;
                waveHeight: number;
                waveOpacity: number;
                colors: string[];
                formatter: string;
            };
            mergedConfig: {};
            renderer: null;
            svgBorderGradient: never[];
            details: string;
            waves: never[];
            animation: boolean;
        };
        radius: import("vue").ComputedRef<"50%" | "0" | "10px">;
        shape: import("vue").ComputedRef<any>;
        init: () => void;
        initRender: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcSvgBorderGradient: () => void;
        calcDetails: () => void;
        addWave: () => void;
        getWaveShapes: () => any;
        mergeOffset: ([x, y]: [any, any], [ox, oy]: [any, any]) => any[];
        getWaveStyle: () => {
            gradientColor: any;
            gradientType: string;
            gradientParams: any[];
            gradientWith: string;
            opacity: any;
            translate: number[];
        };
        drawed: ({ shape: { points } }: {
            shape: {
                points: any;
            };
        }, { ctx, area }: {
            ctx: any;
            area: any;
        }) => void;
        animationWave: (repeat?: number) => Promise<void>;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
        CRender: any;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        waterPondLevel: import("vue").Ref<null>;
        state: {
            gradientId: string;
            defaultConfig: {
                data: number[];
                shape: string;
                waveNum: number;
                waveHeight: number;
                waveOpacity: number;
                colors: string[];
                formatter: string;
            };
            mergedConfig: {};
            renderer: null;
            svgBorderGradient: never[];
            details: string;
            waves: never[];
            animation: boolean;
        };
        radius: import("vue").ComputedRef<"50%" | "0" | "10px">;
        shape: import("vue").ComputedRef<any>;
        init: () => void;
        initRender: () => void;
        calcData: () => void;
        mergeConfig: () => void;
        calcSvgBorderGradient: () => void;
        calcDetails: () => void;
        addWave: () => void;
        getWaveShapes: () => any;
        mergeOffset: ([x, y]: [any, any], [ox, oy]: [any, any]) => any[];
        getWaveStyle: () => {
            gradientColor: any;
            gradientType: string;
            gradientParams: any[];
            gradientWith: string;
            opacity: any;
            translate: number[];
        };
        drawed: ({ shape: { points } }: {
            shape: {
                points: any;
            };
        }, { ctx, area }: {
            ctx: any;
            area: any;
        }) => void;
        animationWave: (repeat?: number) => Promise<void>;
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        uuid: typeof uuid;
        CRender: any;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { uuid } from '../../../../dz-datav/utils';

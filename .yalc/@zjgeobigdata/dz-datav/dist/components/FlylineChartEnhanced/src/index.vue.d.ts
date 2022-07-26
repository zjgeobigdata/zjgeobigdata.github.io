export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace config {
            export const type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
        namespace dev {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        flylineChartEnhanced: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            unique: number;
            flylineGradientId: string;
            haloGradientId: string;
            defaultConfig: {
                points: any[];
                lines: any[];
                halo: any;
                text: Text;
                icon: any;
                line: any;
                bgImgSrc: string;
                k: number;
                curvature: number;
                relative: boolean;
            };
            flylines: any[];
            flylineLengths: number[];
            flylinePoints: never[];
            mergedConfig: null;
        };
        instance: undefined;
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => Promise<void>;
        mergeConfig: () => void;
        calcflylinePoints: () => void;
        calcLinePaths: () => void;
        getPath: (start: any, end: any) => any[];
        getControlPoint: ([sx, sy]: [any, any], [ex, ey]: [any, any]) => number[];
        getKLinePointByx: (k: any, [lx, ly]: [any, any], x: any) => any[];
        calcLineLengths: () => Promise<void>;
        consoleClickPos: ({ offsetX, offsetY }: {
            offsetX: any;
            offsetY: any;
        }) => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>; /**
                 * @description Flyline chart points
                 * @type {FlylineChartPoint[]}
                 * @default points = []
                 */
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        getPointDistance: typeof getPointDistance;
        randomExtend: typeof randomExtend;
        uuid: typeof uuid;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        id: string;
        flylineChartEnhanced: import("vue").Ref<null>;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        state: {
            unique: number;
            flylineGradientId: string;
            haloGradientId: string;
            defaultConfig: {
                points: any[];
                lines: any[];
                halo: any;
                text: Text;
                icon: any;
                line: any;
                bgImgSrc: string;
                k: number;
                curvature: number;
                relative: boolean;
            };
            flylines: any[];
            flylineLengths: number[];
            flylinePoints: never[];
            mergedConfig: null;
        };
        instance: undefined;
        afterAutoResizeMixinInit: () => void;
        onResize: () => void;
        calcData: () => Promise<void>;
        mergeConfig: () => void;
        calcflylinePoints: () => void;
        calcLinePaths: () => void;
        getPath: (start: any, end: any) => any[];
        getControlPoint: ([sx, sy]: [any, any], [ex, ey]: [any, any]) => number[];
        getKLinePointByx: (k: any, [lx, ly]: [any, any], x: any) => any[];
        calcLineLengths: () => Promise<void>;
        consoleClickPos: ({ offsetX, offsetY }: {
            offsetX: any;
            offsetY: any;
        }) => void;
        autoResize: (dom: import("vue").Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            initWH: (resize?: boolean) => Promise<unknown>; /**
                 * @description Flyline chart points
                 * @type {FlylineChartPoint[]}
                 * @default points = []
                 */
        };
        deepClone: typeof deepClone;
        deepMerge: typeof deepMerge;
        getPointDistance: typeof getPointDistance;
        randomExtend: typeof randomExtend;
        uuid: typeof uuid;
    };
}
import { deepClone } from '../../../../dz-datav/utils';
import { deepMerge } from '../../../../dz-datav/utils';
import { getPointDistance } from '../../../../dz-datav/utils';
import { randomExtend } from '../../../../dz-datav/utils';
import { uuid } from '../../../../dz-datav/utils';

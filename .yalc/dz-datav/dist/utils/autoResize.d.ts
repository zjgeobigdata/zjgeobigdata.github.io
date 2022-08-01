import type { Ref } from 'vue';
declare const autoResize: (dom: Ref<HTMLElement | null>, onResize?: (() => void) | undefined, afterAutoResizeMixinInit?: (() => void) | undefined) => {
    width: Ref<number>;
    height: Ref<number>;
    initWH: (resize?: boolean) => Promise<unknown>;
};
export default autoResize;

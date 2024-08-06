declare module 'vue' {
  export interface GlobalComponents {
    ElButton: typeof import('element-plus/es')['ElButton']
    ElIcon: typeof import('element-plus/es')['ElIcon']
    ElInput: typeof import('element-plus/es')['ElInput']
    ElSpace: typeof import('element-plus/es')['ElSpace']
    IEpAddLocation: typeof import('~icons/ep/add-location')['default']
    IEpAim: typeof import('~icons/ep/aim')['default']
    IEpCircleCheckFilled: typeof import('~icons/ep/circle-check-filled')['default']
    Loading: typeof import('element-plus/es')['ElLoadingDirective']
  }
}

export {}

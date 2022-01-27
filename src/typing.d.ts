declare module '*.less'
declare module '*.css'
declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare const UMI_ENV: 'test' | 'dev' | 'prod'

declare namespace NodeJS {
  interface ProcessEnv {
    ENV: 'dev' | 'test' | 'prod'
  }
}

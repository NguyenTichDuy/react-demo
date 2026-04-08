declare namespace NodeJS {
  interface ProcessEnv {
    /** Injected at build time via webpack DefinePlugin */
    readonly PEXELS_API_KEY?: string;
  }
}

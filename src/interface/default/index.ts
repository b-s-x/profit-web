export interface Data {
  [key: string]: unknown
}

export interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
  expose: (exposed?: Record<string, any>) => void
}

// export interface CustomRef {
//   value: number
// }
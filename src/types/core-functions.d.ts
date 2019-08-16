type EndGame = () => undefined
type ResetGame = () => undefined

type GetAppScreenMode = () => number

export type CoreFunctions
  = EndGame
  | ResetGame
  | GetAppScreenMode

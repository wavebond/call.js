import { HaltMesh } from '@tunebond/halt'
import { Base } from '../../base.js'
import makeTakeRead from './read.js'
import makeTakeSave from './save.js'

export default function make(base: Base) {
  const haltList: Array<HaltMesh> = []
  const read = makeTakeRead(base, haltList)
  const save = makeTakeSave(base)

  return {
    read,
    save,
  }
}

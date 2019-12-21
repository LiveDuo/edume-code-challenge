import { listen } from './src/services/http'
import { loadWordlist } from './src/services/dictionary'

loadWordlist()
  .then(listen)

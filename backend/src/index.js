import { listen } from './services/http'
import { loadWordlist } from './services/dictionary'

loadWordlist()
  .then(listen)
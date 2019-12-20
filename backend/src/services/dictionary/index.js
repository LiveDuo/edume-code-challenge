import fs from 'fs'

import path from 'path'

let wordlist
const loadWordlist = async () => {
  const filepath = path.join(__dirname, '../../../assets/wordlist.txt')
  const text = fs.readFileSync(filepath, 'utf8')
  wordlist = text.split('\r\n')
}
export { loadWordlist, wordlist }
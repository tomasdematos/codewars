function grabscrab(anagram, dictionary) {
  const s = [...anagram].sort().join("")
  return dictionary.filter(x => [...x].sort().join("") === s)
}
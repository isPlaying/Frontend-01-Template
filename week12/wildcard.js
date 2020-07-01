function find(source, pattern) {
  let starCount = 0;
  for (let p = 0; p < pattern.length; p++) {
    if (pattern[p] === '*') {
      starCount++;
    }
  }
  if (starCount === 0) {
    if (source.length !== pattern.length) {
      return false;
    }
    for (let i = 0; i < pattern.length; i++) {
      if (source[i] !== pattern[i] && pattern[i] !== '?') {
        return false;
      }
    }
    return true;
  }

  let i = 0;
  let lastIndex = 0;

  for (; pattern[i] !== '*'; i++) {
    if (source[i] !== pattern[i] && pattern[i] !== '?') {
      return false;
    }
  }

  lastIndex = i;
  for (let s = 0; s < starCount - 1; s++) {
    i++;
    let subPattern = '';
    while (pattern[i] !== '*') {
      subPattern += pattern[i];
      i++;
    }

    let reg = new RegExp(subPattern.replace(/\?/g, '[\\s\\S]'));

    reg.lastIndex = lastIndex;

    reg.exec(source);

    lastIndex = reg.lastIndex;
  }

  for (
    let p = 0;
    p <= source.length - lastIndex && pattern[pattern.length - p] !== '*';
    p++
  ) {
    if (
      source[source.length - p] !== pattern[pattern.length - p] &&
      pattern[source.length - p] !== '?'
    ) {
      return false;
    }
  }
  return true;
}

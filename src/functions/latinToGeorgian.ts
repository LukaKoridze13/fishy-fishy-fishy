function latinToGeorgian(input: string) {
  const transliterationMap = {
    a: "ა",
    b: "ბ",
    c: "ც",
    d: "დ",
    e: "ე",
    f: "ფ",
    g: "გ",
    h: "ჰ",
    i: "ი",
    j: "ჯ",
    k: "კ",
    l: "ლ",
    m: "მ",
    n: "ნ",
    o: "ო",
    p: "პ",
    q: "ქ",
    r: "რ",
    s: "ს",
    t: "ტ",
    u: "უ",
    v: "ვ",
    w: "წ",
    x: "ხ",
    y: "ყ",
    z: "ზ",

    // Double letters for special Georgian characters
    S: "შ",
    C: "ჩ",
    W: "ჭ",
    Z: "ძ",
    J: "ჟ",
    X: "ხ",
    G: "ღ",
    T: "თ",
    F: "ფ",
  };

  const sortedKeys = Object.keys(transliterationMap).sort((a, b) => b.length - a.length);

  let result = "";
  for (let i = 0; i < input.length; ) {
    let match = false;

    for (const key of sortedKeys) {
      if (input.substring(i, i + key.length).toLowerCase() === key) {
        // @ts-ignore
        result += transliterationMap[key];
        i += key.length;
        match = true;
        break;
      }
    }

    // If no multi-character match, try single character
    if (!match) {
      const char = input[i].toLowerCase();
      result += transliterationMap[char] || char; // Use original if no match
      i++;
    }
  }

  return result;
}

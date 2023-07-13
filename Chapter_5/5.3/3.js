function truncate(str, maxlength) {
    if (!maxlength || maxlength > str.length) return str;
    return `${str.slice(0, maxlength - 1)}...`
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
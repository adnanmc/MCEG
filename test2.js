const stgRegex = RegExp(/^stg[1-3]$/);
let stg = 'srt4';
let result = stgRegex.test(stg);
console.log(result);

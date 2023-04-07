export const stripSlash = (s) => {
    return s = s.substr(1);
}

export const capitalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
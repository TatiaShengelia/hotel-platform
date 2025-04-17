function Sort(array, key, ascending = true) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return ascending ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });
}

export default Sort;
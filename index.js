const drivers = [];

const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name);
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver.startsWith(name));
}


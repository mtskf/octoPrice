// https://stackoverflow.com/a/31581206
export const formatCcy = (num: number, fraction: number = 2): string => {
    return '$' + num.toLocaleString(undefined, { minimumFractionDigits: fraction });
}

export const handleInvalidValue = (sliderVal: number): number => {
    if (isNaN(sliderVal) || sliderVal < 1) {
        sliderVal = 1;
    } else if (sliderVal > 9999) {
        sliderVal = 9999;
    }
    return sliderVal;
}

// https://stackoverflow.com/a/31581206
export const toLocaleStr = (num: number): string => num.toLocaleString(undefined, { maximumFractionDigits: 0 });
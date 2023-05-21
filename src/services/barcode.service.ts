export function GenerateBarcode() {
    const barcode = Math.floor(Math.random() * 1000000000000).toString();
    return barcode;
}
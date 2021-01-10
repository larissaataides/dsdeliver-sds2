import { Product } from "./types";

export function checkIsSelected(
    selectedProducts: Product[], 
    products: Product
    ): boolean {
return selectedProducts.some((item) => item.id === products.id);

}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}
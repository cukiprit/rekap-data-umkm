import { writable } from "svelte/store";

const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

const restoreFormatCurrency = (value) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    currencyDisplay: "code",
  });
  return formatter.format(value).replace("IDR", "").trim();
};

export const formatCurrencyStore = writable(formatCurrency);
export const restoreFormatCurrencyStore = writable(restoreFormatCurrency);

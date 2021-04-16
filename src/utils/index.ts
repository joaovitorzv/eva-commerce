export const ToLocaleString = (price: string) => {
  return parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const ToLocaleStringPercentDiscount = (price: string, bank_slip: number) => {
  const discountRest = parseFloat(price) - (bank_slip * parseFloat(price)) / 100
  return ToLocaleString(String(discountRest))
}
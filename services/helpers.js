const formatCurrency = (number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    number
  );

export { formatCurrency };

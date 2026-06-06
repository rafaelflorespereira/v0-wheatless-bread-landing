import type { CartItem } from "@/components/cart/cart-context";

// +55 45 9131-7148 → digits only, as wa.me requires
export const WHATSAPP_NUMBER = "554591317148";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function buildWhatsAppUrl(items: CartItem[]) {
  const prontaEntrega = items.filter((i) => !i.product.is_made_to_order);
  const encomenda = items.filter((i) => i.product.is_made_to_order);

  const lines: string[] = ["Olá! Gostaria de fazer o seguinte pedido:", ""];

  const section = (title: string, list: CartItem[]) => {
    if (list.length === 0) return;
    lines.push(`*${title}*`);
    let subtotal = 0;
    for (const { product, quantity } of list) {
      const lineTotal = Number(product.price) * quantity;
      subtotal += lineTotal;
      lines.push(`• ${quantity}x ${product.name} — ${formatBRL(lineTotal)}`);
    }
    lines.push(`_Subtotal: ${formatBRL(subtotal)}_`);
    lines.push("");
  };

  section("PRONTA ENTREGA", prontaEntrega);
  section("ENCOMENDA", encomenda);

  const total = items.reduce(
    (sum, i) => sum + Number(i.product.price) * i.quantity,
    0,
  );
  lines.push(`*Total do pedido: ${formatBRL(total)}*`);
  lines.push("");
  lines.push("Fico no aguardo da confirmação. Muito obrigado(a)!");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

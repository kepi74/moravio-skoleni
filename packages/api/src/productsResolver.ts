import { IncomingMessage, ServerResponse } from "http";
import { Products } from "./types";

const products: Products = [
  {
    name: "roční - R",
    price: 1500,
    description: `Platnost kupónů je od 1. prosince do 31. ledna roku následujícího
    po roce, kterého se emise týká, tedy 14 měsíců.`,
    imageUrl:
      "https://www.ceskaposta.cz/documents/10180/6007857/REVERZ-R2020_big.jpg/cda21a40-ef6e-ed88-eaf1-b5ec607faa2e?t=1574151087612"
  },
  {
    name: "měsíční - M",
    price: 440,
    description: `Platnost kupónů začíná dnem vyznačeným na kupónu a končí uplynutím
      dne bezprostředně následujícího měsíce, který se číselně shoduje se dnem vyznačeným na kupónu. Není-li takový den v příslušném následujícím kalendářním měsíci, připadne konec platnosti na jeho poslední den.`,
    imageUrl:
      "https://www.ceskaposta.cz/documents/10180/6007857/REVERZ-M2020_big.jpg/438187ef-8953-87f3-e8d4-82d96677e227?t=1574151127993"
  },
  {
    name: "desetidenní - D",
    price: 310,
    description: `Platnost kupónů začíná dnem vyznačeným na kupónu a končí
    uplynutím desátého kalendářního dne.`,
    imageUrl:
      "https://www.ceskaposta.cz/documents/10180/6007857/REVERZ-D2020_big.jpg/b5494319-c379-0d15-cfa2-1179e95d984f?t=1574151216805"
  }
];

export const productsResolver = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(products));
}

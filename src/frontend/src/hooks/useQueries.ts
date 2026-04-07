import { useQuery } from "@tanstack/react-query";
import type { Product } from "../backend.d";
import { useActor } from "./useActor";

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: BigInt(1),
    name: "Welder Vintage Casual Proud Summer Funny Welding Gift Tshirt",
    price: 17.99,
    description:
      "The perfect novelty tee for any welder. Show your welding pride with this vintage casual design.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07KDCS6YJ.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KDCS6YJ",
  },
  {
    id: BigInt(2),
    name: "Proud Welder American Flag T-Shirt",
    price: 17.99,
    description:
      "Show your American pride as a skilled welder with this bold patriotic tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07KMNF3F6.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KMNF3F6",
  },
  {
    id: BigInt(3),
    name: "Vintage American Flag Welder – Patriotic TIG MIG Gift T-Shirt",
    price: 18.99,
    description:
      "Distressed vintage American flag with bold WELDER stripes. Patriotic TIG MIG gift for the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07KWTMXMG.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KWTMXMG",
  },
  {
    id: BigInt(4),
    name: "Fuse Metal Together with Electricity and Fire Welding Shirt",
    price: 17.99,
    description:
      "Celebrate the art of fusing metal with fire and electricity. Great gift for the skilled tradesman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07L1V3NXN.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07L1V3NXN",
  },
  {
    id: BigInt(5),
    name: "Welder Definition Funny Noun Welding Gift T-Shirt",
    price: 17.99,
    description:
      "Hilarious dictionary-style welder definition tee. A must-have funny gift for any welder.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07L88QQYY.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07L88QQYY",
  },
  {
    id: BigInt(6),
    name: "I'm A Welder What's Your Superpower Funny Welding Tee",
    price: 17.99,
    description:
      "Welding is a superpower. Show it off with this funny and bold trade tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07L91ZHGY.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07L91ZHGY",
  },
  {
    id: BigInt(7),
    name: "Welding Is My Therapy Funny Welder Gift T-Shirt",
    price: 17.99,
    description:
      "For the welder who finds peace at the torch. Funny therapy-themed welding gift tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07L9TZ2S4.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07L9TZ2S4",
  },
  {
    id: BigInt(8),
    name: "Born To Weld Forced To Work Funny Welder T-Shirt",
    price: 17.99,
    description:
      "A relatable funny tee for any welder who was born with the craft in their blood.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07LDR8CLP.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07LDR8CLP",
  },
  {
    id: BigInt(9),
    name: "Welder By Day Superhero By Night Funny Welding T-Shirt",
    price: 17.99,
    description:
      "By day a skilled welder, by night a true superhero. Funny graphic tee for the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07MCYZ6Z8.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07MCYZ6Z8",
  },
  {
    id: BigInt(10),
    name: "Retired Welder Best Grandpa Ever Gift T-Shirt",
    price: 17.99,
    description:
      "Perfect retirement gift for the welder grandpa who built a legacy in the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07N1FWH28.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07N1FWH28",
  },
  {
    id: BigInt(11),
    name: "Straight Outta Weld Shop Funny Welding Tshirt",
    price: 17.99,
    description:
      "Perfect novelty tee with cool sayings and a welding theme straight from the shop.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07NFRNCZW.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07NFRNCZW",
  },
  {
    id: BigInt(12),
    name: "Weld It Like You Mean It Funny Welder T-Shirt",
    price: 17.99,
    description:
      "Commit to every bead. A bold, funny welder tee for those who give it 100%.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07NV4MZL6.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07NV4MZL6",
  },
  {
    id: BigInt(13),
    name: "Welding Gift with American Flag Welder Mig T-Shirt",
    price: 18.99,
    description:
      "Patriotic MIG welding tee featuring the American flag. Great gift for the proud welder.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07P6BP9XD.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P6BP9XD",
  },
  {
    id: BigInt(14),
    name: "Welder Because Even Engineers Need Heroes T-Shirt",
    price: 17.99,
    description:
      "Welders are the real heroes. Funny tee celebrating the skilled trades over the engineers.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07PFBQJ3Y.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07PFBQJ3Y",
  },
  {
    id: BigInt(15),
    name: "Tig, Mig, Arc Proud Welding American Flag Tees",
    price: 17.99,
    description:
      "TIG, MIG, Arc — all the disciplines celebrated in one proud patriotic welding tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07PN7G6BG.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07PN7G6BG",
  },
  {
    id: BigInt(16),
    name: "Dad Welder Hero American Flag Patriotic T-Shirt",
    price: 17.99,
    description:
      "For the dad who is also a welding hero. Patriotic American flag gift tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07PWY5LG4.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07PWY5LG4",
  },
  {
    id: BigInt(17),
    name: "Cool Welder Electrician Funny Welding Gift T-Shirt",
    price: 17.99,
    description:
      "A cool crossover for welders and electricians. Funny trade gift tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07Q2H8D45.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Q2H8D45",
  },
  {
    id: BigInt(18),
    name: "Eat Sleep Weld Repeat Funny Welder Gift T-Shirt",
    price: 17.99,
    description:
      "The welder's daily routine in one shirt. Funny and relatable gift for the dedicated craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07R9GWT2M.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07R9GWT2M",
  },
  {
    id: BigInt(19),
    name: "World's Greatest Welder Funny Gift T-Shirt",
    price: 17.99,
    description:
      "For the best welder you know. A funny award-style tee perfect for any welding pro.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07T8FY2KN.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07T8FY2KN",
  },
  {
    id: BigInt(20),
    name: "Welding Since Birth Funny Welder Pride T-Shirt",
    price: 17.99,
    description:
      "Some are born to weld. Proud welder heritage tee for the lifelong craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TBL9NGX.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TBL9NGX",
  },
  {
    id: BigInt(21),
    name: "Keep Calm And Weld On Funny Welding T-Shirt",
    price: 17.99,
    description:
      "The welder's mantra. Keep calm, strike an arc, and weld on. Classic funny tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TFVDBWF.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TFVDBWF",
  },
  {
    id: BigInt(22),
    name: "Vintage Fitter American Flag Welding Zip Hoodie",
    price: 39.9,
    description:
      "Premium zip hoodie with vintage fitter and American flag welding design. Built for the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TGWZX8Z.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TGWZX8Z",
  },
  {
    id: BigInt(23),
    name: "Heavy Duty Welding Gift for Welders T-Shirt",
    price: 18.99,
    description:
      "Professional welders tee for welders and metalworkers. Heavy duty and built to last.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TKZ5FG1.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TKZ5FG1",
  },
  {
    id: BigInt(24),
    name: "Real Men Weld Funny Welding Pride T-Shirt",
    price: 17.99,
    description:
      "Real men work with fire and metal. Proud welding statement tee for the true craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TN3W15G.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TN3W15G",
  },
  {
    id: BigInt(25),
    name: "Welder Noun Funny Definition Gift T-Shirt",
    price: 17.99,
    description:
      "Dictionary definition style welder noun tee. A hilarious gift for any welding professional.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TQB6LTK.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TQB6LTK",
  },
  {
    id: BigInt(26),
    name: "Weld Like A Boss Funny Welder Gift Tee",
    price: 17.99,
    description:
      "Only bosses weld like this. Funny confidence tee for the skilled welder who owns every bead.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07TZVFXCD.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TZVFXCD",
  },
  {
    id: BigInt(27),
    name: "My Favorite People Call Me Welder Funny T-Shirt",
    price: 17.99,
    description:
      "A funny tee celebrating the welder identity. Your favorite people know who you really are.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07VR2F83C.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VR2F83C",
  },
  {
    id: BigInt(28),
    name: "Best Welder Ever Funny Welding Pride T-Shirt",
    price: 17.99,
    description:
      "For the welder who sets the bar. Proud welding pride tee for the very best in the shop.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07WCFNYRD.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WCFNYRD",
  },
  {
    id: BigInt(29),
    name: "America Was Built By Welders Patriotic Pullover Hoodie",
    price: 35.99,
    description:
      "America's infrastructure was built by welders. Wear this patriotic pullover with pride.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07WKDW6XQ.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WKDW6XQ",
  },
  {
    id: BigInt(30),
    name: "Master Welder Funny Welding Gift T-Shirt",
    price: 17.99,
    description:
      "A true master of the craft. Funny gift tee for the most skilled welder in the shop.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07XKJK5F2.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XKJK5F2",
  },
  {
    id: BigInt(31),
    name: "Welder Powered By Coffee And Metal T-Shirt",
    price: 17.99,
    description:
      "Coffee in one hand, torch in the other. Funny welder powered by coffee and metal tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07XMZJQ9T.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XMZJQ9T",
  },
  {
    id: BigInt(32),
    name: "Pipefitter Welding Christmas Gift Zip Hoodie",
    price: 49.97,
    description:
      "The perfect Christmas gift for a pipefitter or welder. Premium zip hoodie built for the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YCZYWGT.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YCZYWGT",
  },
  {
    id: BigInt(33),
    name: "Welder Life Best Job Ever Funny Gift T-Shirt",
    price: 17.99,
    description:
      "No better life than the welder's life. Funny tee celebrating the best job in the trades.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD1HCYG.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD1HCYG",
  },
  {
    id: BigInt(34),
    name: "Welding Is My Passion T-Shirt",
    price: 17.99,
    description:
      "Not just a job — a passion. For welders who live and breathe the craft every day.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD1THMG.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD1THMG",
  },
  {
    id: BigInt(35),
    name: "Funny Welder Welding Joke Gift T-Shirt",
    price: 17.99,
    description:
      "Bring the laughs to the shop floor. Funny welder joke tee that any craftsman will appreciate.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD23WCR.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD23WCR",
  },
  {
    id: BigInt(36),
    name: "Cool Vintage Welder Funny Welding T-Shirt",
    price: 17.99,
    description:
      "Classic vintage look with a cool welding twist. Stylish and funny tee for any welder.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD277R3.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD277R3",
  },
  {
    id: BigInt(37),
    name: "Welder Work Hard Play Hard Funny T-Shirt",
    price: 17.99,
    description:
      "Work hard at the torch, play hard off the clock. The welder's philosophy on a tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD2CMYJ.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD2CMYJ",
  },
  {
    id: BigInt(38),
    name: "Arc Welder Funny Welding Gift T-Shirt",
    price: 17.99,
    description:
      "For the arc welding specialist. Funny gift tee that celebrates the electric arc craft.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07YD2DCBH.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YD2DCBH",
  },
  {
    id: BigInt(39),
    name: "Welding Dad Joke Funny Welder T-Shirt",
    price: 17.99,
    description:
      "Dad jokes + welding = pure gold. Funny welding dad tee for the craftsman who loves a good laugh.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07ZCCF8TR.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZCCF8TR",
  },
  {
    id: BigInt(40),
    name: "I Weld Therefore I Am Funny Philosophy Welder Tee",
    price: 17.99,
    description:
      "A philosophical take on welding. Descartes meets the welding torch in this hilarious tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07ZCCFFHB.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZCCFFHB",
  },
  {
    id: BigInt(41),
    name: "Welder Gear Head Funny Metalworking T-Shirt",
    price: 17.99,
    description:
      "For the welder who is also a gear head. Funny metalworking tee for the mechanical craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07ZCV5RQP.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZCV5RQP",
  },
  {
    id: BigInt(42),
    name: "Fabricator Metal Worker Funny Welding Tee",
    price: 17.99,
    description:
      "For fabricators and metal workers who take pride in their craft. Funny welding trade tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B07ZCVQ2HX.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZCVQ2HX",
  },
  {
    id: BigInt(43),
    name: "Welder TIG MIG Torch Arc Funny Gift T-Shirt",
    price: 17.99,
    description:
      "TIG, MIG, Torch, Arc — the complete welder's toolkit on one funny gift tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B081W3XBJ7.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B081W3XBJ7",
  },
  {
    id: BigInt(44),
    name: "Custom Welder Funny Job Pride T-Shirt",
    price: 17.99,
    description:
      "Custom job pride tee for welders who take their craft seriously. Funny and bold.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B081W4LQXL.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B081W4LQXL",
  },
  {
    id: BigInt(45),
    name: "Welder Craftsman Funny Welding Gift Tee",
    price: 17.99,
    description:
      "A craftsman through and through. Funny welding gift tee for the artisan of the trade.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B081W4QML8.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B081W4QML8",
  },
  {
    id: BigInt(46),
    name: "Professional Welder Funny Metalwork T-Shirt",
    price: 17.99,
    description:
      "Certified professional welder. Funny metalwork tee for the credentialed craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B084T5ZTJH.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084T5ZTJH",
  },
  {
    id: BigInt(47),
    name: "Welding Humor Funny Welder Novelty T-Shirt",
    price: 17.99,
    description:
      "Welding with a sense of humor. Funny novelty tee that will get a laugh at any job site.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B084T6B5QC.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084T6B5QC",
  },
  {
    id: BigInt(48),
    name: "Iron Worker Welder Funny Trade Gift T-Shirt",
    price: 17.99,
    description:
      "For iron workers and welders who build the world. Funny trade gift tee for the hardworking craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B084TQ439S.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084TQ439S",
  },
  {
    id: BigInt(49),
    name: "Metal Fusion Welder Funny Gift T-Shirt",
    price: 17.99,
    description:
      "The art of metal fusion. Funny gift tee celebrating the science and skill of welding.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B084TQ6Q3Q.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084TQ6Q3Q",
  },
  {
    id: BigInt(50),
    name: "Welder American Tradesman Proud Gift T-Shirt",
    price: 18.99,
    description:
      "Proud American tradesman welder tee. Celebrate the skilled trades that built this nation.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B0853DYPG4.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0853DYPG4",
  },
  {
    id: BigInt(51),
    name: "Patriot Welder USA Flag Welding Gift T-Shirt",
    price: 18.99,
    description:
      "USA flag patriot welder tee. For the American craftsman who welds with pride and country.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B0853F7JNB.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0853F7JNB",
  },
  {
    id: BigInt(52),
    name: "Union Welder Proud American Tradesman T-Shirt",
    price: 18.99,
    description:
      "Proud union welder and American tradesman tee. For those who stand with the union.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B0853FB7FH.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0853FB7FH",
  },
  {
    id: BigInt(53),
    name: "Weld Don't Stop Funny Welder Pride Tee",
    price: 17.99,
    description:
      "Never stop welding. Funny motivational welder pride tee for those who keep the arc burning.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08551KCSN.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08551KCSN",
  },
  {
    id: BigInt(54),
    name: "Blue Collar Welder Hardworking Gift T-Shirt",
    price: 17.99,
    description:
      "Blue collar and proud. Hardworking welder gift tee for the backbone of American industry.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08581PSL1.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08581PSL1",
  },
  {
    id: BigInt(55),
    name: "Welder Ironworker Funny Occupation Gift Tee",
    price: 17.99,
    description:
      "Welder and ironworker pride in one funny occupation tee. Perfect gift for the dual-trade craftsman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B085823HQJ.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B085823HQJ",
  },
  {
    id: BigInt(56),
    name: "Skilled Trades Welder Funny Novelty T-Shirt",
    price: 17.99,
    description:
      "Celebrate the skilled trades with this funny novelty welder tee. Respect the craft.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08GJDMMLK.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08GJDMMLK",
  },
  {
    id: BigInt(57),
    name: "Welder Dad Funny Father Gift T-Shirt",
    price: 17.99,
    description:
      "For the welder dad who does it all. Funny father gift tee perfect for Father's Day.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08K5D43CV.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08K5D43CV",
  },
  {
    id: BigInt(58),
    name: "Welder Husband Funny Spouse Gift T-Shirt",
    price: 17.99,
    description:
      "For the welder husband who comes home smelling like iron. Funny spouse gift tee.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08K5D4WG2.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08K5D4WG2",
  },
  {
    id: BigInt(59),
    name: "Welding Legend Funny Welder Pride T-Shirt",
    price: 17.99,
    description:
      "A legend in the shop. Funny welder pride tee for the craftsman whose reputation precedes them.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08N7VNMJQ.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08N7VNMJQ",
  },
  {
    id: BigInt(60),
    name: "Hot Sparks Fly Welder Funny T-Shirt",
    price: 17.99,
    description:
      "When you weld, sparks fly. Funny welder tee celebrating the heat and light of the craft.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08N7WC5G4.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08N7WC5G4",
  },
  {
    id: BigInt(61),
    name: "Grind Weld Repeat Funny Welder Motivation Tee",
    price: 17.99,
    description:
      "Grind, weld, repeat. Motivational tee for the dedicated welder who never misses a day.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08QH7LQXH.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08QH7LQXH",
  },
  {
    id: BigInt(62),
    name: "Welder Grinder Metal Shaper Funny Craft Tee",
    price: 17.99,
    description:
      "Welder, grinder, and metal shaper — the complete craftsman. Funny tee for the full-spectrum tradesman.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/P/B08QGQ5547.01._SCLZZZZZZZ_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08QGQ5547",
  },
];

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return FALLBACK_PRODUCTS;
      try {
        const result = await actor.getAllProducts();
        return result.length > 0 ? result : FALLBACK_PRODUCTS;
      } catch {
        return FALLBACK_PRODUCTS;
      }
    },
    enabled: !isFetching,
    placeholderData: FALLBACK_PRODUCTS,
  });
}

export { FALLBACK_PRODUCTS };

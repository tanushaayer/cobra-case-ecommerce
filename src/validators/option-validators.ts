//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-900
//bg-rose-950 border-rose-950 
//for some reason tailwind doesnot take the dynamic colors but works if given in comments like this

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    { Label: "Black", value: "black", tw: "zinc-900" },
    { Label: "Blue", value: "blue", tw: "blue-950" },
    { Label: "Rose", value: "rose", tw: "rose-950" },
] as const // as const states it is not any string but list of these strings specified

export const MODELS = {
    name: "models",
    options: [
        {
            label: "Iphone X",
            value: "iphonex"
        },
        {
            label: "Iphone 11",
            value: "iphone11"
        },
        {
            label: "Iphone 12",
            value: "iphone12"
        },
        {
            label: "Iphone 13",
            value: "iphone13"
        },
        {
            label: "Iphone 14",
            value: "iphone14"
        },
        {
            label: "Iphone 15",
            value: "iphone15"
        },
    ]
} as const

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "Scratch-resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate
        },
    ]
} as const

export const FINISHES = {
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "Soft grippy texture",
            price: PRODUCT_PRICES.finish.textured
        },
    ]
} as const
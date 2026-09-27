const products = [

    {
        code: "A101",
        name: "Royal Printed Anarkali Suit",
        category: "anarkali",
        price: 5997,
        discount: 80,

        colors: [
            {
                name: "Blue",
                available: true,
                image: "assets/images/a101.webp",

                gallery: [
                    "assets/images/a101.webp",
                    "assets/images/a101-2.webp",
                    "assets/images/a101-detail.webp"
                ]
            }
        ],

        sizes: [
            { size: "S", available: true },
            { size: "M", available: true },
            { size: "L", available: true },
            { size: "XL", available: true },
            { size: "XXL", available: true }
        ]
    },


    {
        code: "S101",
        name: "Elegant Mustard Yellow Printed Kurta Pant Set",
        category: "suit-set",
        price: 3993,
        discount: 80,

        colors: [
            {
                name: "Mustard Yellow",
                available: true,
                image: "assets/images/s101.webp",

                gallery: [
    "assets/images/s101.webp",
    "assets/images/s101-2.webp",
    "assets/images/s101-3.webp"
]
            }
        ],

        sizes: [
            { size: "S", available: true },
            { size: "M", available: true },
            { size: "L", available: true },
            { size: "XL", available: true },
            { size: "XXL", available: true }
        ]
    },

{
    code: "L101",
    name: "Royal Teal Embroidered Lehenga",
    category: "lehenga",
    price: 8497,
    discount: 80,
    colors: [
        {
            name: "Teal Blue",
            available: true,
            image: "assets/images/l101.webp",
            gallery: [
                "assets/images/l101.webp",
                "assets/images/l101-2.webp",
                "assets/images/l101-3.webp"
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "SR103",
    name: "Vihan Art Green Texture Silk Blend Saree with Embellished Border",
    category: "saree",
    price: 14997,
    discount: 90,
    colors: [
        {
            name: "Green",
            available: true,
            image: "assets/images/SR103.webp",
            gallery: [
                "assets/images/SR103.webp",
                "assets/images/SR103-2.webp",
                "assets/images/SR103-3.webp",
                "assets/images/SR103-4.webp",
                "assets/images/SR103-5.webp",
            ]
        }
    ],
    sizes: [
        { size: "Free Size", available: true }
    ]
},

{
    code: "L102",
    name: "Elegant Embroidered Lehenga",
    category: "lehenga",
    price: 10496,
    discount: 80,
    colors: [
        {
            name: "Lavender",
            available: true,
            image: "assets/images/l102.webp",
            gallery: [
                "assets/images/l102.webp",
                "assets/images/l102-2.webp",
                "assets/images/l102-3.webp",
                "assets/images/l102-4.webp"
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A102",
    name: "Olive Green Embroidered Anarkali",
    category: "anarkali",
    price: 7996,
    discount: 80,
    colors: [
        {
            name: "Olive Green",
            available: true,
            image: "assets/images/a102.webp",
            gallery: [
                "assets/images/a102.webp",
                "assets/images/a102-2.webp",
                "assets/images/a102-3.webp",
                "assets/images/a102-4.webp"
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S108",
    name: "Elegant Vintage Beige Printed Suit Set with Chiffon Dupatta",
    category: "suit-set",
    price: 4995,
    discount: 80,
    colors: [
        {
            name: "Maroon Embroidered",
            available: true,
            image: "assets/images/s108.webp",
            gallery: [
                "assets/images/s108.webp",
                "assets/images/s108-2.webp",
                "assets/images/s108-3.webp",
                "assets/images/s108-4.webp",
                "assets/images/s108-5.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "SR103",
    name: "Vihan Art Pink Texture Silk Blend Saree with Embellished Border",
    category: "saree",
    price: 11996,
    discount: 80,
    colors: [
        {
            name: "Pink",
            available: true,
            image: "assets/images/SR104.webp",
            gallery: [
                "assets/images/SR104.webp",
                "assets/images/SR104-2.webp",
                "assets/images/SR104-3.webp",
                "assets/images/SR104-4.webp",
            ]
        }
    ],
    sizes: [
        { size: "Free Size", available: true }
    ]
},

{
    code: "L104",
    name: "Royal Blue Printed Lehenga",
    category: "lehenga",
    price: 6995,
    discount: 80,
    colors: [
        {
            name: "Royal Blue",
            available: true,
            image: "assets/images/l103.webp",
            gallery: [
                "assets/images/l103.webp",
                "assets/images/l103-2.webp",
                "assets/images/l103-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S107",
    name: "Rust Embroidered Silk Blend A-line Suit Set",
    category: "suit-set",
    price: 4496,
    discount: 80,
    colors: [
        {
            name: "Red",
            available: true,
            image: "assets/images/s107.webp",
            gallery: [
                "assets/images/s107.webp",
                "assets/images/s107-2.webp",
                "assets/images/s107-3.webp",
                "assets/images/s107-4.webp",
                "assets/images/s107-5.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: false }
    ]
},

{
    code: "A103",
    name: "Royal Blue Floral Anarkali",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Royal Blue",
            available: true,
            image: "assets/images/a103.webp",
            gallery: [
                "assets/images/a103.webp",
                "assets/images/a103-2.webp",
                "assets/images/a103-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A104",
    name: "Elegant Printed Anarkali Suit Set",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Mustard / Rust Orange",
            available: true,
            image: "assets/images/a104.webp",
            gallery: [
                "assets/images/a104.webp",
                "assets/images/a104-2.webp",
                "assets/images/a104-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: false },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "l105",
    name: "Elegant Mauve & Lavender Embroidered Lehenga Set",
    category: "lehenga",
    price: 7996,
    discount: 80,
    colors: [
        {
            name: "Elegant Mauve & Lavender",
            available: true,
            image: "assets/images/l105.webp",
            gallery: [
                "assets/images/l105.webp",
                "assets/images/l105-2.webp",
                "assets/images/l105-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A105",
    name: "Royal Black Printed Anarkali Suit ",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Black",
            available: true,
            image: "assets/images/a105.webp",
            gallery: [
                "assets/images/a105.webp",
                "assets/images/a105-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: false },
        { size: "XL", available: true },
        { size: "XXL", available: false }
    ]
},

{
    code: "A106",
    name: "Royal Pink & Baby Pink Printed Anarkali Suit ",
    category: "anarkali",
    price: 6995,
    discount: 80,
    colors: [
        {
            name: "Pink & Baby Pink",
            available: true,
            image: "assets/images/a106.webp",
            gallery: [
                "assets/images/a106.webp",
                "assets/images/a106-2.webp",
                "assets/images/a106-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S102",
    name: "Elegant Rose Pink Printed Kurta Pant Set",
    category: "suit-set",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Rose Pink",
            available: true,
            image: "assets/images/s102.webp",
            gallery: [
                "assets/images/s102.webp",
                "assets/images/s102-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: false }
    ]
},

{
    code: "A107",
    name: "Elegant Ivory & Blush Pink Floral Anarkali Suit",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Ivory & Blush Pink",
            available: true,
            image: "assets/images/a107.webp",
            gallery: [
                "assets/images/a107.webp",
                "assets/images/a107-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A108",
    name: "Elegant Beige & Cream Floral Printed Anarkali Suit",
    category: "anarkali",
    price: 6995,
    discount: 80,
    colors: [
        {
            name: "Beige & Cream Floral",
            available: true,
            image: "assets/images/a108.webp",
            gallery: [
                "assets/images/a108.webp",
                "assets/images/a108-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A115",
    name: "Naazira Maroon Print Anarkali Suit Set with Mul Cotton Dupatta",
    category: "anarkali",
    price: 4993,
    discount: 80,
    colors: [
        {
            name: "Maroon",
            available: true,
            image: "assets/images/a115.webp",
            gallery: [
                "assets/images/a115.webp",
                "assets/images/a115-2.webp",
                "assets/images/a115-3.webp",
                "assets/images/a115-4.webp",
            ]
        }
    ],
    sizes: [
        { size: "XS", available: true },
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S103",
    name: "Elegant Maroon Embroidered Kurta Palazzo Set",
    category: "suit-set",
    price: 6995,
    discount: 80,
    colors: [
        {
            name: "Maroon Embroidered",
            available: true,
            image: "assets/images/s103.webp",
            gallery: [
                "assets/images/s103.webp",
                "assets/images/s103-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A116",
    name: "Zarima Red Print Anarkali Suit Set with Mul Cotton Dupatta",
    category: "anarkali",
    price: 4993,
    discount: 80,
    colors: [
        {
            name: "Maroon",
            available: true,
            image: "assets/images/a116.webp",
            gallery: [
                "assets/images/a116.webp",
                "assets/images/a116-2.webp",
                "assets/images/a116-3.webp",
                "assets/images/a116-4.webp",
            ]
        }
    ],
    sizes: [
        { size: "XS", available: true },
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: false }
    ]
},

{
    code: "A109",
    name: "Elegant Wine & Magenta Floral Anarkali Suit",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Wine & Magenta",
            available: true,
            image: "assets/images/a109.webp",
            gallery: [
                "assets/images/a109.webp",
                "assets/images/a109-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A110",
    name: "Elegant Mustard Yellow & Teal Floral Printed Anarkali Suit",
    category: "anarkali",
    price: 7495,
    discount: 80,
    colors: [
        {
            name: "Mustard Yellow & Teal",
            available: true,
            image: "assets/images/a110.webp",
            gallery: [
                "assets/images/a110.webp",
                "assets/images/a110-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S104",
    name: "Elegant Ivory & Denim Blue Embroidered Kurta Set",
    category: "suit-set",
    price: 4993,
    discount: 80,
    colors: [
        {
            name: "Ivory & Denim Blue",
            available: true,
            image: "assets/images/s104.webp",
            gallery: [
                "assets/images/s104.webp",
                "assets/images/s104-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: false }
    ]
},

{
    code: "A111",
    name: "Vihan - Royal Navy Blue & Maroon Printed Anarkali Suit",
    category: "anarkali",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Navy Blue & Maroon",
            available: true,
            image: "assets/images/a111.webp",
            gallery: [
                "assets/images/a111.webp",
                "assets/images/a111-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A112",
    name: "Elegant Rose Pink Embroidered Anarkali Suit",
    category: "anarkali",
    price: 6495,
    discount: 80,
    colors: [
        {
            name: "Rose Pink",
            available: true,
            image: "assets/images/a112.webp",
            gallery: [
                "assets/images/a112.webp",
                "assets/images/a112-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A113",
    name: "Elegant Powder Blue Floral Embroidered Anarkali Suit",
    category: "anarkali",
    price: 6495,
    discount: 80,
    colors: [
        {
            name: "Powder Blue",
            available: true,
            image: "assets/images/a113.webp",
            gallery: [
                "assets/images/a113.webp",
                "assets/images/a113-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "l106",
    name: "Vihan - Royal Wine & Gold Embroidered Lehenga Set",
    category: "lehenga",
    price: 7996,
    discount: 80,
    colors: [
        {
            name: "Wine & Gold",
            available: true,
            image: "assets/images/l106.webp",
            gallery: [
                "assets/images/l106.webp",
                "assets/images/l106-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "l107",
    name: "Vihan - Royal Magenta & Navy Blue Embroidered Lehenga Set",
    category: "lehenga",
    price: 6995,
    discount: 80,
    colors: [
        {
            name: "Magenta & Navy Blue",
            available: true,
            image: "assets/images/l107.webp",
            gallery: [
                "assets/images/l107.webp",
                "assets/images/l107-2.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S105",
    name: "Elegant Black & Maroon Printed Kurta Pant Set",
    category: "suit-set",
    price: 6495,
    discount: 80,
    colors: [
        {
            name: "Black & Maroon",
            available: true,
            image: "assets/images/s105.webp",
            gallery: [
                "assets/images/s105.webp",
                "assets/images/s105-2.webp",
                "assets/images/s105-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "S106",
    name: "Vihan Royal Maroon & Gold Embroidered Kurta Pant Set",
    category: "suit-set",
    price: 5995,
    discount: 80,
    colors: [
        {
            name: "Maroon & Gold",
            available: true,
            image: "assets/images/s106.webp",
            gallery: [
                "assets/images/s106.webp",
                "assets/images/s106-2.webp",
                "assets/images/s106-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "A114",
    name: "Elegant Lavender Purple Embroidered Anarkali Suit",
    category: "anarkali",
    price: 4993,
    discount: 80,
    colors: [
        {
            name: "Lavender Purple",
            available: true,
            image: "assets/images/a114.webp",
            gallery: [
                "assets/images/a114.webp",
                "assets/images/a114-2.webp",
                "assets/images/a114-3.webp",
            ]
        }
    ],
    sizes: [
        { size: "S", available: true },
        { size: "M", available: true },
        { size: "L", available: true },
        { size: "XL", available: true },
        { size: "XXL", available: true }
    ]
},

{
    code: "SR102",
    name: "Vihan Red Ethnic Motifs Woven Design Silk Blend Saree with Unstitched Blouse Piece",
    category: "saree",
    price: 5996,
    discount: 80,
    colors: [
        {
            name: "Red",
            available: true,
            image: "assets/images/SR102.webp",
            gallery: [
                "assets/images/SR102.webp",
                "assets/images/SR102-2.webp",
                "assets/images/SR102-3.webp",
                "assets/images/SR102-4.webp",
            ]
        }
    ],
    sizes: [
        { size: "Free Size", available: true }
    ]
},

    {
    code: "SR101",
    name: "Vihan Royal Blue Floral Saree",
    category: "saree",
    price: 6996,
    discount: 80,

    colors: [
        {
            name: "Blue",
            available: true,
            image: "assets/images/SR101.webp",
            gallery: [
    "assets/images/SR101.webp",
    "assets/images/SR101-2.webp"
]
        }
    ],

    sizes: [
        { size: "Free Size", available: true }
    ]
},

];
// =========================
// FINAL PRICE
// =========================

function getFinalPrice(price, discount) {
    return Math.round(price - (price * discount / 100));
}


// =========================
// PRODUCT GRID
// =========================

const productGrid = document.getElementById("productGrid");

function displayProducts(category = "all") {

    productGrid.innerHTML = "";

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {

        const finalPrice =
            getFinalPrice(product.price, product.discount);

        const firstAvailableColor =
            product.colors.find(color => color.available);

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${firstAvailableColor.image}"
                alt="${product.name}"
                class="product-image"
            >

            <div class="product-info">

                <div class="product-code">
                    ${product.code}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">

                    <span class="original-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    <span class="discount-badge">
                        ${product.discount}% OFF
                    </span>

                    <span class="final-price">
                        ₹${finalPrice.toLocaleString("en-IN")}
                    </span>

                </div>

            </div>
        `;

        card.addEventListener("click", () => {
            openProductModal(product);
        });

        productGrid.appendChild(card);
    });
}


// =========================
// PRODUCT MODAL
// =========================

const productModal =
    document.getElementById("productModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");


function openProductModal(product) {

    const finalPrice =
        getFinalPrice(product.price, product.discount);

    // =========================
    // PRODUCT IMAGE / GALLERY
    // =========================

    // Product ke first available variant ki images
    const defaultVariant =
        product.colors?.find(color => color.available) ||
        product.colors?.[0];

    let galleryImages =
        defaultVariant?.gallery?.length
            ? defaultVariant.gallery
            : [defaultVariant?.image];

    let currentImageIndex = 0;

    let selectedSize = "";


    // =========================
    // SIZE BUTTONS
    // =========================

    const sizeButtons = product.sizes
        .map(item => {

            return `
                <button
                    class="size-btn ${item.available ? "" : "unavailable"}"
                    data-size="${item.size}"
                    data-available="${item.available}"
                >
                    ${item.size}
                </button>
            `;

        })
        .join("");


    // =========================
    // MODAL HTML
    // =========================

    modalBody.innerHTML = `

        <!-- PRODUCT GALLERY -->

        <div
            id="productGallery"
            style="
                position:relative;
                width:100%;
                overflow:hidden;
                border-radius:18px;
                background:#f7f7f7;
                touch-action:pan-y;
            "
        >

            <img
                id="modalProductImage"
                src="${galleryImages[0]}"
                alt="${product.name}"
                style="
                    width:100%;
                    display:block;
                    border-radius:18px;
                    user-select:none;
                    -webkit-user-drag:none;
                "
            >

            <!-- PREVIOUS -->

            <button
                id="galleryPrev"
                type="button"
                style="
                    position:absolute;
                    left:10px;
                    top:50%;
                    transform:translateY(-50%);
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:50%;
                    background:rgba(255,255,255,0.92);
                    color:#111;
                    font-size:22px;
                    font-weight:700;
                    box-shadow:0 3px 12px rgba(0,0,0,0.15);
                    cursor:pointer;
                    z-index:5;
                "
            >
                ‹
            </button>


            <!-- NEXT -->

            <button
                id="galleryNext"
                type="button"
                style="
                    position:absolute;
                    right:10px;
                    top:50%;
                    transform:translateY(-50%);
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:50%;
                    background:rgba(255,255,255,0.92);
                    color:#111;
                    font-size:22px;
                    font-weight:700;
                    box-shadow:0 3px 12px rgba(0,0,0,0.15);
                    cursor:pointer;
                    z-index:5;
                "
            >
                ›
            </button>

        </div>


        <!-- IMAGE DOTS -->

        <div
            id="galleryDots"
            style="
                display:flex;
                justify-content:center;
                align-items:center;
                gap:7px;
                margin-top:10px;
                margin-bottom:18px;
            "
        ></div>


        <!-- PRODUCT CODE -->

        <div
            style="
                font-size:10px;
                color:#888;
            "
        >
            ${product.code}
        </div>


        <!-- PRODUCT NAME -->

        <h2 style="
    margin-top:6px;
    font-size:18px;
    line-height:1.25;
    font-weight:700;
    color:#7F1538;
">
    ${product.name}
</h2>


        <!-- PRICE -->

        <div style="margin-top:12px;">

            <span
                style="
                    color:#999;
                    text-decoration:line-through;
                    font-size:13px;
                "
            >
                ₹${product.price.toLocaleString("en-IN")}
            </span>

            <span
                style="
                    color:#16803c;
                    font-size:12px;
                    font-weight:700;
                    margin-left:6px;
                "
            >
                ${product.discount}% OFF
            </span>

            <div
    style="
        font-size:22px;
        font-weight:600;
        margin-top:4px;
        color:#981B45;
    "
>
    ₹${finalPrice.toLocaleString("en-IN")}
</div>

<div
    style="
        margin-top:6px;
        font-size:11px;
        font-weight:600;
        color:#B4233C;
    "
>
    Cash on Delivery Not Available
</div>


        <!-- SIZE -->

        <h3
            style="
                font-size:14px;
                margin-top:24px;
            "
        >
            Select Size
        </h3>


        <div
            id="sizeOptions"
            style="
                display:flex;
                flex-wrap:wrap;
                gap:8px;
                margin-top:10px;
            "
        >
            ${sizeButtons}
        </div>


        <div
            id="sizeStatus"
            style="
                margin-top:10px;
                font-size:12px;
                font-weight:600;
                min-height:18px;
            "
        >
            Please select your size
        </div>

        <!-- PRODUCT BENEFITS -->
<div class="product-benefits">

    <div class="benefit-item">
        <span class="benefit-icon">✓</span>
        <span>Premium Quality</span>
    </div>

    <div class="benefit-item">
        <span class="benefit-icon">💬</span>
        <span>Easy WhatsApp Ordering</span>
    </div>

    <div class="benefit-item">
        <span class="benefit-icon">💳</span>
        <span>Online Payment</span>
    </div>

    <div class="benefit-item">
        <span class="benefit-icon">♡</span>
        <span>Easy Support</span>
    </div>

</div>

        <!-- ACTION BUTTONS -->

        <div class="product-actions">

            <button
                id="addToCart"
                class="add-cart-btn"
            >
                Add to Cart
            </button>


            <button
                id="buyNow"
                class="buy-now-btn"
            >
                Buy Now
            </button>

        </div>



`;


    productModal.classList.add("show");


    // =========================
    // GALLERY ELEMENTS
    // =========================

    const galleryImage =
        document.getElementById("modalProductImage");

    const galleryDots =
        document.getElementById("galleryDots");

    const galleryPrev =
        document.getElementById("galleryPrev");

    const galleryNext =
        document.getElementById("galleryNext");


    // =========================
    // UPDATE GALLERY
    // =========================

    function updateGallery() {

        galleryImage.src =
            galleryImages[currentImageIndex];


        galleryDots.innerHTML =
            galleryImages
                .map((image, index) => {

                    return `
                        <button
                            type="button"
                            class="gallery-dot"
                            data-index="${index}"
                            style="
                                width:${index === currentImageIndex ? "9px" : "7px"};
                                height:${index === currentImageIndex ? "9px" : "7px"};
                                padding:0;
                                border:none;
                                border-radius:50%;
                                background:${index === currentImageIndex ? "#111" : "#ccc"};
                                cursor:pointer;
                            "
                        ></button>
                    `;

                })
                .join("");


        document
            .querySelectorAll(".gallery-dot")
            .forEach(dot => {

                dot.addEventListener("click", () => {

                    currentImageIndex =
                        Number(dot.dataset.index);

                    updateGallery();

                });

            });

    }


    updateGallery();


    // =========================
    // NEXT IMAGE
    // =========================

    galleryNext.addEventListener("click", () => {

        currentImageIndex++;

        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        updateGallery();

    });


    // =========================
    // PREVIOUS IMAGE
    // =========================

    galleryPrev.addEventListener("click", () => {

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex =
                galleryImages.length - 1;
        }

        updateGallery();

    });


    // =========================
    // MOBILE SWIPE
    // =========================

    let touchStartX = 0;
    let touchEndX = 0;


    galleryImage.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    galleryImage.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            const swipeDistance =
                touchEndX - touchStartX;


            if (Math.abs(swipeDistance) < 50) {
                return;
            }


            // Swipe left → next

            if (swipeDistance < 0) {

                currentImageIndex++;

                if (currentImageIndex >= galleryImages.length) {
                    currentImageIndex = 0;
                }

            }


            // Swipe right → previous

            else {

                currentImageIndex--;

                if (currentImageIndex < 0) {
                    currentImageIndex =
                        galleryImages.length - 1;
                }

            }


            updateGallery();

        },
        { passive: true }
    );


    // =========================
    // SIZE SELECTION
    // =========================

    document
        .querySelectorAll(".size-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const sizeStatus =
                    document.getElementById("sizeStatus");


                // Reset all size buttons

                document
                    .querySelectorAll(".size-btn")
                    .forEach(btn => {

                        btn.style.background = "#fff";
                        btn.style.color = "#111";

                    });


                // NOT AVAILABLE

                if (button.dataset.available !== "true") {

                    button.style.background = "#f5f5f5";
                    button.style.color = "#999";

                    sizeStatus.innerHTML =
                        `✕ Size ${button.dataset.size} is Not Available`;

                    sizeStatus.style.color = "#d32f2f";

                    selectedSize = "";

                    return;
                }


                // AVAILABLE SIZE

                button.style.background = "#111";
                button.style.color = "#fff";


                selectedSize =
                    button.dataset.size;


                sizeStatus.innerHTML =
                    `✓ Size ${selectedSize} is Available`;

                sizeStatus.style.color = "#16803c";

            });

        });


    // =========================
    // ADD TO CART
    // =========================

    document
        .getElementById("addToCart")
        .addEventListener("click", () => {

            if (!selectedSize) {

                alert("Please select an available size first.");

                return;
            }


            const cartItem = {
    code: product.code,
    name: product.name,
    size: selectedSize,
    price: finalPrice,
    image: defaultVariant?.image || galleryImages[0],
    quantity: 1
};


            let cart =
                JSON.parse(
                    localStorage.getItem("vihanCart")
                ) || [];


            // Same product + size ko merge karega

            const existingItem =
                cart.find(item =>
                    item.code === cartItem.code &&
                    item.size === cartItem.size
                );


            if (existingItem) {

                existingItem.quantity += 1;

            } else {

                cart.push(cartItem);

            }


            localStorage.setItem(
                "vihanCart",
                JSON.stringify(cart)
            );


            updateCartCount();


            alert("Product added to cart ✓");

        });


    // =========================
    // BUY NOW
    // =========================

    document
        .getElementById("buyNow")
        .addEventListener("click", () => {

            if (!selectedSize) {

                alert("Please select an available size first.");

                return;
            }


            const buyNowItem = {

                code: product.code,

                name: product.name,

                color:
                    defaultVariant?.name || "Default",

                size: selectedSize,

                price: finalPrice,

                image:
                    defaultVariant?.image ||
                    galleryImages[0],

                quantity: 1

            };


            localStorage.setItem(
                "vihanBuyNow",
                JSON.stringify(buyNowItem)
            );


            openCustomerDetailsForm([
                buyNowItem
            ]);

        });

}


// =========================
// CLOSE PRODUCT MODAL
// =========================

modalClose.addEventListener("click", () => {

    productModal.classList.remove("show");

});


modalOverlay.addEventListener("click", () => {

    productModal.classList.remove("show");

});


// =========================
// CATEGORY FILTER
// =========================

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });


            button.classList.add("active");


            const category =
                button.dataset.category;


            displayProducts(category);

        });

    });


// =========================
// INITIAL LOAD
// =========================

displayProducts();

// =========================
// CART COUNT
// =========================

function updateCartCount() {

    const cart =
        JSON.parse(localStorage.getItem("vihanCart")) || [];

    const totalQuantity =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }
}


// =========================
// LOAD CART COUNT
// =========================

updateCartCount();

// =========================
// CART DRAWER
// =========================

function openCart() {

    let cart =
        JSON.parse(localStorage.getItem("vihanCart")) || [];

    // Create cart overlay
    let existingCart =
        document.getElementById("vihanCartDrawer");

    if (existingCart) {
        existingCart.remove();
    }


    const drawer =
        document.createElement("div");

    drawer.id = "vihanCartDrawer";

    drawer.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.55);
        z-index:99999;
        display:flex;
        justify-content:flex-end;
    `;


    const panel =
        document.createElement("div");

    panel.style.cssText = `
        width:100%;
        max-width:390px;
        height:100%;
        background:#fff;
        padding:22px;
        overflow-y:auto;
        box-sizing:border-box;
    `;


    // =========================
    // HEADER
    // =========================

    panel.innerHTML = `
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:22px;
        ">

            <h2 style="
                margin:0;
                font-size:22px;
            ">
                Your Cart
            </h2>

            <button
                id="closeVihanCart"
                style="
                    width:36px;
                    height:36px;
                    border:none;
                    border-radius:50%;
                    background:#f3f3f3;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ×
            </button>

        </div>
    `;


    // =========================
    // EMPTY CART
    // =========================

    if (cart.length === 0) {

        panel.innerHTML += `
            <div style="
                text-align:center;
                padding:70px 20px;
                color:#777;
            ">
                <div style="
                    font-size:45px;
                    margin-bottom:15px;
                ">
                    🛍️
                </div>

                <h3 style="
                    color:#111;
                    margin:0 0 8px;
                ">
                    Your Cart is Empty
                </h3>

                <p style="font-size:13px;">
                    Add some products to your cart.
                </p>
            </div>
        `;

    } else {


        // =========================
        // CART ITEMS
        // =========================

        let subtotal = 0;


        cart.forEach((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            subtotal += itemTotal;


            panel.innerHTML += `
                <div style="
                    display:flex;
                    gap:12px;
                    padding:15px 0;
                    border-bottom:1px solid #eee;
                ">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        style="
                            width:72px;
                            height:90px;
                            object-fit:cover;
                            border-radius:10px;
                            background:#f5f5f5;
                        "
                    >

                    <div style="
                        flex:1;
                    ">

                        <div style="
                            font-size:10px;
                            color:#888;
                        ">
                            ${item.code}
                        </div>

                        <div style="
                            font-size:14px;
                            font-weight:700;
                            margin-top:3px;
                        ">
                            ${item.name}
                        </div>

                        <div style="
                            font-size:12px;
                            color:#666;
                            margin-top:6px;
                        ">


                        <!-- QUANTITY -->

                        <div style="
                            display:flex;
                            align-items:center;
                            gap:10px;
                            margin-top:10px;
                        ">

                            <button
                                class="cart-minus"
                                data-index="${index}"
                                style="
                                    width:28px;
                                    height:28px;
                                    border:1px solid #ddd;
                                    background:#fff;
                                    border-radius:7px;
                                "
                            >
                                −
                            </button>

                            <strong>
                                ${item.quantity}
                            </strong>

                            <button
                                class="cart-plus"
                                data-index="${index}"
                                style="
                                    width:28px;
                                    height:28px;
                                    border:1px solid #ddd;
                                    background:#fff;
                                    border-radius:7px;
                                "
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="cart-remove"
                            data-index="${index}"
                            style="
                                margin-top:8px;
                                border:none;
                                background:none;
                                color:#d32f2f;
                                font-size:11px;
                                padding:0;
                            "
                        >
                            Remove
                        </button>

                    </div>

                </div>
            `;
        });


        // =========================
        // TOTAL
        // =========================

        panel.innerHTML += `

            <div style="
                margin-top:22px;
                padding-top:18px;
                border-top:1px solid #ddd;
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                    font-size:16px;
                    font-weight:800;
                ">

                    <span>
                        Total
                    </span>

                    <span>
                        ₹${subtotal.toLocaleString("en-IN")}
                    </span>

                </div>


                <button
                    id="cartOrderNow"
                    style="
                        width:100%;
                        margin-top:18px;
                        padding:15px;
                        border:none;
                        border-radius:13px;
                        background:#111;
                        color:#fff;
                        font-size:14px;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    Order Now
                </button>

            </div>
        `;
    }


    drawer.appendChild(panel);

    document.body.appendChild(drawer);


    // =========================
    // CLOSE
    // =========================

    document
        .getElementById("closeVihanCart")
        .addEventListener("click", () => {

            drawer.remove();

        });


    // =========================
    // PLUS
    // =========================

    document
        .querySelectorAll(".cart-plus")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart[index].quantity += 1;

                localStorage.setItem(
                    "vihanCart",
                    JSON.stringify(cart)
                );

                updateCartCount();

                openCart();

            });

        });


    // =========================
    // MINUS
    // =========================

    document
        .querySelectorAll(".cart-minus")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart[index].quantity -= 1;


                if (cart[index].quantity <= 0) {

                    cart.splice(index, 1);

                }


                localStorage.setItem(
                    "vihanCart",
                    JSON.stringify(cart)
                );

                updateCartCount();

                openCart();

            });

        });


    // =========================
    // REMOVE
    // =========================

    document
        .querySelectorAll(".cart-remove")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                localStorage.setItem(
                    "vihanCart",
                    JSON.stringify(cart)
                );

                updateCartCount();

                openCart();

            });

        });
}


// =========================
// CART BUTTON CLICK
// =========================

const cartButton =
    document.getElementById("cartBtn");

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}

// =========================
// CUSTOMER DETAILS FORM
// =========================

document.addEventListener("click", function (event) {

    if (event.target.id !== "cartOrderNow") {
        return;
    }

    const cart =
        JSON.parse(localStorage.getItem("vihanCart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Close cart
    const cartDrawer =
        document.getElementById("vihanCartDrawer");

    if (cartDrawer) {
        cartDrawer.remove();
    }


    // Create customer form overlay
    const formOverlay =
        document.createElement("div");

    formOverlay.id = "customerDetailsOverlay";

    formOverlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.55);
        z-index:100000;
        display:flex;
        justify-content:center;
        align-items:flex-end;
    `;


    const formBox =
        document.createElement("div");

    formBox.style.cssText = `
        width:100%;
        max-width:390px;
        max-height:92vh;
        overflow-y:auto;
        background:#fff;
        border-radius:22px 22px 0 0;
        padding:22px;
        box-sizing:border-box;
    `;


    formBox.innerHTML = `

        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:22px;
        ">

            <h2 style="
                margin:0;
                font-size:22px;
            ">
                Your Details
            </h2>

            <button
                id="closeCustomerForm"
                style="
                    width:36px;
                    height:36px;
                    border:none;
                    border-radius:50%;
                    background:#f3f3f3;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ×
            </button>

        </div>


        <label style="font-size:13px;font-weight:600;">
            Full Name
        </label>

        <input
            id="customerName"
            type="text"
            placeholder="Enter your full name"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <label style="font-size:13px;font-weight:600;">
            Mobile Number
        </label>

        <input
            id="customerMobile"
            type="tel"
            placeholder="Enter mobile number"
            maxlength="10"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <label style="font-size:13px;font-weight:600;">
            WhatsApp Number
        </label>

        <input
            id="customerWhatsapp"
            type="tel"
            placeholder="Enter WhatsApp number"
            maxlength="10"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <label style="font-size:13px;font-weight:600;">
            Full Address
        </label>

        <textarea
            id="customerAddress"
            placeholder="House / Street / Area"
            rows="3"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
                resize:none;
            "
        ></textarea>


        <label style="font-size:13px;font-weight:600;">
            City
        </label>

        <input
            id="customerCity"
            type="text"
            placeholder="Enter city"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <label style="font-size:13px;font-weight:600;">
            State
        </label>

        <input
            id="customerState"
            type="text"
            placeholder="Enter state"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 16px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <label style="font-size:13px;font-weight:600;">
            Pincode
        </label>

        <input
            id="customerPincode"
            type="tel"
            placeholder="Enter pincode"
            maxlength="6"
            style="
                width:100%;
                box-sizing:border-box;
                padding:13px;
                margin:7px 0 20px;
                border:1px solid #ddd;
                border-radius:10px;
                font-size:14px;
            "
        >


        <button
            id="continueToWhatsApp"
            style="
                width:100%;
                padding:15px;
                border:none;
                border-radius:13px;
                background:#111;
                color:#fff;
                font-size:14px;
                font-weight:700;
                cursor:pointer;
            "
        >
            Continue to WhatsApp
        </button>

    `;


    formOverlay.appendChild(formBox);

    document.body.appendChild(formOverlay);


    // =========================
    // CLOSE FORM
    // =========================

    document
        .getElementById("closeCustomerForm")
        .addEventListener("click", () => {

            formOverlay.remove();

        });


    // =========================
    // CONTINUE TO WHATSAPP
    // =========================

    document
        .getElementById("continueToWhatsApp")
        .addEventListener("click", () => {

            const name =
                document.getElementById("customerName").value.trim();

            const mobile =
                document.getElementById("customerMobile").value.trim();

            const whatsapp =
                document.getElementById("customerWhatsapp").value.trim();

            const address =
                document.getElementById("customerAddress").value.trim();

            const city =
                document.getElementById("customerCity").value.trim();

            const state =
                document.getElementById("customerState").value.trim();

            const pincode =
                document.getElementById("customerPincode").value.trim();


            if (
                !name ||
                !mobile ||
                !whatsapp ||
                !address ||
                !city ||
                !state ||
                !pincode
            ) {

                alert("Please fill all details.");

                return;
            }


            // =========================
// SAVE CART ORDER TO MY ORDERS
// =========================

saveVihanOrder(cart, {
    name: name,
    mobile: mobile,
    whatsapp: whatsapp,
    address: address,
    city: city,
    state: state,
    pincode: pincode
});

localStorage.removeItem("vihanCart");
updateCartCount();

// Clear cart after order
localStorage.removeItem("vihanCart");
updateCartCount();

            // =========================
            // CREATE ORDER MESSAGE
            // =========================

            let message =
                `Hello Vihan,

I want to place an order.

CUSTOMER DETAILS
Name: ${name}
Mobile: ${mobile}
WhatsApp: ${whatsapp}
Address: ${address}
City: ${city}
State: ${state}
Pincode: ${pincode}

ORDER DETAILS
`;


            let total = 0;


            cart.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;

                total += itemTotal;


                message += `

${index + 1}. ${item.name}
Code: ${item.code}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ₹${itemTotal.toLocaleString("en-IN")}
`;
            });


            message += `

TOTAL: ₹${total.toLocaleString("en-IN")}

Please confirm my order.`;


            // =========================
            // YOUR WHATSAPP NUMBER
            // =========================

            const whatsappNumber =
                "919730703944";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        });

});

// =========================
// CUSTOMER FORM FUNCTION
// =========================

function openCustomerDetailsForm(orderItems) {

    const existingForm =
        document.getElementById("customerDetailsOverlay");

    if (existingForm) {
        existingForm.remove();
    }


    const formOverlay =
        document.createElement("div");

    formOverlay.id = "customerDetailsOverlay";

    formOverlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.55);
        z-index:100000;
        display:flex;
        justify-content:center;
        align-items:flex-end;
    `;


    const formBox =
        document.createElement("div");

    formBox.style.cssText = `
        width:100%;
        max-width:390px;
        max-height:92vh;
        overflow-y:auto;
        background:#fff;
        border-radius:22px 22px 0 0;
        padding:22px;
        box-sizing:border-box;
    `;


    formBox.innerHTML = `

        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:20px;
        ">

            <h2 style="
                margin:0;
                font-size:22px;
            ">
                Your Details
            </h2>

            <button
                id="closeCustomerForm"
                style="
                    width:36px;
                    height:36px;
                    border:none;
                    border-radius:50%;
                    background:#f3f3f3;
                    font-size:20px;
                "
            >
                ×
            </button>

        </div>


        <label>Full Name</label>

        <input
            id="customerName"
            type="text"
            placeholder="Enter your full name"
            class="customer-input"
        >


        <label>Mobile Number</label>

        <input
            id="customerMobile"
            type="tel"
            placeholder="Enter mobile number"
            maxlength="10"
            class="customer-input"
        >


        <label>WhatsApp Number</label>

        <input
            id="customerWhatsapp"
            type="tel"
            placeholder="Enter WhatsApp number"
            maxlength="10"
            class="customer-input"
        >


        <label>Full Address</label>

        <textarea
            id="customerAddress"
            placeholder="House / Street / Area"
            rows="3"
            class="customer-input"
        ></textarea>


        <label>City</label>

        <input
            id="customerCity"
            type="text"
            placeholder="Enter city"
            class="customer-input"
        >


        <label>State</label>

        <input
            id="customerState"
            type="text"
            placeholder="Enter state"
            class="customer-input"
        >


        <label>Pincode</label>

        <input
            id="customerPincode"
            type="tel"
            placeholder="Enter pincode"
            maxlength="6"
            class="customer-input"
        >


        <button
            id="continueBuyNowWhatsApp"
            style="
                width:100%;
                margin-top:10px;
                padding:15px;
                border:none;
                border-radius:13px;
                background:#111;
                color:#fff;
                font-size:14px;
                font-weight:700;
            "
        >
            Continue to WhatsApp
        </button>

    `;


    formOverlay.appendChild(formBox);

    document.body.appendChild(formOverlay);


    // CLOSE

    document
        .getElementById("closeCustomerForm")
        .addEventListener("click", () => {

            formOverlay.remove();

        });


    // WHATSAPP

    document
        .getElementById("continueBuyNowWhatsApp")
        .addEventListener("click", () => {

            const name =
                document.getElementById("customerName").value.trim();

            const mobile =
                document.getElementById("customerMobile").value.trim();

            const whatsapp =
                document.getElementById("customerWhatsapp").value.trim();

            const address =
                document.getElementById("customerAddress").value.trim();

            const city =
                document.getElementById("customerCity").value.trim();

            const state =
                document.getElementById("customerState").value.trim();

            const pincode =
                document.getElementById("customerPincode").value.trim();


            if (
                !name ||
                !mobile ||
                !whatsapp ||
                !address ||
                !city ||
                !state ||
                !pincode
            ) {

                alert("Please fill all details.");

                return;

            }


            // =========================
// SAVE BUY NOW ORDER
// =========================

saveVihanOrder(
    orderItems,
    {
        name: name,
        mobile: mobile,
        whatsapp: whatsapp,
        address: address,
        city: city,
        state: state,
        pincode: pincode
    }
);
            let message = `Hello Vihan,

I want to place an order.

CUSTOMER DETAILS
Name: ${name}
Mobile: ${mobile}
WhatsApp: ${whatsapp}
Address: ${address}
City: ${city}
State: ${state}
Pincode: ${pincode}

ORDER DETAILS
`;


            let total = 0;


            orderItems.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;

                total += itemTotal;


                message += `

${index + 1}. ${item.name}
Code: ${item.code}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ₹${itemTotal.toLocaleString("en-IN")}
`;

            });


            message += `

TOTAL: ₹${total.toLocaleString("en-IN")}

Please confirm my order.`;


            const whatsappNumber =
                "919730703944";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        });

}

// =========================
// MY ORDERS BUTTON
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    // Avoid duplicate button
    if (document.getElementById("myOrdersBtn")) return;

    const myOrdersBtn = document.createElement("button");

    myOrdersBtn.id = "myOrdersBtn";

    myOrdersBtn.innerHTML = `
        📦 <span>My Orders</span>
    `;

    myOrdersBtn.style.cssText = `
        border:none;
        background:#f5f5f5;
        color:#111;
        padding:9px 12px;
        border-radius:10px;
        font-size:12px;
        font-weight:600;
        cursor:pointer;
        margin-left:8px;
    `;

    header.appendChild(myOrdersBtn);


    myOrdersBtn.addEventListener("click", function () {

    openMyOrders();

});

});

// =========================
// SAVE ORDER TO MY ORDERS
// =========================

function saveVihanOrder(orderItems, customerDetails) {

    const oldOrders =
        JSON.parse(localStorage.getItem("vihanOrders")) || [];

    const orderId =
        "VH" +
        Date.now().toString().slice(-8);

    const order = {

        orderId: orderId,

        date: new Date().toLocaleString("en-IN"),

        customer: {
            name: customerDetails.name,
            mobile: customerDetails.mobile,
            whatsapp: customerDetails.whatsapp,
            address: customerDetails.address,
            city: customerDetails.city,
            state: customerDetails.state,
            pincode: customerDetails.pincode
        },

        products: orderItems.map(item => ({

            name: item.name,
            code: item.code,
            size: item.size,
            quantity: item.quantity,
            price: item.price

        })),

        total: orderItems.reduce(
            (sum, item) =>
                sum + (item.price * item.quantity),
            0
        ),

        status: "Order Placed"

    };


    oldOrders.unshift(order);

    localStorage.setItem(
        "vihanOrders",
        JSON.stringify(oldOrders)
    );

}

// =========================
// MY ORDERS DISPLAY
// =========================

function openMyOrders() {

    const oldOrders =
        JSON.parse(localStorage.getItem("vihanOrders")) || [];


    const overlay =
        document.createElement("div");

    overlay.id = "myOrdersOverlay";

    overlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.55);
        z-index:100000;
        display:flex;
        justify-content:center;
        align-items:flex-end;
    `;


    const box =
        document.createElement("div");

    box.style.cssText = `
        width:100%;
        max-width:390px;
        height:90vh;
        overflow-y:auto;
        background:#fff;
        border-radius:22px 22px 0 0;
        padding:22px;
        box-sizing:border-box;
    `;


    let ordersHTML = "";


    if (oldOrders.length === 0) {

        ordersHTML = `
            <div style="
                text-align:center;
                padding:70px 20px;
                color:#777;
            ">
                <div style="
                    font-size:42px;
                    margin-bottom:12px;
                ">
                    📦
                </div>

                <h3 style="
                    margin:0 0 8px;
                    color:#111;
                ">
                    No Orders Yet
                </h3>

                <p style="
                    margin:0;
                    font-size:13px;
                ">
                    Your placed orders will appear here.
                </p>
            </div>
        `;

    } else {

        ordersHTML = oldOrders.map(order => {

            const productsHTML =
                order.products.map(product => {

                    return `
                        <div style="
                            padding:12px 0;
                            border-bottom:1px solid #eee;
                        ">

                            <div style="
                                font-size:14px;
                                font-weight:700;
                                color:#111;
                            ">
                                ${product.name}
                            </div>

                            <div style="
                                font-size:11px;
                                color:#777;
                                margin-top:4px;
                            ">
                                Code: ${product.code}
                            </div>

                            <div style="
                                font-size:12px;
                                color:#555;
                                margin-top:5px;
                            ">
                                Size: ${product.size}
                                &nbsp; • &nbsp;
                                Qty: ${product.quantity}
                            </div>

                            <div style="
                                font-size:14px;
                                font-weight:700;
                                margin-top:6px;
                            ">
                                ₹${(
                                    product.price *
                                    product.quantity
                                ).toLocaleString("en-IN")}
                            </div>

                        </div>
                    `;

                }).join("");


            return `
                <div style="
                    border:1px solid #e5e5e5;
                    border-radius:16px;
                    padding:16px;
                    margin-bottom:15px;
                    background:#fff;
                ">

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        gap:10px;
                    ">

                        <div>

                            <div style="
                                font-size:14px;
                                font-weight:700;
                                color:#111;
                            ">
                                Order #${order.orderId}
                            </div>

                            <div style="
                                font-size:11px;
                                color:#888;
                                margin-top:4px;
                            ">
                                ${order.date}
                            </div>

                        </div>


                        <div style="
                            color:#16803c;
                            font-size:11px;
                            font-weight:700;
                            white-space:nowrap;
                        ">
                            ✓ ${order.status}
                        </div>

                    </div>


                    <div style="
                        margin-top:12px;
                    ">
                        ${productsHTML}
                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        margin-top:14px;
                        padding-top:10px;
                        border-top:1px solid #eee;
                    ">

                        <strong>
                            Total
                        </strong>

                        <strong>
                            ₹${order.total.toLocaleString("en-IN")}
                        </strong>

                    </div>

                </div>
            `;

        }).join("");

    }


    box.innerHTML = `

        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:20px;
        ">

            <h2 style="
                margin:0;
                font-size:22px;
                color:#111;
            ">
                My Orders
            </h2>


            <button
                id="closeMyOrders"
                style="
                    width:36px;
                    height:36px;
                    border:none;
                    border-radius:50%;
                    background:#f3f3f3;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ×
            </button>

        </div>


        ${ordersHTML}

    `;


    overlay.appendChild(box);

    document.body.appendChild(overlay);


    document
        .getElementById("closeMyOrders")
        .addEventListener("click", function () {

            overlay.remove();

        });

}

/* Automatic Reviews Slider */

document.addEventListener("DOMContentLoaded", () => {

    const reviewCards = document.querySelectorAll(".review-card");

    if (reviewCards.length <= 1) return;

    let currentReview = 0;

    reviewCards.forEach((card, index) => {
        card.style.display = index === 0 ? "block" : "none";
        card.style.opacity = index === 0 ? "1" : "0";
    });

    setInterval(() => {

        const currentCard = reviewCards[currentReview];

        currentCard.style.opacity = "0";

        setTimeout(() => {

            currentCard.style.display = "none";

            currentReview++;

            if (currentReview >= reviewCards.length) {
                currentReview = 0;
            }

            const nextCard = reviewCards[currentReview];

            nextCard.style.display = "block";

            setTimeout(() => {
                nextCard.style.opacity = "1";
            }, 50);

        }, 500);

    }, 4000);

});

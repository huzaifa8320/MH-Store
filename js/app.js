// Loader 
var main = document.getElementById(`main`)
var loader_div = document.getElementById(`loader_div`)
main.style.display = "none"

setTimeout(() => {
  main.style.display = `block`
  loader_div.style.display = `none`
}, 3000);
// Loader end 

// Api 
var details = {
  "products": [
    {
      "id": 123,
      "title": "iPhone 13 Pro",
      "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
      "category": "smartphones",
      "price": 1099.99,
      "discountPercentage": 18.3,
      "rating": 3.42,
      "stock": 26,
      "tags": [
        "smartphones",
        "apple"
      ],
      "brand": "Apple",
      "sku": "YGQKHPGK",
      "weight": 8,
      "dimensions": {
        "width": 22.39,
        "height": 9.77,
        "depth": 19.6
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Aria Roberts",
          "reviewerEmail": "aria.roberts@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Ryan Graham",
          "reviewerEmail": "ryan.graham@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Mason Wright",
          "reviewerEmail": "mason.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "2986724589988",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
    },
    {
      "id": 121,
      "title": "iPhone 5s",
      "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
      "category": "smartphones",
      "price": 199.99,
      "discountPercentage": 11.85,
      "rating": 3.92,
      "stock": 65,
      "tags": [
        "smartphones",
        "apple"
      ],
      "brand": "Apple",
      "sku": "AZ1L68SM",
      "weight": 4,
      "dimensions": {
        "width": 8.49,
        "height": 25.34,
        "depth": 18.12
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Wyatt Perry",
          "reviewerEmail": "wyatt.perry@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Olivia Anderson",
          "reviewerEmail": "olivia.anderson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Mateo Nguyen",
          "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "2903942810911",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
    },
    {
      "id": 101,
      "title": "Apple AirPods Max Silver",
      "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
      "category": "mobile-accessories",
      "price": 549.99,
      "discountPercentage": 11.7,
      "rating": 3.11,
      "stock": 7,
      "tags": [
        "electronics",
        "over-ear headphones"
      ],
      "brand": "Apple",
      "sku": "HPK82VDE",
      "weight": 4,
      "dimensions": {
        "width": 7.73,
        "height": 18.36,
        "depth": 17.87
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Harper Kelly",
          "reviewerEmail": "harper.kelly@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Abigail Rivera",
          "reviewerEmail": "abigail.rivera@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "9261269777547",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
    },
    {
      "id": 104,
      "title": "Apple iPhone Charger",
      "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
      "category": "mobile-accessories",
      "price": 19.99,
      "discountPercentage": 1.01,
      "rating": 3.03,
      "stock": 4,
      "tags": [
        "electronics",
        "chargers"
      ],
      "brand": "Apple",
      "sku": "YAA6EHI7",
      "weight": 5,
      "dimensions": {
        "width": 28.77,
        "height": 25.05,
        "depth": 29.55
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Emily Johnson",
          "reviewerEmail": "emily.johnson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Charlotte Lopez",
          "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Cameron Perez",
          "reviewerEmail": "cameron.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 43,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "9483427398580",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png"
    },
    {
      "id": 105,
      "title": "Apple MagSafe Battery Pack",
      "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
      "category": "mobile-accessories",
      "price": 99.99,
      "discountPercentage": 10.27,
      "rating": 2.61,
      "stock": 80,
      "tags": [
        "electronics",
        "power banks"
      ],
      "brand": "Apple",
      "sku": "XNFJURL7",
      "weight": 6,
      "dimensions": {
        "width": 21.61,
        "height": 7.98,
        "depth": 9.32
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Aurora Rodriguez",
          "reviewerEmail": "aurora.rodriguez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Victoria McDonald",
          "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 4,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "1850091228580",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png"
    },
    {
      "id": 107,
      "title": "Beats Flex Wireless Earphones",
      "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
      "category": "mobile-accessories",
      "price": 49.99,
      "discountPercentage": 8.27,
      "rating": 4.17,
      "stock": 49,
      "tags": [
        "electronics",
        "wireless earphones"
      ],
      "brand": "Beats",
      "sku": "7N15J2UK",
      "weight": 6,
      "dimensions": {
        "width": 23.49,
        "height": 15.22,
        "depth": 20.05
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Hannah Robinson",
          "reviewerEmail": "hannah.robinson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Grace Perry",
          "reviewerEmail": "grace.perry@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Grayson Coleman",
          "reviewerEmail": "grayson.coleman@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 19,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "4068884711976",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png"
    },
    {
      "id": 108,
      "title": "iPhone 12 Silicone Case with MagSafe Plum",
      "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
      "category": "mobile-accessories",
      "price": 29.99,
      "discountPercentage": 14.35,
      "rating": 4.41,
      "stock": 51,
      "tags": [
        "electronics",
        "phone accessories"
      ],
      "brand": "Apple",
      "sku": "3UHE8VLA",
      "weight": 5,
      "dimensions": {
        "width": 6.32,
        "height": 23.37,
        "depth": 21.62
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Isaac Lawrence",
          "reviewerEmail": "isaac.lawrence@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Emily Johnson",
          "reviewerEmail": "emily.johnson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 19,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "4106912332105",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
    },
    {
      "id": 110,
      "title": "Selfie Lamp with iPhone",
      "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
      "category": "mobile-accessories",
      "price": 14.99,
      "discountPercentage": 13.86,
      "rating": 2.84,
      "stock": 89,
      "tags": [
        "electronics",
        "selfie accessories"
      ],
      "brand": "GadgetMaster",
      "sku": "2VZ1ZNMO",
      "weight": 7,
      "dimensions": {
        "width": 13.38,
        "height": 26.33,
        "depth": 22.71
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Hannah Howard",
          "reviewerEmail": "hannah.howard@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Amelia Perez",
          "reviewerEmail": "amelia.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 4,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "6205123036707",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png"
    },
    {
      "id": 111,
      "title": "Selfie Stick Monopod",
      "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
      "category": "mobile-accessories",
      "price": 12.99,
      "discountPercentage": 15.29,
      "rating": 2.93,
      "stock": 33,
      "tags": [
        "electronics",
        "selfie accessories"
      ],
      "brand": "SnapTech",
      "sku": "9T6WSF1E",
      "weight": 7,
      "dimensions": {
        "width": 6.11,
        "height": 27.92,
        "depth": 23.63
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Aaron Cook",
          "reviewerEmail": "aaron.cook@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Emma Wilson",
          "reviewerEmail": "emma.wilson@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Mia Miller",
          "reviewerEmail": "mia.miller@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "2854098561118",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png"
    },
    {
      "id": 122,
      "title": "iPhone 6",
      "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
      "category": "smartphones",
      "price": 299.99,
      "discountPercentage": 4.54,
      "rating": 3.76,
      "stock": 99,
      "tags": [
        "smartphones",
        "apple"
      ],
      "brand": "Apple",
      "sku": "ZPXH3X9J",
      "weight": 8,
      "dimensions": {
        "width": 16.21,
        "height": 22.94,
        "depth": 5.63
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Nicholas Bailey",
          "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Gavin Stanley",
          "reviewerEmail": "gavin.stanley@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 3,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "2517230562429",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
    },
    {
      "id": 124,
      "title": "iPhone X",
      "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
      "category": "smartphones",
      "price": 899.99,
      "discountPercentage": 14.19,
      "rating": 4.96,
      "stock": 99,
      "tags": [
        "smartphones",
        "apple"
      ],
      "brand": "Apple",
      "sku": "9QN3UDUD",
      "weight": 10,
      "dimensions": {
        "width": 27.86,
        "height": 8.53,
        "depth": 17.07
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Eleanor Tyler",
          "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "4331405454760",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
    },
    {
      "id": 125,
      "title": "Oppo A57",
      "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
      "category": "smartphones",
      "price": 249.99,
      "discountPercentage": 12.17,
      "rating": 3.1,
      "stock": 76,
      "tags": [
        "smartphones",
        "oppo"
      ],
      "brand": "Oppo",
      "sku": "J1NO9ULG",
      "weight": 3,
      "dimensions": {
        "width": 29.52,
        "height": 11.25,
        "depth": 14.41
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Owen Fisher",
          "reviewerEmail": "owen.fisher@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Jack Ward",
          "reviewerEmail": "jack.ward@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Nora Mills",
          "reviewerEmail": "nora.mills@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "1743445108634",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
    },
    {
      "id": 126,
      "title": "Oppo F19 Pro Plus",
      "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
      "category": "smartphones",
      "price": 399.99,
      "discountPercentage": 15.62,
      "rating": 2.57,
      "stock": 92,
      "tags": [
        "smartphones",
        "oppo"
      ],
      "brand": "Oppo",
      "sku": "H2TTGWXB",
      "weight": 2,
      "dimensions": {
        "width": 20.35,
        "height": 16.4,
        "depth": 13.31
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Benjamin Foster",
          "reviewerEmail": "benjamin.foster@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Lillian Bishop",
          "reviewerEmail": "lillian.bishop@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Harper Garcia",
          "reviewerEmail": "harper.garcia@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "7451360954140",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/thumbnail.png"
    },
    {
      "id": 127,
      "title": "Oppo K1",
      "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
      "category": "smartphones",
      "price": 299.99,
      "discountPercentage": 14.58,
      "rating": 3.39,
      "stock": 61,
      "tags": [
        "smartphones",
        "oppo"
      ],
      "brand": "Oppo",
      "sku": "ELZ94HM3",
      "weight": 2,
      "dimensions": {
        "width": 21.83,
        "height": 27.83,
        "depth": 27.47
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Penelope Harper",
          "reviewerEmail": "penelope.harper@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Nathan Reed",
          "reviewerEmail": "nathan.reed@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Madison Stewart",
          "reviewerEmail": "madison.stewart@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "7535531820285",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png"
    },
    {
      "id": 128,
      "title": "Realme C35",
      "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
      "category": "smartphones",
      "price": 149.99,
      "discountPercentage": 16.47,
      "rating": 2.56,
      "stock": 81,
      "tags": [
        "smartphones",
        "realme"
      ],
      "brand": "Realme",
      "sku": "25KENV7J",
      "weight": 6,
      "dimensions": {
        "width": 21.74,
        "height": 28.75,
        "depth": 22.22
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Ava Harrison",
          "reviewerEmail": "ava.harrison@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Grace Perry",
          "reviewerEmail": "grace.perry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "3119744926904",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png"
    },
    {
      "id": 129,
      "title": "Realme X",
      "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
      "category": "smartphones",
      "price": 299.99,
      "discountPercentage": 2.39,
      "rating": 4.42,
      "stock": 87,
      "tags": [
        "smartphones",
        "realme"
      ],
      "brand": "Realme",
      "sku": "5E11C5C4",
      "weight": 1,
      "dimensions": {
        "width": 29.32,
        "height": 16.3,
        "depth": 24.12
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Benjamin Foster",
          "reviewerEmail": "benjamin.foster@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Emily Johnson",
          "reviewerEmail": "emily.johnson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "0139612574728",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png"
    },
    {
      "id": 130,
      "title": "Realme XT",
      "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
      "category": "smartphones",
      "price": 349.99,
      "discountPercentage": 3.03,
      "rating": 4.14,
      "stock": 53,
      "tags": [
        "smartphones",
        "realme"
      ],
      "brand": "Realme",
      "sku": "GHDMRAP2",
      "weight": 4,
      "dimensions": {
        "width": 28.82,
        "height": 23.44,
        "depth": 6.21
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Hannah Howard",
          "reviewerEmail": "hannah.howard@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Claire Foster",
          "reviewerEmail": "claire.foster@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "3985844484131",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png"
    },
    {
      "id": 131,
      "title": "Samsung Galaxy S7",
      "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
      "category": "smartphones",
      "price": 299.99,
      "discountPercentage": 8.83,
      "rating": 4.9,
      "stock": 55,
      "tags": [
        "smartphones",
        "samsung galaxy"
      ],
      "brand": "Samsung",
      "sku": "VZF4Z58Z",
      "weight": 8,
      "dimensions": {
        "width": 23.33,
        "height": 27.33,
        "depth": 27.02
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Jace Smith",
          "reviewerEmail": "jace.smith@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Ruby Andrews",
          "reviewerEmail": "ruby.andrews@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Aria Roberts",
          "reviewerEmail": "aria.roberts@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "8841359359362",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png"
    },
    {
      "id": 132,
      "title": "Samsung Galaxy S8",
      "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
      "category": "smartphones",
      "price": 499.99,
      "discountPercentage": 2.69,
      "rating": 3.69,
      "stock": 75,
      "tags": [
        "smartphones",
        "samsung galaxy"
      ],
      "brand": "Samsung",
      "sku": "GLXQQKBF",
      "weight": 6,
      "dimensions": {
        "width": 6.88,
        "height": 8.96,
        "depth": 18.13
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Christopher West",
          "reviewerEmail": "christopher.west@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Hazel Evans",
          "reviewerEmail": "hazel.evans@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Luna Russell",
          "reviewerEmail": "luna.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "1337599403784",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png"
    },
    {
      "id": 133,
      "title": "Samsung Galaxy S10",
      "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
      "category": "smartphones",
      "price": 699.99,
      "discountPercentage": 0.97,
      "rating": 2.81,
      "stock": 40,
      "tags": [
        "smartphones",
        "samsung galaxy"
      ],
      "brand": "Samsung",
      "sku": "5GJFL98I",
      "weight": 3,
      "dimensions": {
        "width": 28.23,
        "height": 7.35,
        "depth": 10.68
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Grace Perry",
          "reviewerEmail": "grace.perry@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Elijah Hill",
          "reviewerEmail": "elijah.hill@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Eleanor Tyler",
          "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "0311929399881",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png"
    },
    {
      "id": 134,
      "title": "Vivo S1",
      "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
      "category": "smartphones",
      "price": 249.99,
      "discountPercentage": 4.25,
      "rating": 2.83,
      "stock": 13,
      "tags": [
        "smartphones",
        "vivo"
      ],
      "brand": "Vivo",
      "sku": "BG6974E7",
      "weight": 1,
      "dimensions": {
        "width": 28.83,
        "height": 26.69,
        "depth": 23.12
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Alice Smith",
          "reviewerEmail": "alice.smith@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Harper Kelly",
          "reviewerEmail": "harper.kelly@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Lillian Simmons",
          "reviewerEmail": "lillian.simmons@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 3,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "4070349673041",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png"
    },
    {
      "id": 135,
      "title": "Vivo V9",
      "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
      "category": "smartphones",
      "price": 299.99,
      "discountPercentage": 14.57,
      "rating": 3.1,
      "stock": 19,
      "tags": [
        "smartphones",
        "vivo"
      ],
      "brand": "Vivo",
      "sku": "N9WFE2WH",
      "weight": 5,
      "dimensions": {
        "width": 27.29,
        "height": 9.73,
        "depth": 14.79
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Elijah Stewart",
          "reviewerEmail": "elijah.stewart@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Aria Roberts",
          "reviewerEmail": "aria.roberts@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Hannah Howard",
          "reviewerEmail": "hannah.howard@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "1506104702332",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png"
    },
    {
      "id": 136,
      "title": "Vivo X21",
      "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
      "category": "smartphones",
      "price": 499.99,
      "discountPercentage": 7.32,
      "rating": 2.75,
      "stock": 0,
      "tags": [
        "smartphones",
        "vivo"
      ],
      "brand": "Vivo",
      "sku": "KSF00BOC",
      "weight": 7,
      "dimensions": {
        "width": 5.72,
        "height": 16.47,
        "depth": 27.76
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "Out of Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Logan Lee",
          "reviewerEmail": "logan.lee@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.625Z",
          "reviewerName": "Bella Grant",
          "reviewerEmail": "bella.grant@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 4,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.625Z",
        "updatedAt": "2024-05-23T08:56:21.625Z",
        "barcode": "2543504494043",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png"
    }
  ],
  "total": 23,
  "skip": 0,
  "limit": 23
}
// Api end 

// Variables 
var category = document.getElementsByClassName(`category`)
var card = document.getElementById(`card`)
var category_main = document.getElementById(`category_main`)
// Variables end 

// Api show 
card.innerHTML = ""
for (let i = 0; i < details.products.length; i++) {
  card.innerHTML += `
       <div class="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mb-4 mt-5">
          <div class="div1 find">
              <div class="img d-flex justify-content-center py-2">
                 <img src="${details.products[i].images[0]}" alt="" class="img1 py-2">
              </div>
              <div class="p-3">
                  <p class="fw-medium fs-5 mt-2 title">${details.products[i].title.slice(0, 20)}....</p>
                  <p class="description">${details.products[i].description.slice(0, 25)}....</p>
                  <p class="price">Price : $${details.products[i].price}</p>
                  <p class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> (${details.products[i].rating})</p>
              </div>
          </div>
       </div>
       `
  find()
}

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener(`click`, function () {
    var new1 = category[i].innerHTML;
    category_main.innerText = new1
    card.innerHTML = ""
    if (new1 == `All Category`) {
      for (let i = 0; i < details.products.length; i++) {
        card.innerHTML += `
       <div class="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mb-4 mt-5">
          <div class="div1 find">
              <div class="img d-flex justify-content-center py-2">
                 <img src="${details.products[i].images[0]}" alt="" class="img1 py-2">
              </div>
              <div class="p-3">
                  <p class="fw-medium fs-5 mt-2 title">${details.products[i].title.slice(0, 20)}....</p>
                  <p class="description">${details.products[i].description.slice(0, 25)}....</p>
                  <p class="price">Price : $${details.products[i].price}</p>
                  <p class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> (${details.products[i].rating})</p>
              </div>
          </div>
       </div>
       `
        find()
      }
    }

    else if (new1 == `Mobile - Accessories`) {
      for (let i = 0; i < details.products.length; i++) {
        if (details.products[i].category == `mobile-accessories`) {
          card.innerHTML += `
          <div class="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mb-4 mt-5">
          <div class="div1 find">
              <div class="img d-flex justify-content-center py-2">
                 <img src="${details.products[i].images[0]}" alt="" class="img1 py-2">
              </div>
              <div class="p-3">
                  <p class="fw-medium fs-5 mt-2 title">${details.products[i].title.slice(0, 20)}....</p>
                  <p class="description">${details.products[i].description.slice(0, 25)}....</p>
                  <p class="price">Price : $${details.products[i].price}</p>
                  <p class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> (${details.products[i].rating})</p>
              </div>
          </div>
       </div>
          `
          find()
        }

      }
    }

    else if (new1 == `Smartphones`) {
      for (let i = 0; i < details.products.length; i++) {
        if (details.products[i].category == `smartphones`) {
          card.innerHTML += `
          <div class="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mb-4 mt-5">
          <div class="div1 find">
              <div class="img d-flex justify-content-center py-2">
                 <img src="${details.products[i].images[0]}" alt="" class="img1 py-2">
              </div>
              <div class="p-3">
                  <p class="fw-medium fs-5 mt-2 title">${details.products[i].title.slice(0, 20)}....</p>
                  <p class="description">${details.products[i].description.slice(0, 25)}....</p>
                  <p class="price">Price : $${details.products[i].price}</p>
                  <p class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> (${details.products[i].rating})</p>
              </div>
          </div>
       </div>
          `
          find()
        }
      }
    }
    window.scrollTo(0, 0);
  })
}
// Api show end 

// Set localStorage for next page 
function find() {
  var find = card.getElementsByClassName(`find`)
  var cart = []
  for (let i = 0; i < find.length; i++) {
    find[i].addEventListener(`click`, function () {
      var img = this.getElementsByClassName(`img`)[0].querySelector(`img`).src
      var title = this.getElementsByClassName(`title`)[0].innerText.slice(0, -4)
      var description = this.getElementsByClassName(`description`)[0].innerText.slice(0, -4)
      var price = this.getElementsByClassName(`price`)[0].innerText.slice(9)
      for (let i = 0; i < details.products.length; i++) {
        if (img == details.products[i].images[0] &&
          details.products[i].title.includes(title) &&
          details.products[i].description.includes(description)) {
          localStorage.removeItem('cart_details')
          cart.push(details.products[i])
          // console.log(cart);
          localStorage.setItem(`cart_details`, JSON.stringify(cart))
          window.location.href = `pages/cart.html`
        }
      }
    })
  }
}
// Set localStorage for next page  end 

var log_out = document.getElementById(`log_out`)
var u_name = JSON.parse(localStorage.getItem(`u_name`))
if (u_name) {
  var real_name = JSON.parse(localStorage.getItem(u_name)).username
  console.log(real_name);
  log_out.innerHTML = `Hello 👋 ${real_name.slice(0, 1).toUpperCase()}${real_name.slice(1)}`
}

if (log_out.innerHTML != `𝓛𝓸𝓰𝓲𝓷`) {
  log_out.addEventListener(`mouseover`, function () {
    log_out.innerHTML = `𝓛𝓸𝓰 𝓞𝓾𝓽`
  })
  log_out.addEventListener(`mouseout`, function () {
    log_out.innerHTML = `Hello 👋 ${real_name.slice(0, 1).toUpperCase()}${real_name.slice(1)}`
  })
  log_out.addEventListener(`click`, function () {
    Swal.fire({
      title: "Are you sure you want to log Out ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(`u_name`)
        window.location.href = `pages/login.html`
      }
    });
  })
}
else {
  log_out.addEventListener(`click`, function () {
    window.location.href = `pages/login.html`
  })
}
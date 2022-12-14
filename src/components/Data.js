import h1 from '../img/h1.png';
import h2 from '../img/h2.png';
import h3 from '../img/h3.png';
import h4 from '../img/h4.png';
import h5 from '../img/h5.png';
import h6 from '../img/h6.png';

import combo1 from '../img/combo1.png';
import combo2 from '../img/combo2.png';
import combo3 from '../img/combo3.png';
import combo4 from '../img/combo4.png';
import combo5 from '../img/combo5.png';
import combo6 from '../img/combo6.png';
import combo7 from '../img/combo7.png';
import combo8 from '../img/combo8.png';

import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import p5 from '../img/p5.png';
import p6 from '../img/p6.png';
import p7 from '../img/p7.png';
import p8 from '../img/p8.png';


import pan1 from '../img/pan1.png';
import pan2 from '../img/pan2.png';
import pan3 from '../img/pan3.png';
import pan4 from '../img/pan4.png';
import pan5 from '../img/pan5.png';

import ta1 from '../img/ta1.png';
import ta2 from '../img/ta2.png';
import ta3 from '../img/ta3.png';
import ta4 from '../img/ta4.png';
import ta5 from '../img/ta5.png';

import pocho from '../img/snac/pochoclo.png';
import bana from '../img/snac/banana.png';
import chetos from '../img/snac/chetos.png';
import chicha from '../img/snac/chicarron.png';
import nacho from '../img/snac/nacgos.png';
import palomita from '../img/snac/palomitas.png';
import papas from '../img/snac/papas.png';
import pollo from '../img/snac/pollo.png';

import coca from '../img/drinks/coca.png';
import cocagrande from '../img/drinks/cocagrande.png';
import monster from '../img/drinks/monster.png';
import redbull from '../img/drinks/redbull.png';
import soft from '../img/drinks/soft.png';
import sprite from '../img/drinks/sprite.png';
import spritelata from '../img/drinks/spritelata.png';
import tropical from '../img/drinks/tropical.png';
import blue from '../img/drinks/blue.png';

const MenuItems = [
    {
        id: 1,
        itemId: "buger01",
        name: "Burgers",
        imgSrc: h1
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
    },
    {
        id: 2,
        itemId: "pizza01",
        name: "Pizzas",
        imgSrc: h2
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483",
    },
    {
        id: 3,
        itemId: "hotdog01",
        name: "Hotdogs",
        imgSrc: h3
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
    },
    {
        id: 4,
        itemId: "taco01",
        name: "Tacos",
        imgSrc: h4
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
    },
    {
        id: 5,
        itemId: "snack01",
        name: "Snacks",
        imgSrc: h5
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
    },
    {
        id: 6,
        itemId: "drink01",
        name: "Tragos",
        imgSrc: h6
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
    },
];

const Items = [
    {
        id: 1,
        itemId: "buger01",
        imgSrc: combo1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0",
        name: "Combo Mac 1",
        ratings: 5,
        price: "299.90",
    },
    {
        id: 2,
        itemId: "buger01",
        imgSrc: combo2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2",
        name: "Combo Super Mac",
        ratings: 5,
        price: "400.00",
    },
    {
        id: 3,
        itemId: "buger01",
        imgSrc: combo3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
        name: "Bic Mac",
        ratings: 5,
        price: "250.50",
    },
    {
        id: 4,
        itemId: "buger01",
        imgSrc: combo4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger4.png?alt=media&token=f219c72c-22b5-484a-9135-34bbb84e7faa",
        name: "Triple con Queso",
        ratings: 5,
        price: "197.90",
    },
    {
        id: 5,
        itemId: "buger01",
        imgSrc: combo5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger5.png?alt=media&token=e8963c79-af46-4f33-a28d-059f98f464e3",
        name: "Triple Mac",
        ratings: 5,
        price: "220.90",
    },
    {
        id: 6,
        itemId: "buger01",
        imgSrc: combo6,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger6.png?alt=media&token=f2b8febd-f0f8-48d7-9e1a-72d26b7bb36b",
        name: "Doble Cuarto de Libra",
        ratings: 5,
        price: "250.90",
    },
    {
        id: 7,
        itemId: "pizza01",
        imgSrc: p1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
        name: "Calabresa",
        ratings: 5,
        price: "1250.90",
    },
    {
        id: 8,
        itemId: "pizza01",
        imgSrc: p2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
        name: "Palmitos",
        ratings: 5,
        price: "890.90",
    },
    {
        id: 9,
        itemId: "pizza01",
        imgSrc: p3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
        name: "Explosiva",
        ratings: 5,
        price: "1799.90",
    },
    {
        id: 10,
        itemId: "pizza01",
        imgSrc: p4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
        name: "Portuguesa",
        ratings: 4,
        price: "1112.00",
    },
    {
        id: 11,
        itemId: "pizza01",
        imgSrc: p5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
        name: "Vegana",
        ratings: 4,
        price: "1220.50",
    },
    {
        id: 12,
        itemId: "pizza01",
        imgSrc: p6,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
        name: "Muzzarella",
        ratings: 4,
        price: "1000.00",
    },
    {
        id: 13,
        itemId: "hotdog01",
        imgSrc: pan1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
        name: "Super Pancho",
        ratings: 4,
        price: "140.00",
    },
    {
        id: 14,
        itemId: "hotdog01",
        imgSrc: pan2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
        name: "Hiper Pancho",
        ratings: 4,
        price: "160.00",
    },
    {
        id: 15,
        itemId: "hotdog01",
        imgSrc: pan3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
        name: "Pancho Simple",
        ratings: 4,
        price: "120.00",
    },
    {
        id: 16,
        itemId: "hotdog01",
        imgSrc: pan4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
        name: "Brochets",
        ratings: 4,
        price: "178.90",
    },
    {
        id: 17,
        itemId: "hotdog01",
        imgSrc: pan5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
        name: "McPancho",
        ratings: 4,
        price: "166.00",
    },
    {
        id: 18,
        itemId: "hotdog01",
        imgSrc: pan1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
        name: "Big Pnacho",
        ratings: 3,
        price: "200.00",
    },
    {
        id: 19,
        itemId: "taco01",
        imgSrc: ta1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
        name: "Taco de Pollo",
        ratings: 3,
        price: "1266.90",
    },
    {
        id: 20,
        itemId: "taco01",
        imgSrc: ta2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
        name: "Taco de Carne",
        ratings: 3,
        price: "210.50",
    },
    {
        id: 21,
        itemId: "taco01",
        imgSrc: ta3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
        name: "Taco de Pescado",
        ratings: 3,
        price: "234.90",
    },
    {
        id: 22,
        itemId: "taco01",
        imgSrc: ta4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
        name: "Taco de Camaron",
        ratings: 3,
        price: "300.00",
    },
    {
        id: 23,
        itemId: "taco01",
        imgSrc: ta5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
        name: "Taco de Chorizo",
        ratings: 3,
        price: "200.00",
    },
    {
        id: 24,
        itemId: "taco01",
        imgSrc: ta1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
        name: "Taco de Chicharron",
        ratings: 3,
        price: "124.80",
    },
    {
        id: 25,
        itemId: "snack01",
        imgSrc: pocho,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
        name: "Pochoclos",
        ratings: 4,
        price: "100.00",
    },
    {
        id: 26,
        itemId: "snack01",
        imgSrc: bana,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack2.png?alt=media&token=55d7fc65-869b-4d8b-83b3-be0158474413",
        name: "Banana Tostada",
        ratings: 4,
        price: "200.00",
    },
    {
        id: 27,
        itemId: "snack01",
        imgSrc: papas,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack3.png?alt=media&token=76b488a6-be44-4a3e-a29e-c34ac17f2e2c",
        name: "Papas Fritas",
        ratings: 4,
        price: "213.00",
    },
    {
        id: 28,
        itemId: "snack01",
        imgSrc: pollo,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack4.png?alt=media&token=1efcd8c0-098b-44a5-8113-da225e7358ce",
        name: "Pollo Frito",
        ratings: 4,
        price: "240.00",
    },
    {
        id: 29,
        itemId: "snack01",
        imgSrc: chicha,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack5.png?alt=media&token=80cece50-38cd-489f-a73f-edd740fba4ab",
        name: "Chicharron",
        ratings: 4,
        price: "90.00",
    },
    {
        id: 30,
        itemId: "snack01",
        imgSrc: chetos,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack6.png?alt=media&token=a36cb2c5-72d1-4364-9817-3a8eb8c244b6",
        name: "Cheetos",
        ratings: 4,
        price: "170.00",
    },
    {
        id: 31,
        itemId: "drink01",
        imgSrc: coca,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
        name: "Coca Cola Chica",
        ratings: 4,
        price: "100.00",
    },
    {
        id: 32,
        itemId: "drink01",
        imgSrc: monster,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6",
        name: "Monster Energy",
        ratings: 4,
        price: "230.00",
    },
    {
        id: 33,
        itemId: "drink01",
        imgSrc: redbull,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink3.png?alt=media&token=c0efdccf-149a-4063-9658-00ae6c7c69dc",
        name: "Red Bull",
        ratings: 4,
        price: "250.90",
    },
    {
        id: 34,
        itemId: "drink01",
        imgSrc: tropical,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink4.png?alt=media&token=eaaa8826-7fc0-499f-9eaf-8369ff99c112",
        name: "Tropical",
        ratings: 4,
        price: "288.00",
    },
    {
        id: 35,
        itemId: "drink01",
        imgSrc: soft,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink5.png?alt=media&token=eecf1eee-73f5-4705-a7ce-9ccc363f4f47",
        name: "Soft Drink",
        ratings: 4,
        price: "90.00",
    },
    {
        id: 36,
        itemId: "drink01",
        imgSrc: spritelata,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae",
        name: "Sprite Lata",
        ratings: 4,
        price: "190.00",
    },

    {
        id: 41,
        itemId: "buger01",
        imgSrc: combo3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0",
        name: "Grand Doble McBacon",
        ratings: 5,
        price: "433.50",
    },
    {
        id: 42,
        itemId: "buger01",
        imgSrc: combo4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2",
        name: "McArgentina",
        ratings: 5,
        price: "500.00",
    },
    {
        id: 43,
        itemId: "buger01",
        imgSrc: combo7,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
        name: "Grand McBacon",
        ratings: 5,
        price: "455.90",
    },
    {
        id: 44,
        itemId: "buger01",
        imgSrc: combo8,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger4.png?alt=media&token=f219c72c-22b5-484a-9135-34bbb84e7faa",
        name: "Grand triple McBacon",
        ratings: 5,
        price: "600.00",
    },
    {
        id: 45,
        itemId: "buger01",
        imgSrc: combo5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger5.png?alt=media&token=e8963c79-af46-4f33-a28d-059f98f464e3",
        name: "Qatar 2022",
        ratings: 5,
        price: "550.90",
    },
    {
        id: 46,
        itemId: "buger01",
        imgSrc: combo6,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger6.png?alt=media&token=f2b8febd-f0f8-48d7-9e1a-72d26b7bb36b",
        name: "McFrancia",
        ratings: 5,
        price: "279.90",
    },
    {
        id: 47,
        itemId: "pizza01",
        imgSrc: p7,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
        name: "Margarita",
        ratings: 5,
        price: "750.90",
    },
    {
        id: 48,
        itemId: "pizza01",
        imgSrc: p8,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
        name: "Napolitana",
        ratings: 5,
        price: "1200.90",
    },
    {
        id: 49,
        itemId: "pizza01",
        imgSrc: p1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
        name: "Hawaiana",
        ratings: 5,
        price: "1199.90",
    },
    {
        id: 50,
        itemId: "pizza01",
        imgSrc: p2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
        name: "Pepperoni",
        ratings: 4,
        price: "999.90",
    },
    {
        id: 51,
        itemId: "pizza01",
        imgSrc: p3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
        name: "4 Quesos",
        ratings: 4,
        price: "1500.50",
    },
    {
        id: 52,
        itemId: "pizza01",
        imgSrc: p3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
        name: "Carbonara",
        ratings: 4,
        price: "1700.99",
    },
    {
        id: 53,
        itemId: "hotdog01",
        imgSrc: pan2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
        name: "Pancho Argento",
        ratings: 4,
        price: "180.00",
    },
    {
        id: 54,
        itemId: "hotdog01",
        imgSrc: pan3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
        name: "Pancho Alem??n",
        ratings: 4,
        price: "220.00",
    },
    {
        id: 55,
        itemId: "hotdog01",
        imgSrc: pan4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
        name: "Pancho Mexicano",
        ratings: 4,
        price: "210.00",
    },
    {
        id: 56,
        itemId: "hotdog01",
        imgSrc: pan5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
        name: "Pancho con Papas",
        ratings: 4,
        price: "300.00",
    },
    {
        id: 57,
        itemId: "hotdog01",
        imgSrc: pan1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
        name: "Panchito",
        ratings: 4,
        price: "100.00",
    },
    {
        id: 58,
        itemId: "hotdog01",
        imgSrc: pan2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
        name: "Panchote",
        ratings: 3,
        price: "245.90",
    },
    {
        id: 59,
        itemId: "taco01",
        imgSrc: ta2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
        name: "Taco Simple",
        ratings: 3,
        price: "75.00",
    },
    {
        id: 60,
        itemId: "taco01",
        imgSrc: ta3,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
        name: "Taco Mexicano",
        ratings: 3,
        price: "120.00",
    },
    {
        id: 61,
        itemId: "taco01",
        imgSrc: ta4,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
        name: "Super Taco",
        ratings: 3,
        price: "210.00",
    },
    {
        id: 62,
        itemId: "taco01",
        imgSrc: ta5,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
        name: "McTaco",
        ratings: 3,
        price: "300.00",
    },
    {
        id: 63,
        itemId: "taco01",
        imgSrc: ta1,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
        name: "Big Taco",
        ratings: 3,
        price: "134.00",
    },
    {
        id: 64,
        itemId: "taco01",
        imgSrc: ta2,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
        name: "Taco de Pastor",
        ratings: 3,
        price: "315.00",
    },
    {
        id: 65,
        itemId: "snack01",
        imgSrc: palomita,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
        name: "Palomitas",
        ratings: 4,
        price: "90.00",
    },
    {
        id: 66,
        itemId: "snack01",
        imgSrc: nacho,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack2.png?alt=media&token=55d7fc65-869b-4d8b-83b3-be0158474413",
        name: "Nachos",
        ratings: 4,
        price: "100.00",
    },
    {
        id: 67,
        itemId: "snack01",
        imgSrc: papas,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack3.png?alt=media&token=76b488a6-be44-4a3e-a29e-c34ac17f2e2c",
        name: "Fritas con Salsa",
        ratings: 4,
        price: "300.00",
    },
    {
        id: 68,
        itemId: "snack01",
        imgSrc: papas,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack4.png?alt=media&token=1efcd8c0-098b-44a5-8113-da225e7358ce",
        name: "Papas Grandes",
        ratings: 4,
        price: "277.90",
    },
    {
        id: 69,
        itemId: "snack01",
        imgSrc: chetos,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack5.png?alt=media&token=80cece50-38cd-489f-a73f-edd740fba4ab",
        name: "Cheetos Grandes",
        ratings: 4,
        price: "199.90",
    },
    {
        id: 70,
        itemId: "snack01",
        imgSrc: papas,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack6.png?alt=media&token=a36cb2c5-72d1-4364-9817-3a8eb8c244b6",
        name: "Papas Fritas",
        ratings: 4,
        price: "290.00",
    },
    {
        id: 71,
        itemId: "drink01",
        imgSrc: cocagrande,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
        name: "Coca Cola Grande",
        ratings: 4,
        price: "160.00",
    },
    {
        id: 72,
        itemId: "drink01",
        imgSrc: monster,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6",
        name: "Monster Grande",
        ratings: 4,
        price: "298.90",
    },
    {
        id: 73,
        itemId: "drink01",
        imgSrc: redbull,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink3.png?alt=media&token=c0efdccf-149a-4063-9658-00ae6c7c69dc",
        name: "Red Bull Chico",
        ratings: 4,
        price: "200.00",
    },
    {
        id: 74,
        itemId: "drink01",
        imgSrc: tropical,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink4.png?alt=media&token=eaaa8826-7fc0-499f-9eaf-8369ff99c112",
        name: "Trago Enigma",
        ratings: 4,
        price: "120.90",
    },
    {
        id: 75,
        itemId: "drink01",
        imgSrc: blue,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink5.png?alt=media&token=eecf1eee-73f5-4705-a7ce-9ccc363f4f47",
        name: "Blue Drink",
        ratings: 4,
        price: "134.50",
    },
    {
        id: 76,
        itemId: "drink01",
        imgSrc: spritelata,
            // "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae",
        name: "Spite Lata Chica",
        ratings: 4,
        price: "130.00",
    },
];

export { MenuItems, Items };
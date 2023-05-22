import {CgMenuGridO} from "react-icons/cg";
import React from "react";
import {ImHome} from "react-icons/im";
import {GrUserWorker} from "react-icons/gr";
import {MdOutlineWorkOutline} from "react-icons/md";
import {TbGardenCart} from "react-icons/tb";
import {HiCollection} from "react-icons/hi";
import {BiDrink, BiMusic} from "react-icons/bi";
import {AiFillCar} from "react-icons/ai";

export const arrItem = [
    {
        id: 1,
        title: 'Toate',
        list: [
            { name: 'Electronica', path: 'electronica' },
            { name: 'Imobil', path: 'imobil' },
            { name: 'Servicii', path: 'servicii' },
            { name: 'Gospodăria', path: 'gospodarie' },
            { name: 'Diverse', path: 'diverse' },
            { name: 'Instrumente', path: 'instrumente' }
        ],
        icon: <CgMenuGridO/>
    },
    {
        id: 2,
        title: 'Electronica',
        list: [
            { name: 'Cabluri', path: 'cabluri' },
            { name: 'Incarcator', path: 'incarcator' },
            { name: 'Laptopuri', path: 'laptopuri' }
        ],
        icon: <MdOutlineWorkOutline/>
    },
    {
        id: 3,
        title: 'Imobil',
        list: [
            { name: 'Apartamente', path: 'apartamente' },
            { name: 'Case', path: 'case' },
            { name: 'Garajuri', path: 'garajuri' }
        ],
        icon: <ImHome/>
    },
    {
        id: 4,
        title: 'Servicii',
        list: [
            { name: 'Curierat', path: 'curierat' },
            { name: 'Consultanță', path: 'consultanta' },
            { name: 'Reparații', path: 'reparatii' }
        ],
        icon: <GrUserWorker/>
    },
    {
        id: 5,
        title: 'Gospodăria',
        list: [
            { name: 'Seminte', path: 'seminte' },
            { name: 'Unelte', path: 'unelte' },
            { name: 'Îngrășăminte', path: 'ingrasaminte' }
        ],
        icon: <TbGardenCart/>
    },
    {
        id: 6,
        title: 'Diverse',
        list: [
            { name: 'Picturi', path: 'picturi' },
            { name: 'Sculpturi', path: 'sculpturi' },
            { name: 'Gravuri', path: 'gravuri' }
        ],
        icon: <HiCollection/>
    },
    {
        id: 7,
        title: 'Instrumente',
        list: [
            { name: 'Chitare', path: 'chitare' },
            { name: 'Baterii', path: 'baterii' },
            { name: 'Piane', path: 'piane' }
        ],
        icon: <BiMusic/>
    },
    {
        id: 8,
        title: 'Transport',
        list: [
            { name: 'Autoturisme', path: 'autoturisme' },
            { name: 'Autobuze', path: 'autobuze' },
            { name: 'Camioane', path: 'camioane' }
        ],
        icon: <AiFillCar/>
    },
    {
        id: 9,
        title: 'Sărbători',
        list: [
            { name: 'Crăciun', path: 'craciun' },
            { name: 'Paște', path: 'paste' },
            { name: 'Halloween', path: 'halloween' }
        ],
        icon: <BiDrink/>
    }
]
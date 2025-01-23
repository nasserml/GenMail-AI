import { Columns, Columns2, Columns3, Columns4, RectangleHorizontal } from "lucide-react";

export default[
    {
        label:'kolumna',
        type:'column',
        numOfCol:1,
        icon:RectangleHorizontal
    },
    {
        label:'2 kolumny',
        type:'column-2',
        numOfCol:2,
        icon:Columns2
    },
    {
        label:'3 kolumny',
        type:'column-3',
        numOfCol:3,
        icon:Columns3
    },
    {
        label:'4 kolumny',
        type:'column-4',
        numOfCol:4,
        icon:Columns4
    },
]
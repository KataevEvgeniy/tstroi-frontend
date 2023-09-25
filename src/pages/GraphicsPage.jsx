import React from "react";
import MegaCard from "../components/card/MegaCard"
import Stack from '@mui/material/Stack';

function GraphicsPage() {
  return <div>
    <Stack direction="row" spacing={2} >
        <MegaCard title={"Прогресс работ"} text={`25%`} />
        <MegaCard title={"Склад материалов"} text={'25%'}/>
        <MegaCard title={"Общий прогресс"} text={'75%'}/>
    </Stack>
    <MegaCard title={"график работ"} sx={{marginTop: 10}}/>
    <MegaCard title={"график материалов"} />
    </div>;
}

export default GraphicsPage;
import React from 'react'
import React from 'react'
import { Hotel, Flight, DirectionsCar,LocalTaxi } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
`
const HeaderCountainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
`;
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;


export const Header = () => {
  return (
    <Container>
    <HeaderCountainer>
        <HeaderList>
            <HeaderListItem>
                <Hotel/>
                <span>Stays</span>
            </HeaderListItem>
            <HeaderListItem>
                <Flight/>
                <span>Flights</span>
            </HeaderListItem>
            <HeaderListItem>
                <DirectionsCar/>
                <span>Car rentals</span>
            </HeaderListItem>
            <HeaderListItem>
                <Hotel/>
                <span>Attractions</span>
            </HeaderListItem>
            <HeaderListItem>
                <LocalTaxi/>
                <span>Airport taxis</span>
            </HeaderListItem>
        </HeaderList>
    </HeaderCountainer>
    </Container>
  )
}



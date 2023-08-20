import React, { useState } from 'react'
import { Hotel, Flight, DirectionsCar, LocalTaxi, CalendarViewDay, Person, CalendarMonth } from "@mui/icons-material";
import styled from "styled-components";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'

const Container = styled.div`
    background-color: #352F44;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`
const HeaderCountainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
`;
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const HeaderTitle = styled.h1`
`;
const HeaderDesc = styled.p`
    margin: 20px 0px;
`;
const HeaderBtn = styled.button`
    background-color:  #5C5470;
    color: white;     
    font-weight: 500;
    border: none;
    padding:10px;
    cursor:pointer;
`;
const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius:5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`
const HeaderSearchItem = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
`
const HeaderIcon = styled.span`
    color: lightgray;
`
const HeaderSearchInput = styled.input`
    border: none;
    outline: none;
    color: lightgray;
    cursor: pointer
`
const HeaderSearchText = styled.span`
    color: lightgray;
    cursor: pointer
`
const DateCountainer = styled.span`
    position: absolute;
    top: 50px;   
`;
const Option = styled.div`
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    border-radius:5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0);
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;
const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
const OptionText = styled.span``;
const OptionCount = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    font-size:12px;
    color:black;
`;
const OptionCountBtn = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #5C5470;
    color: #5C5470;
    cursor: pointer;
    background-color: white;
`;
const OptionCountNumber = styled.span``;


export const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: `selection`
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOptions =(name, operations) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operations === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

  return (
    <Container>
    <HeaderCountainer>
        <HeaderList>
            <HeaderListItem style={{border:'1px solid white', padding:'10px', borderRadius:'20px'}}>
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
        <HeaderTitle>A lifetime of Discounts? It's Excellent</HeaderTitle>
        <HeaderDesc>Get rewarded for your travels unlock instant savings of 10% or more with a free emmyBooking account</HeaderDesc>
        <HeaderBtn>Sign in / Register</HeaderBtn>
        <HeaderSearch>
            <HeaderSearchItem>
                <HeaderIcon><Hotel/></HeaderIcon>
                <HeaderSearchInput placeholder='where are you going?'></HeaderSearchInput>
            </HeaderSearchItem>
            <HeaderSearchItem>
                <HeaderIcon><CalendarMonth/></HeaderIcon>
                <HeaderSearchText onClick={()=> setOpenDate(!openDate)}>
                    {`${format(
                        date[0].startDate, 'MM/dd/yyyy'
                    )} to ${format(
                        date[0].endDate, 'MM/dd/yyyy'
                    )}`}
                </HeaderSearchText>
                <DateCountainer>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item =>setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                />}
                </DateCountainer>
            </HeaderSearchItem>
            <HeaderSearchItem>
                <HeaderIcon><Person/></HeaderIcon>
                <HeaderSearchText>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</HeaderSearchText>
                <Option>
                    <OptionItem>
                        <OptionText>Adult</OptionText>
                        <OptionCount>
                        <OptionCountBtn disabled={options.adult <= 1} onClick={()=> handleOptions("adult", "d")}>-</OptionCountBtn>
                        <OptionCountNumber>{options.adult}</OptionCountNumber>
                        <OptionCountBtn onClick={()=> handleOptions("adult", "i")}>+</OptionCountBtn>
                        </OptionCount>
                    </OptionItem>
                    <OptionItem>
                        <OptionText>Children</OptionText>
                        <OptionCount>
                        <OptionCountBtn disabled={options.children <= 0} onClick={()=> handleOptions("children", "d")}>-</OptionCountBtn>
                        <OptionCountNumber>{options.children}</OptionCountNumber>
                        <OptionCountBtn onClick={()=> handleOptions("children", "i")}>+</OptionCountBtn>
                        </OptionCount>
                    </OptionItem>
                    <OptionItem>
                        <OptionText>Room</OptionText>
                        <OptionCount>
                        <OptionCountBtn disabled={options.room <= 1} onClick={()=> handleOptions("room", "d")}>-</OptionCountBtn>
                        <OptionCountNumber>{options.room}</OptionCountNumber>
                        <OptionCountBtn onClick={()=> handleOptions("room", "i")}>+</OptionCountBtn>
                        </OptionCount>
                    </OptionItem>
                </Option>
                
            </HeaderSearchItem>
            <HeaderSearchItem>
                <HeaderBtn>Search</HeaderBtn>
            </HeaderSearchItem>
        </HeaderSearch>
    </HeaderCountainer>
    </Container>
  )
}



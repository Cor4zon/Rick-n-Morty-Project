import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    height: 59px;
    background-color: grey;
    color: white;
`

const FilterDiv = styled.div`
`

const SearchDiv = styled.div`
`

const FilterBar = () => {
    return (
        <FilterContainer>
            <FilterDiv>

            </FilterDiv>
            <SearchDiv>

            </SearchDiv>
        </FilterContainer>
    );
};

export default FilterBar;
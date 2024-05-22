import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React, { } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 4,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        border : "2px solid #ddd"
    },
}));

const SearchInput = (props) => {
    const { onClick } = props;
    return (
        <Search onBlur={onClick}>
            <SearchIconWrapper>
                <span ><SearchIcon /></span>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search Products..."
                inputProps={{ 'aria-label': 'search' }} />
        </Search>
    );
}

export default SearchInput;

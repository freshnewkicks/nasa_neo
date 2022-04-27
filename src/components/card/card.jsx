import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function TextWithDivider({textContentPrimary, textContentSecondary}){

    const content = (
        <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
        </div>
    );

    return (
        <Root>
            <Divider>
                <Chip label="What Is This?" />
            </Divider>
            {textContentPrimary}
            <Divider>CENTER</Divider>
            {textContentSecondary}
            <Divider textAlign="left" variant="inset">LEFT</Divider>
            {content}
            <Divider textAlign="right">RIGHT</Divider>
            {content}
        </Root>
    );
}


import * as React from 'react';
import {styled} from '@mui/material/styles';

const Root = styled('div')(({theme}) => ({
  'width': '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function TextWithDivider(props) {
  return (
    <div>
      <Root>
        {props.children}
      </Root>
    </div>

  );
}


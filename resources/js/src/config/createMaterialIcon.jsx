import { createSvgIcon } from '@mui/material';
import { createElement } from 'react';

export function createMaterialIcon(Icon) {
    return createSvgIcon(
        createElement(Icon),
        Icon.displayName || 'OPTControlIcon',
    );
}

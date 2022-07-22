import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import {
    Card, 
    CardInside,
    Button,
    CustomInput
} from "reactstrap";

import "./../theme-selector.scss";
import { Customer } from './Theme';

class ThemeSlector extends React.Component {
    static PropTypes = {
        style: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        styleOptions: PropTypes.array,
        colorOptions: PropTypes.bool,
        onChangeTheme: PropTypes.func,
    };

    static defaultProps = {
        styleOptions: [
            { name: 'Light', value: 'light' },
            { name: 'Dark', value: 'dark' },
            { name: 'Color', value: 'color' }
        ],
        colorOptions: [
            { name: 'Primary', value: 'primary' },
            { name: 'Success', value: 'success' },
            { name: 'Info', value: 'info' },
            { name: 'Danger', value: 'danger' },
            { name: 'Warning', value: 'warning' },
            { name: 'Indigo', value: 'indigo' },
            { name: 'Purple', value: 'purple' },
            { name: 'Pink', value: 'pink' },
            { name: 'Yellow', value: 'yellow' }
        ]
    };
}
